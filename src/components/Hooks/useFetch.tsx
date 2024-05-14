import useSWR from 'swr';
import { fetchService } from '@/services/ApiService';

const defaultConfig = {
	revalidateOnFocus: true
};

export function useFetch<T>(path: string, swrOptions = defaultConfig) {
	const { data, error, isLoading } = useSWR<T>(
		`${path}`,
		fetchService.fetchCached,
		swrOptions
	);
	console.log(path);
	return { data, error, isLoading };
}
