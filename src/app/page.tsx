import { Inter } from "next/font/google";
import { fetchService } from "@/services/ApiService";
import { convertFilterQueryString } from "@/utils";
import { CurrencyList } from "@/types";
import { Page } from "@/components/Page";

import HomePage from "@/components/Page/HomePage";

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
  console.log(data)
    if(data?.status?.error_code === 429){
        return <h2>High rate into Coingecko API, come back later</h2>
    }

  return (
    <HomePage data={data} />
  );
}
