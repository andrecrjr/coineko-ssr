// import { fetchService } from '@/services/ApiService';
// import { Currency } from '@/types';
import { fetchService } from '@/services/ApiService';
import { Currency } from '@/types';
import { handledDataWithPaginationAndSparkline } from '@/utils';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
	try {
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

		return NextResponse.json(paginatedData, { status: 200 });
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error('Error fetching or processing data:', error);
		return NextResponse.json(
			{ message: 'There was a problem processing your request.' },
			{ status: 500 }
		);
	}
}

export async function GET() {
	return NextResponse.json({});
}
