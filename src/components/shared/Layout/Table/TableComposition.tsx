import { CurrencyList } from '@/types';
import { BodyTable } from './CurrencyTable';
import { HeadTable } from './HeadTable';
import { PaginationTable } from './PaginationTable';

interface TableProps {
	data: CurrencyList;
}

export default function TableComposition({ data }: TableProps) {
	return (
		<section
			className="overflow-x-scroll 
				 sm:overflow-x-auto sm:w-10/12 mb-10"
		>
			<table className="bg-[#DEDEDE]  rounded-md table-auto w-full">
				<HeadTable />
				<BodyTable currencyList={data} />
			</table>
			<PaginationTable />
		</section>
	);
}
