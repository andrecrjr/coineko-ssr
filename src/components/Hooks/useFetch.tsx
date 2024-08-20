import { fetchService } from '@/services/ApiService';
// import { useEffect } from 'react';
import useSWR from 'swr';

// type Payload = {
// 	method: 'GET' | 'POST';
// 	body: string;
// };

export function useFetch<T>(path: string) {
	const { data, error, isLoading } = useSWR<T>(path, fetchService.fetchCached);

	// useEffect(() => {
	// 	const postData = async () => {
	// 		if (payload?.method === 'POST') {
	// 			try {
	// 				const postedData = await fetchService.fetchCached<T>(path, payload);
	// 				mutate(postedData, false); // Atualiza o cache SWR sem revalidar
	// 			} catch (error) {
	// 				throw new Error('Problem with server');
	// 			}
	// 		}
	// 	};

	// 	if (payload.method === 'POST') {
	// 		postData();
	// 	}
	// }, []);

	return { data, error, isLoading };
}
