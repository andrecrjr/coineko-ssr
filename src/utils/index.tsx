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
