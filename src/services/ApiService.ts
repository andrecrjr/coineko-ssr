import { CurrencyList } from '@/types';

export const fetchService = {
	async fetchCached<T>(
		path: string,
		payload?: {},
		revalidate: number = 900000
	): Promise<T> {
		const options = { ...payload, next: { revalidate } };
		const data = await fetch(`${path}`, options)
			.then(async response => {
				const data = await response.json();
				return data;
			})
			.catch(e => {
				throw new Error('Problem to connect in API', e);
			});
		return data;
	},
	async getFetchPriceApi<T>(
		urlParam: string,
		options?: {},
		revalidate?: number
	): Promise<T> {
		try {
			const data = await this.fetchCached<T>(
				`https://api.coinpaprika.com/v1/${urlParam}`,
				options,
				revalidate
			);
			return data;
		} catch (error) {
			throw new Error(`Problem in API ${error}`);
		}
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
		`${process.env.NEXT_STATIC_HOSTNAME}/api/paginationCryptoPrice?category=${categoryId}&page=${id}`
	);

	return { paginatedData: paginatedUpdateData, categoryData };
}
