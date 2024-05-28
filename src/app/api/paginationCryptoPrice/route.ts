import { fetchService } from '@/services/ApiService';
import { Currency } from '@/types';
import { handledDataWithPaginationAndSparkline } from '@/utils';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url || '');
	const categoryId = searchParams.get('category');
	const id = searchParams.get('page') || '1';
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
	const paginatedUpdateData = await handledDataWithPaginationAndSparkline(
		filteredDataByCategory,
		parseInt(id)
	);

	return NextResponse.json({ paginatedUpdateData, categoryData });
}
