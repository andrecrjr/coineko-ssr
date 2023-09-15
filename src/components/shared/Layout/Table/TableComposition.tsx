import { CurrencyList } from '@/types';
import DescriptionTable from '../../Description';
import { BodyTable } from './CurrencyTable';
import { HeadTable } from './HeadTable';
import { PaginationTable } from './PaginationTable';
import { Table } from './TableComponent';

interface TableProps {
	data: CurrencyList;
	tableDescription: string;
}

export default function TableComposition({
	data,
	tableDescription
}: TableProps) {
	return (
		<>
			<DescriptionTable description={tableDescription} />
			<Table>
				<HeadTable />
				<BodyTable currencyList={data} />
			</Table>
			{!!data && data.length > 10 && <PaginationTable />}
		</>
	);
}
