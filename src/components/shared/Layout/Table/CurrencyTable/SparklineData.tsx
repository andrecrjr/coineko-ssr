'use client';
import { useFetch } from '@/components/Hooks/useFetch';
import Sparkline from '@/components/shared/Sparkline';
import { Currency } from '@/types';
import React from 'react';

type Props = {
	currency: Currency;
};

export const SparklineData = ({ currency }: Props) => {
	const { isLoading, data } = useFetch<
		[
			{
				price: [];
				volume: [];
				market_cap: [];
				price_low: number;
				price_high: number;
			}
		]
	>(
		`https://graphsv2.coinpaprika.com/currency/data/${currency.id}/7d/?quote=usd`
	);

	if (!isLoading && data)
		return (
			<>
				{data[0]?.price && (
					<Sparkline
						datasetSpark={data[0]?.price}
						color={
							currency?.quotes['USD'].percent_change_7d &&
							currency?.quotes['USD'].percent_change_7d > 0
								? 'green'
								: 'red'
						}
					/>
				)}
			</>
		);
	return (
		<div
			className="animate-shimmer rounded bg-gradient-to-r from-gray-200 to-gray-300"
			style={{
				width: '100%',
				height: '50px',
				borderRadius: '4px'
			}}
		>
			<div className="w-full h-full bg-gray-300" />
		</div>
	);
};
