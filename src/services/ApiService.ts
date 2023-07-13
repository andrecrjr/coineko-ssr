export const fetchService = {
  async fetchCached<T>(path: string, options?: {}): Promise<T> {
    return fetch(`https://api.coingecko.com/api/v3/${path}`, {
      ...options,
      next: { revalidate: 5000 },
    })
      .then(async (response) => {
        const data = await response.json();
        return data;
      })
      .catch((e) => {
        console.log(e);
        throw new Error("Problem to connect in API");
      });
  },
  async fetcher<T>(url: string): Promise<T> {
    try {
      const data = await this.fetchCached<T>(url);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(`Problem in API: ${error}`);
    }
  },
  async getMarketData<T>(urlParam: string): Promise<T> {
    try {
      const data = await this.fetcher<T>(`coins/markets?${urlParam}`);
      return data;
    } catch (error: unknown) {
      console.log(error);
      throw new Error("Problem in API");
    }
  },
};
