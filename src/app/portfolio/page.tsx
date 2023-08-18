import { Page } from "@/components/Page";
import PortfolioClientPage from "@/components/Page/PortfolioClientPage";
import React from "react";

export default function index() {
  return (
    <Page description="Your portfolio, with yours starred currencies in the Coineko.">
      <PortfolioClientPage />
    </Page>
  );
}
