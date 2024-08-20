import { fetchService } from '@/services/ApiService';
// import { useEffect } from 'react';
import useSWR from 'swr';

export function useFetch<T>(path: string) {
	const { data, error, isLoading } = useSWR<T>(path, fetchService.fetchCached, {
		revalidateOnFocus: false,
		dedupingInterval: 900000000,
		revalidateOnReconnect: false
	});
	return { data, error, isLoading };
}
