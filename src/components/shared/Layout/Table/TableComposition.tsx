import { CurrencyList } from "@/types";
import { BodyTable } from "./CurrencyTable";
import { HeadTable } from "./HeadTable";
import { PaginationTable } from "./PaginationTable";
import { Table } from "./TableComponent";

interface TableProps{
    data: CurrencyList;
}

export default function TableComposition({data}:TableProps){
    return (
        <Table>
            <HeadTable />
            <BodyTable currencyList={data}/>
            <PaginationTable />
        </Table>
    )
}