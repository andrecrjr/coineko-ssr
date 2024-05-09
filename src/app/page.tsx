import { fetchService } from '@/services/ApiService';
import { CurrencyList } from '@/types';

import HomePage from '@/components/Page/HomePage';

export default async function Home() {

	const data = await fetchService.getFetchData<CurrencyList>('/tickers');

	return <HomePage data={data} />;
}
