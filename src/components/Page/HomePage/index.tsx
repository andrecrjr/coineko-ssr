import React from 'react';

import {TableFilteredComposition } from '@/components/shared/Layout';
import { CurrencyList } from '@/types';

export default function HomePage({ data }: { data: CurrencyList }) {
	return (
		<TableFilteredComposition
			data={data}
			tableDescription={
				'Price of the main cryptocurrencies by Market Capitalization.'
			}
		/>
	);
}
