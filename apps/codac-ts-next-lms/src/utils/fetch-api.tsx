import qs from "qs";

import { getStrapiURL } from "./api-helpers";

interface Response<T> {
  data: T;
  error: {
    status: number;
    name: string;
    message: string;
    details: object;
  } | null;
}

const typeResponse = (res, datadir: boolean) => {
  return datadir ? (res as Response<T>) : (res as T);
};

export async function fetchAPI<T>(
  path: string,
  urlParamsObject = {},
  options = {},
  dataResponse = true
) {
  try {
    // Merge default and user options
    const mergedOptions = {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    };

    // Build request URL
    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${getStrapiURL(`/api${path}${queryString ? `?${queryString}` : ""}`)}`;
    // Trigger API call
    console.log("requestUrl", requestUrl);
    const response = await fetch(requestUrl, mergedOptions);
    console.log("respon", response);

    const res = (await response.json()) as Response<T> | T;

    const data: T = dataResponse ? res.data : res;

    const error = res.error;
    if (error) {
      console.error(error);
      throw new Error(`An error occurred while fetching the API: ${requestUrl}`);
    }
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(`Please check if your server is running and you set all the required tokens.`);
  }
}
