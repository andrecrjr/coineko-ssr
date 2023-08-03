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

export const storageObject = {
  get: <T,>(storageKey: string): T => {
    const data =
      globalThis?.localStorage?.getItem(storageKey) || JSON.stringify([]);
    return JSON.parse(data);
  },
  set: (storageKey: string, setData: string[]): boolean => {
    if (!setData) throw new Error("No data to set in localstorage");
    globalThis?.localStorage?.setItem(storageKey, JSON.stringify(setData));
    return true;
  },
};

export const addToPortfolio = (newData: string | null) => {
  const portfolioData = storageObject.get<[]>("portfolio");
  console.log(portfolioData);
  if (newData) {
    return [...portfolioData, newData];
  }
  return [...portfolioData];
};
