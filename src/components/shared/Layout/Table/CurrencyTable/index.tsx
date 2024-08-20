/* eslint-disable @next/next/no-img-element */
'use client';

import { Currency } from '@/types';
import { CryptoBodyTable } from './CryptoBodyTable';

export const CryptoTableContainer = ({
	currencyList
}: {
	currencyList: Currency[];
}) => {
	if (currencyList?.length > 0)
		return (
			<tbody>
				{currencyList.map((currency: Currency) => (
					<CryptoBodyTable key={currency.name} currency={currency} />
				))}
			</tbody>
		);

	return <></>;
};
