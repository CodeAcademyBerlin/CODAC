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

export async function fetchAPI<T>(path: string, urlParamsObject = {}, options = {}) {
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
    console.log("requestUrl", requestUrl);
    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);
    const { data, error } = (await response.json()) as Response<T>;
    console.log("data", data);

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
