export const fetchService = {
	async fetchCached<T>(path: string, options?: {}, revalidate:number=900000): Promise<T> {
		const data = await fetch(`https://api.coinpaprika.com/v1/${path}`, {
			...options,
			next: { revalidate: revalidate }
		})
			.then(async response => {
				const data = await response.json();
				return data;
				
			})
			.catch(e => {
				throw new Error('Problem to connect in API', e);
			});
		return data;
	},
	async fetchData<T>(url: string, options?: {}, revalidate?:number): Promise<T> {
		try {
			const data = await this.fetchCached<T>(url, options, revalidate);
			return data;
		} catch (error) {
			throw new Error(`Problem in API: ${error}`);
		}
	},
	async getFetchData<T>(urlParam: string, options?: {}, revalidate?:number): Promise<T> {
		try {
			const data = await this.fetchData<T>(`${urlParam}`, options, revalidate);
			return data;
		} catch (error) {
			throw new Error(`Problem in API ${error}`);
		}
	}
};
