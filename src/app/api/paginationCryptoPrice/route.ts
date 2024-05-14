import { fetchService } from '@/services/ApiService';
import { Currency } from '@/types';
import { paginationApiData } from '@/utils';
import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

export async function GET(request: NextApiRequest) {
	const { searchParams } = new URL(request.url || '');
	const categoryId = searchParams.get('category');
	const id = searchParams.get('page');
	const priceData = await fetchService.getFetchPriceApi<Currency[]>(
		'/tickers',
		{},
		1000 * 1000
	);

	const categoryData = await fetchService.getFetchPriceApi<{
		category_id: string;
		name: string;
		description: string;
		coins: string[];
	}>(`tags/${categoryId}?additional_fields=coins`);

	// Filter the data by category if the category is not 'cryptocurrency'
	const filteredDataByCategory =
		categoryId === 'cryptocurrency'
			? priceData
			: priceData.filter(currency => categoryData.coins.includes(currency.id));
	// Paginate the filtered data
	const paginatedData = paginationApiData(filteredDataByCategory, Number(id));
	const paginatedUpdateData = await Promise.all(
		paginatedData.map(async currency => {
			const response = await fetch(
				`https://graphsv2.coinpaprika.com/currency/data/${currency.id}/7d/?quote=usd`
			);
			const data = await response.json();
			return { ...currency, last_7_days: data[0].price };
		})
	);

	return NextResponse.json({ paginatedUpdateData, categoryData });
}
