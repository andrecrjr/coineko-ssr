import { CurrencyList } from "@/types";
import axios, { AxiosError, AxiosResponse } from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/",
});

export const fetchService = {
  async fetcher<T>(url: string): Promise<T> {
    try {
      const { data } = await axiosInstance["get"]<T>(url);
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(`Problem in API: ${error}`);
    }
  },
  async getMarketData(urlParam: string) {
    try {
      const data = await this.fetcher<CurrencyList>(
        `coins/markets?${urlParam}`
      );
      return data;
    } catch (error: unknown) {
      console.log(error);
    }
  },
};
