import { CurrencyList } from "@/types";
import axios, { AxiosError, AxiosResponse } from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/",
});

export async function fetchService<T>(url: string): Promise<T> {
  try {
    const { data } = await axiosInstance["get"]<T>(url);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(`Problem in API: ${error}`);
  }
}

export async function getMarketData(urlParam: string) {
  try {
    const data = await fetchService<CurrencyList>(`coins/markets?${urlParam}`);
    return data;
  } catch (error: unknown) {
    console.log(error);
    // throw new Error(`Problem to fetch Market Data ${error}`);
  }
}
