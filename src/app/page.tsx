import { Inter } from "next/font/google";
import { fetchService } from "@/services/ApiService";
import { convertFilterQueryString } from "@/utils";
import { Table, WrapperTable } from "@/components/shared/Layout";
import { CurrencyList } from "@/types";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const queryUrl = convertFilterQueryString(
    {
      vs_currency: "usd",
      order: "market_cap_desc",
      per_page: "50",
      sparkline: "true",
      page: "1",
      price_change_percentage: "1h,24h,7d",
      category: "cryptocurrency",
    },
    "/coins/markets?"
  );
  console.log(queryUrl);
  const data = await fetchService.getFetchData<CurrencyList>(queryUrl);

  console.log(data);
  return (
    <WrapperTable description="Price of the main cryptocurrencies by Market Capitalization.">
      {data ? <Table data={data} /> : <p>Error</p>}
    </WrapperTable>
  );
}
