'use client';
import { useFetch } from '@/components/Hooks/useFetch';
import usePortfolioData from '@/components/Hooks/usePortfolioData';
import { TableFilteredComposition } from '@/components/shared/Layout';

import { CurrencyList } from '@/types';

function PortfolioClientPage() {
	const { userPortfolioData } = usePortfolioData();
	console.log(process.env.NEXT_PUBLIC_STATIC_HOSTNAME);
	const { data, error } = useFetch<CurrencyList>(
		`${process.env.NEXT_STATIC_HOSTNAME!}/portfolioCryptoPage`,
		{
			method: 'POST',
			body: JSON.stringify({ dataPortfolio: userPortfolioData, page: 1 })
		}
	);
	console.log(data);

	const filter =
		data?.filter(currency => userPortfolioData.includes(currency.id)) || [];

	if (error) {
		return (
			<p className=" text-dark-purple-neko">
				Problem to get data from {process.env.NEXT_PUBLIC_CURRENT_COIN_API}!
			</p>
		);
	}

	return (
		<TableFilteredComposition
			data={filter}
			tableDescription={
				'Your portfolio, with your starred currencies in coinyan.'
			}
		/>
	);
}

export default PortfolioClientPage;
