import { Metadata } from "next";

import TablePage from "@/components/Page/TablePage";
import { Table } from "@/components/shared/Layout";

import { fetchService } from "@/services/ApiService";

import { CurrencyList } from "@/types";

import { convertFilterQueryString, getMetadataName } from "@/utils";

type Props = {
  params: { categoryPages: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const id = params.categoryPages;
  const metadata = await fetchService.getFetchData<
    [{ category_id: string; name: string }]
  >("/coins/categories/list");
  const titleSection = getMetadataName(metadata, id);
  return {
    title: titleSection?.name,
  };
}

export default async function TablePages({ params }: Props) {
  const queryUrl = convertFilterQueryString(
    {
      vs_currency: "usd",
      order: "market_cap_desc",
      per_page: "50",
      sparkline: "true",
      page: "1",
      price_change_percentage: "1h,24h,7d",
      category: params.categoryPages,
    },
    "/coins/markets?"
  );
  const data = await fetchService.getFetchData<CurrencyList>(queryUrl);

  const metadata = await fetchService.getFetchData<
    [{ category_id: string; name: string }]
  >("/coins/categories/list");
  const titleSection = getMetadataName(metadata, params.categoryPages);

  return (
    <TablePage
      description={`${titleSection.name} currencies by Market Capitalization.`}
    >
      {data ? <Table data={data} /> : <p>Error</p>}
    </TablePage>
  );
}
