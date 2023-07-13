import { PageCurrencyQuery } from "@/types";

export const convertFilterQueryString = (
  filterPaginationAndCategory: PageCurrencyQuery,
  prepath: string = ""
) => {
  const filterResult = new URLSearchParams(
    filterPaginationAndCategory
  ).toString();
  return prepath + filterResult;
};

export const getMetadataName = (
  metadata: [{ category_id: string; name: string }],
  id: string
) => {
  const titleSection = metadata.filter((item) => item.category_id === id)[0];
  return titleSection;
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
