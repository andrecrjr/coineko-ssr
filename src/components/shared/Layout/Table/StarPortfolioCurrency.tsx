"use client";

import React, { useEffect, useState } from "react";
import SvgAsset from "@/assets/IconSvg";
import { assetList } from "@/assets";
import { storageObject } from "@/utils";
import { portFolioManagement } from "@/services/PortfolioService";

export default function StarPortfolioCurrency({
  currencyId,
}: {
  currencyId: string;
}) {
  const userCurrencyPortfolioStorage = storageObject.get<string[]>("portfolio");
  const [currenciesTemp, setCurrency] = useState<string[]>([]);

  useEffect(() => {
    setCurrency(userCurrencyPortfolioStorage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SvgAsset
      options={{
        alt: "Favorite currency",
        width: "25",
        height: "25",
        src: `${
          currenciesTemp?.some((item) => item === currencyId)
            ? assetList["starPurple"]
            : assetList["star"]
        }`,
        className: "w-10 max-w-[30px]",
        onClick: (e) => {
          e.preventDefault();
          if (currenciesTemp?.some((currency) => currency === currencyId)) {
            //remove local state
            setCurrency((oldCurrencies) => {
              return [...oldCurrencies.filter((id) => id !== currencyId)];
            });
            portFolioManagement.removePortfolio(currencyId);
            return;
          }

          setCurrency((oldCurrencies) => [...oldCurrencies, currencyId]);
          portFolioManagement.addToPortfolio(currencyId);
        },
      }}
      data-crypto={currencyId}
      data-testid="favorite-crypto"
    />
  );
}
