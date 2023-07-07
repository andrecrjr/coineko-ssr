import { fetchService } from "@/services/ApiService";
import { convertFilterQueryString } from "@/utils";
import { useRouter } from "next/router";

export default async function TablePages() {
  // const route = useRouter()
  // const queryUrl = convertFilterQueryString({
  //   vs_currency: "usd",
  //   order: "market_cap_desc",
  //   per_page: "50",
  //   sparkline: "true",
  //   page: "1",
  //   price_change_percentage: "1h,24h,7d",
  //   category: props.params.categoryPages,
  // });
  // const data = await fetchService.getMarketData(queryUrl);
  // console.log(data);
  return <div>aaaaaaaaaaaaaaaa</div>;
}
