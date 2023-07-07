import { Inter } from "next/font/google";
import { fetchService, getMarketData } from "@/services/ApiService";
import { convertFilterQueryString } from "@/utils";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const queryUrl = convertFilterQueryString({
    vs_currency: "usd",
    order: "market_cap_desc",
    per_page: "50",
    sparkline: "true",
    page: "1",
    price_change_percentage: "1h,24h,7d",
    category: "cryptocurrency",
  });

  const data = await getMarketData(queryUrl);

  console.log(data);
  return <p>cryptocurrency</p>;
}
