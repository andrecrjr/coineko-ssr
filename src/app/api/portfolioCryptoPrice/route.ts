// import { fetchService } from '@/services/ApiService';
// import { Currency } from '@/types';
import { fetchService } from '@/services/ApiService';
import { Currency } from '@/types';
import { handledDataWithPaginationAndSparkline } from '@/utils';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
	const { dataPortfolio, idPage } = await request.json();

	const priceData = await fetchService.getFetchPriceApi<Currency[]>(
		'/tickers',
		{},
		1000 * 1000
	);
	const portfolioFilteredData =
		priceData?.filter(currency => dataPortfolio.includes(currency.id)) || [];
	const paginatedData = await handledDataWithPaginationAndSparkline(
		portfolioFilteredData,
		idPage
	);

	return NextResponse.json(paginatedData);
}

export async function GET() {
	return NextResponse.json({});
}
