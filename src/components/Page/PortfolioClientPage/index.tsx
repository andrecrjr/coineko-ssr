'use client';
import { useFetch } from '@/components/Hooks/useFetch';
import usePortfolioData from '@/components/Hooks/usePortfolioData';
import { TableComposition } from '@/components/shared/Layout';

import { CurrencyList } from '@/types';
import React from 'react';

function PortfolioClientPage() {
	const { userPortfolioData } = usePortfolioData();
	const { data, error } = useFetch<CurrencyList>(
		`/coins/markets?vs_currency=usd&ids=${encodeURIComponent(
			userPortfolioData?.join()
		)}&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
	);

	if (error) {
		return (
			<p className=" text-dark-purple-neko">
				Problem to get data from Coingecko!
			</p>
		);
	}

	return (
		<TableComposition
			data={data || []}
			tableDescription={
				'Your portfolio, with your starred currencies in Coineko.'
			}
		/>
	);
}

export default PortfolioClientPage;
