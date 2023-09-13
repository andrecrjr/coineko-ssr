import { useCallback, useState } from 'react';
import { PageCurrencyQuery } from '@/types';
import { convertFilterQueryString } from '@/utils';

export const useFilter = () => {
	const [filter, setFilter] = useState<string>('');
	useCallback(async (filterPaginationAndCategory: PageCurrencyQuery) => {
		const queryStringFilter = convertFilterQueryString(
			filterPaginationAndCategory
		);
		setFilter(`coins/markets?${queryStringFilter}` || '');
	}, []);
	return filter;
};
