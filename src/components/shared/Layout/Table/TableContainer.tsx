import { CurrencyList } from '@/types';
import TableElement from './Table';

interface TableProps {
	data: CurrencyList;
	tableDescription: string;
}

export default function Table({ data, tableDescription }: TableProps) {
	return (
		<>
			<TableElement.Description description={tableDescription} />
			{!!data && data.length > 10 && <TableElement.Pagination />}
			<TableElement>
				<TableElement.Header />
				<TableElement.Body currencyList={data} />
			</TableElement>
		</>
	);
}
