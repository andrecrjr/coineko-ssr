import { Currency, PageCurrencyQuery } from '@/types';

export const convertFilterQueryString = (
	filterPaginationAndCategory: PageCurrencyQuery,
	prepath: string = ''
) => {
	filterPaginationAndCategory?.category === 'cryptocurrency' &&
		delete filterPaginationAndCategory['category'];
	const filterResult = new URLSearchParams(
		filterPaginationAndCategory
	).toString();
	return prepath + filterResult;
};

export const paginationApiData = (data: Currency[], currentPage: number) => {
	let itensPerPage = 50;
	let initialIndex = (currentPage - 1) * itensPerPage;
	if (initialIndex + itensPerPage < data.length)
		return data.splice(initialIndex, itensPerPage);
	return data;
};

export const getMetadataName = (
	metadata: [{ category_id: string; name: string }],
	id: string
) => {
	const titleSection = metadata.filter(item => item.category_id === id)[0];
	return titleSection;
};

export const formatterMoney = (
	language = 'en-US',
	currency: {
		style: 'currency';
		currency: 'USD';
	},
	amount: number
) => {
	return new Intl.NumberFormat(language, currency).format(amount);
};

export const storageObject = {
	get: <T,>(storageKey: string): T => {
		const data =
			globalThis?.localStorage?.getItem(storageKey) || JSON.stringify([]);
		return JSON.parse(data);
	},
	set: (storageKey: string, setData: string[]): boolean => {
		if (!setData) throw new Error('No data to set in localstorage');
		globalThis?.localStorage?.setItem(storageKey, JSON.stringify(setData));
		return true;
	}
};

export const handledDataWithPaginationAndSparkline = async (
	apiData: Currency[],
	idPage: number
) => {
	const paginatedData = paginationApiData(apiData, Number(idPage || 1));
	// const paginatedUpdateData = await Promise.all(
	// 	paginatedData.map(async currency => {
	// 		const response = await fetch(
	// 			`https://graphsv2.coinpaprika.com/currency/data/${currency.id}/7d/?quote=usd`
	// 		);
	// 		const data = await response.json();
	// 		return { ...currency, last_7_days: data[0].price };
	// 	})
	// );
	return paginatedData;
};

// back-end url or front-end url
export const staticHostURL =
	process.env.NEXT_STATIC_HOSTNAME || globalThis?.location?.origin;
