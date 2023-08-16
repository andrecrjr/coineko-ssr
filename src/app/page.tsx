import { Inter } from "next/font/google";
import { fetchService } from "@/services/ApiService";
import { convertFilterQueryString } from "@/utils";
import { Table } from "@/components/shared/Layout";
import { CurrencyList } from "@/types";
import TablePage from "@/components/Page/TablePage";

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
    },
    "/coins/markets?"
  );
  const data = await fetchService.getFetchData<CurrencyList>(queryUrl);

  return (
    <TablePage description="Price of the main cryptocurrencies by Market Capitalization.">
      {data ? <Table data={data} /> : <p>Error to get data, try again later</p>}
    </TablePage>
  );
}
