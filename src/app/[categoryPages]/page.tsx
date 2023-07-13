import { Table, WrapperTable } from "@/components/shared/Layout";
import { fetchService } from "@/services/ApiService";
import { CurrencyList } from "@/types";
import { convertFilterQueryString } from "@/utils";

export default async function TablePages({
  params,
}: {
  params: { categoryPages: string };
}) {
  const queryUrl = convertFilterQueryString({
    vs_currency: "usd",
    order: "market_cap_desc",
    per_page: "50",
    sparkline: "true",
    page: "1",
    price_change_percentage: "1h,24h,7d",
    category: params.categoryPages,
  });
  const data = await fetchService.getMarketData<CurrencyList>(queryUrl);
  console.log(data);

  return (
    <WrapperTable description="Price of the main cryptocurrencies by Market Capitalization.">
      {data ? <Table data={data} /> : <p>Error</p>}
    </WrapperTable>
  );
}
