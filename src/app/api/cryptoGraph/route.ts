import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url || '');
	const cryptoId = searchParams.get('id');
	const resp = await fetch(
		`https://graphsv2.coinpaprika.com/currency/data/${cryptoId}/7d/?quote=usd`
	);
	const data = await resp.json();
	console.log(data);
	return NextResponse.json(data);
}
