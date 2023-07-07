import { AxiosResponse, Method } from "axios";
import useSWR from "swr";
import { axiosInstance, fetchService } from "@/services/ApiService";

const defaultConfig = {
  revalidateOnFocus: true,
};

export function useFetch<T>(
  path: string,
  method: Method,
  swrOptions = defaultConfig
) {
  const { data, error, isLoading } = useSWR<T>(
    `${path}`,
    fetchService,
    swrOptions
  );
  return { data, error, isLoading };
}
