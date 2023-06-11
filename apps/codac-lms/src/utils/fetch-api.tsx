import qs from "qs";

import { getStrapiURL } from "./api-helpers";

interface Error {
  status: number;
  name: string;
  message: string;
  details: object;
}

interface Response<T> {
  data: T;
  error: Error | null;
}

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
    const queryString = qs.stringify(urlParamsObject, {
      encodeValuesOnly: true, // prettify URL
    });
    const requestUrl = `${getStrapiURL(`/api${path}${queryString ? `?${queryString}` : ""}`)}`;
    console.log("requestUrl", requestUrl);
    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);
    const getData = async () => {
      if (dataResponse) {
        const res = (await response.json()) as Response<T>;
        const data: T = res.data;
        const error = res.error;
        if (error) {
          console.error(error);
          throw new Error(`An error occurred while fetching the API: ${requestUrl}`);
        }
        return data;
      } else {
        const data = (await response.json()) as T;
        return data;
      }
    };

    const data = await getData();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(`Please check if your server is running and you set all the required tokens.`);
  }
}
export async function fetchStrapiSuspense({
  path,
  urlParamsObject = {},
  options = {},
}: {
  path: string;
  urlParamsObject: { populate?: string[]; sort?: object; filters?: object };
  options: object;
}) {
  // Merge default and user options
  const mergedOptions = {
    next: { revalidate: 60 },

    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  };

  // Build request URL
  const queryString = qs.stringify(urlParamsObject, {
    encodeValuesOnly: true, // prettify URL
  });
  const requestUrl = `${getStrapiURL(`/api${path}${queryString ? `?${queryString}` : ""}`)}`;
  console.log("requestUrl", requestUrl);
  // Trigger API call
  return fetch(requestUrl, mergedOptions);
}

export async function fetchStrapi<T>({
  path,
  urlParamsObject = {},
  options = {},
  dataResponse = true,
}: {
  path: string;
  urlParamsObject: object;
  options: object;
  dataResponse: boolean;
}) {
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
    const queryString = qs.stringify(urlParamsObject, {
      encodeValuesOnly: true, // prettify URL
    });
    const requestUrl = `${getStrapiURL(`/api${path}${queryString ? `?${queryString}` : ""}`)}`;
    console.log("requestUrl", requestUrl);
    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);
    const getData = async () => {
      if (dataResponse) {
        const res = (await response.json()) as Response<T>;
        const data: T = res.data;
        const error = res.error;
        if (error) {
          console.error(error);
          throw new Error(`An error occurred while fetching the API: ${requestUrl}`);
        }
        return data;
      } else {
        const data = (await response.json()) as T;
        return data;
      }
    };

    const data = await getData();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(`Please check if your server is running and you set all the required tokens.`);
  }
}
