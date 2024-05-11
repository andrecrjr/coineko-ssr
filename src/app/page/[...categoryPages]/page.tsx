// import { Metadata } from 'next';

import { fetchService } from '@/services/ApiService';

import { CurrencyList } from '@/types';

import { paginationApiData } from '@/utils';
import { TableComposition } from '@/components/shared/Layout';
import ErrorPage from '@/components/Page/ErrorPage';
import { Metadata } from 'next';

type Props = {
	params: { categoryPages: string[] };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const metadata = await fetchService.getFetchData<{ category_id: string; name: string, description:string }>(`tags/${params.categoryPages[0]}`,
		{},
		1000*100000);
	const pageNumber = parseInt(params.categoryPages[1]);
	const paginationTitle =
		pageNumber > 1 ? ` - Page ${params.categoryPages[1]}` : '';
	return {
		title: metadata?.name + paginationTitle,
		description: metadata?.description
	};
}

export default async function TablePages({ params }: Props) {
	const [categoryId, id] = params.categoryPages;

	const data = await fetchService.getFetchData<CurrencyList>('/tickers');

	const paginatedData = paginationApiData(data, Number(id));
	const paginateData = await fetchService.getFetchData<{ category_id: string; name: string, description: string }>(`tags/${categoryId}`);
	
	if (data?.status?.error_code) {
		return <ErrorPage />;
	}
	
	return (
		<TableComposition
			data={paginatedData}
			tableDescription={`${paginateData.description}`}
		/>
	);
}
