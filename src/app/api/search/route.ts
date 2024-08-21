import { fetchService } from '@/services/ApiService';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url || '');
	const cryptoId = searchParams.get('id');
	const searchData = await fetchService.getFetchPriceApi(
		`/search?q=${cryptoId}`,
		{},
		1000 * 1000
	);

	return NextResponse.json(searchData);
}
