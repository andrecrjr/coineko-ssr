import { CurrencyList } from '@/types';

export const fetchService = {
	async fetchCached<T>(
		path: string,
		options: {
			method?: string;
			headers?: { [key: string]: string };
			body?: string;
			[key: string]: any;
		} = {},
		revalidate: number = 900000
	): Promise<T> {
		try {
			const fetchOptions = {
				...options,
				headers: {
					'Content-Type': 'application/json',
					...(options.headers || {})
				},
				next: { revalidate }
			};

			const response = await fetch(path, fetchOptions);

			if (!response.ok) {
				throw new Error(`API responded with status ${response.status}`);
			}

			const data = await response.json();

			return data;
		} catch (error) {
			throw new Error(`Problem connecting to API: ${(error as Error).message}`);
		}
	},

	async getFetchPriceApi<T>(
		urlParam: string,
		options: {
			method?: string;
			headers?: { [key: string]: string };
			body?: string;
			[key: string]: any;
		} = {},
		revalidate?: number
	): Promise<T> {
		return this.fetchCached<T>(
			`https://api.coinpaprika.com/v1/${urlParam}`,
			options,
			revalidate
		);
	}
};

export async function fetchAndFilterDataByTag(categoryId: string, id: string) {
	// Fetch the complete list of currencies
	const { paginatedUpdateData, categoryData } = await fetchService.fetchCached<{
		paginatedUpdateData: CurrencyList;
		categoryData: {
			category_id: string;
			name: string;
			description: string;
			coins: string[];
		};
	}>(
		`${process.env.NEXT_PUBLIC_STATIC_HOSTNAME}/api/paginationCryptoPrice?category=${categoryId}&page=${id}`
	);

	return { paginatedData: paginatedUpdateData, categoryData };
}
