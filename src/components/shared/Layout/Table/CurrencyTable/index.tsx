/* eslint-disable @next/next/no-img-element */
'use client';

import { Currency } from '@/types';
import { CurrencyTableColumn } from './MainCurrencyTable';

export const MainBodyTable = ({ currencyList }: { currencyList: Currency[] }) => {
	if (currencyList?.length > 0)
		return (
			<tbody>
				{currencyList.map((currency: Currency) => (
					<CurrencyTableColumn key={currency.name} currency={currency} />
				))}
			</tbody>
		);

	return <></>;
};
