'use client';
import { useFetch } from '@/components/Hooks/useFetch';
import usePortfolioData from '@/components/Hooks/usePortfolioData';
import { TableComposition } from '@/components/shared/Layout';

import { CurrencyList } from '@/types';

function PortfolioClientPage() {
	const { userPortfolioData } = usePortfolioData();
	const { data, error } = useFetch<CurrencyList>(
		'tickers'
	);
	const filter = data?.filter(currency => userPortfolioData.includes(currency.id))||[];
	
	if (error) {
		return (
			<p className=" text-dark-purple-neko">
				Problem to get data from {process.env.NEXT_CURRENT_COIN_API}!
			</p>
		);
	}

	return (
		<TableComposition
			data={filter}
			tableDescription={
				'Your portfolio, with your starred currencies in coinyan.'
			}
		/>
	);
}

export default PortfolioClientPage;
