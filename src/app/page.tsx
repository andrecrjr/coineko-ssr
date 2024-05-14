import { fetchService } from '@/services/ApiService';
import { CurrencyList } from '@/types';

import HomePage from '@/components/Page/HomePage';
import { paginationApiData } from '@/utils';

export default async function Home() {
	const data = await fetchService.getFetchPriceApi<CurrencyList>('/tickers');
	const paginatedData = paginationApiData(data, 1);

	return <HomePage data={paginatedData} />;
}
