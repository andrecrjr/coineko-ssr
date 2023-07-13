import useSWR from "swr";
import { fetchService } from "@/services/ApiService";

const defaultConfig = {
  revalidateOnFocus: true,
};

export function useFetch<T>(
  path: string,
  method: string = "get",
  swrOptions = defaultConfig
) {
  const { data, error, isLoading } = useSWR<T>(
    `${path}`,
    fetchService.fetchCached,
    swrOptions
  );
  return { data, error, isLoading };
}
