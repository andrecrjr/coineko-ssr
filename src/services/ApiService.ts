export const fetchService = {
	async fetchCached<T>(path: string, options?: {}): Promise<T> {
		return fetch(`https://api.coinpaprika.com/v1/${path}`, {
			...options,
			next: { revalidate: 900000 }
		})
			.then(async response => {
				const data = await response.json();
				return data;
			})
			.catch(e => {
				throw new Error('Problem to connect in API', e);
			});
	},
	async fetchData<T>(url: string): Promise<T> {
		try {
			const data = await this.fetchCached<T>(url);
			return data;
		} catch (error) {
			throw new Error(`Problem in API: ${error}`);
		}
	},
	async getFetchData<T>(urlParam: string): Promise<T> {
		try {
			const data = await this.fetchData<T>(`${urlParam}`);
			return data;
		} catch (error) {
			throw new Error(`Problem in API ${error}`);
		}
	}
};
