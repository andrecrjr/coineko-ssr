import useSWR from 'swr';
import { fetchService } from '@/services/ApiService';

export function useFetch<T>(
	path: string,
	payload: { method: String; body: String } = { method: 'GET', body: '{}' }
) {
	const { data, error, isLoading, mutate } = useSWR<T>(
		path,
		fetchService.fetchCached,
		{
			refreshInterval: 0,
			revalidateIfStale: false,
			revalidateOnFocus: false
		}
	);

	async function postData() {
		if (payload?.method === 'POST') {
			const postedData = await fetchService.fetchCached<T>(path, payload);
			mutate(postedData, false);
		}
	}

	postData();

	return { data, error, isLoading };
}
