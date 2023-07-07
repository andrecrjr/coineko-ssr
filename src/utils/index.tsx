import { PageCurrencyQuery } from "@/types";

export const convertFilterQueryString = (
  filterPaginationAndCategory: PageCurrencyQuery
) => {
  console.log(URLSearchParams);
  const filterResult = new URLSearchParams(
    filterPaginationAndCategory
  ).toString();
  console.log("aaaaaaaaaaaa", filterResult);
  return filterResult;
};

export const formatterMoney = (
  language = "en-US",
  currency: {
    style: "currency";
    currency: "USD";
  },
  amount: number
) => {
  return new Intl.NumberFormat(language, currency).format(amount);
};
