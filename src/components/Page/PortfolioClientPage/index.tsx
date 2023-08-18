"use client";
import { useFetch } from "@/components/Hooks/useFetch";
import { useFilter } from "@/components/Hooks/useFilter";
import usePortfolioData from "@/components/Hooks/usePortfolioData";
import { Table } from "@/components/shared";
import { CurrencyList } from "@/types";
import React from "react";

function PortfolioClientPage() {
  const { userPortfolioData } = usePortfolioData();
  const { data, isLoading } = useFetch<CurrencyList>(
    `/coins/markets?vs_currency=usd&ids=${encodeURIComponent(
      userPortfolioData?.join()
    )}&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
  );

  if (isLoading) {
    return <p>Loading portfolio data</p>;
  }

  return <>{<Table data={data || []} />}</>;
}

export default PortfolioClientPage;
