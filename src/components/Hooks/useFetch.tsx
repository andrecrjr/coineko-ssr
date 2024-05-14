import useSWR, { useSWRConfig } from 'swr';
import { fetchService } from '@/services/ApiService';

const defaultConfig = {
	revalidateOnFocus: true
};

export function useFetch<T>(
	path: string,
	payload: object = {},
	swrOptions = defaultConfig
) {
	const { data, error, isLoading, mutate } = useSWR<T>(
		[path, payload],
		fetchService.fetchCached,
		swrOptions
	);

	return { data, error, isLoading };
}
