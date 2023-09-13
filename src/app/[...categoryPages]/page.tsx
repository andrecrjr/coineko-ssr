import { Metadata } from 'next';

import { fetchService } from '@/services/ApiService';

import { CurrencyList } from '@/types';

import { convertFilterQueryString, getMetadataName } from '@/utils';
import { Page } from '@/components/Page';
import { TableComposition } from '@/components/shared/Layout';
import ErrorPage from '@/components/Page/ErrorPage';

type Props = {
	params: { categoryPages: string[] };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const metadata = await fetchService.getFetchData<
		[{ category_id: string; name: string }]
	>('/coins/categories/list');
	const titleSection = getMetadataName(metadata, params.categoryPages[0]);
	return {
		title: titleSection?.name
	};
}

export default async function TablePages({ params }: Props) {
	const [categoryPage, id] = params.categoryPages;

	const queryUrl = convertFilterQueryString(
		{
			vs_currency: 'usd',
			order: 'market_cap_desc',
			per_page: '50',
			sparkline: 'true',
			page: id,
			price_change_percentage: '1h,24h,7d',
			category: categoryPage
		},
		'/coins/markets?'
	);
	const data = await fetchService.getFetchData<CurrencyList>(queryUrl);
	const metadata = await fetchService.getFetchData<
		[{ category_id: string; name: string }]
	>('/coins/categories/list');
	const titleSection = getMetadataName(metadata, categoryPage);

	if (data?.status?.error_code) {
		return <ErrorPage />;
	}
	return (
		<Page
			description={`${titleSection.name} currencies by Market Capitalization.`}
		>
			<TableComposition data={data} />
		</Page>
	);
}
