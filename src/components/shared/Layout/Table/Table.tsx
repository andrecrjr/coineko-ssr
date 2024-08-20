import { ReactNode } from 'react';
import { DescriptionTable } from './Description';
import { CryptoTableContainer } from './CurrencyTable';
import { HeadTable } from './HeadTable';
import { PaginationTable } from './Pagination';

interface Props {
	children: ReactNode;
}

const TableElement = ({ children }: Props) => {
	return (
		<section
			className="overflow-x-scroll 
				 sm:overflow-x-auto sm:w-10/12 mb-4"
		>
			<table className="rounded-md table-auto w-full">{children}</table>
		</section>
	);
};

TableElement.Header = HeadTable;

TableElement.Body = CryptoTableContainer;

TableElement.Pagination = PaginationTable;

TableElement.Description = DescriptionTable;

export default TableElement;
