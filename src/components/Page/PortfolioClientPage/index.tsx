'use client';
import { useFetch } from '@/components/Hooks/useFetch';
import usePortfolioData from '@/components/Hooks/usePortfolioData';
import { Table } from '@/components/shared/Layout';

import { CurrencyList } from '@/types';
import { useEffect } from 'react';

function PortfolioClientPage() {
	const { userPortfolioData } = usePortfolioData();
	const { data } = useFetch<CurrencyList>(
		`${process.env.NEXT_PUBLIC_STATIC_HOSTNAME}/api/portfolioCryptoPrice`,
		{
			method: 'POST',
			body: JSON.stringify({ dataPortfolio: userPortfolioData, page: 1 })
		}
	);

	useEffect(()=>{
		
	},[userPortfolioData])

	if (!data) {
		return (
			<p className=" text-dark-purple-neko">
				Loading data from {process.env.NEXT_PUBLIC_CURRENT_COIN_API}!
			</p>
		);
	}

	return (
		<Table
			data={data}
			tableDescription={
				'Your portfolio, with your starred currencies in coinyan.'
			}
		/>
	);
}

export default PortfolioClientPage;
