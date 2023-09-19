import React from 'react';

import { TableComposition } from '@/components/shared/Layout';
import { CurrencyList } from '@/types';

export default function HomePage({ data }: { data: CurrencyList }) {
	return (
		<TableComposition
			data={data}
			tableDescription={
				'Price of the main cryptocurrencies by Market Capitalization.'
			}
		/>
	);
}
