import React from 'react';

import { Table } from '@/components/shared/Layout';
import { CurrencyList } from '@/types';

export default function HomePage({ data }: { data: CurrencyList }) {
	return (
		<Table
			data={data}
			tableDescription={
				'Price of the main cryptocurrencies by Market Capitalization.'
			}
		/>
	);
}
