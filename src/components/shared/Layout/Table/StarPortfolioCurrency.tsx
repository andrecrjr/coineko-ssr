"use client";

import React, { useEffect, useState } from "react";
import SvgAsset from "@/assets/IconSvg";
import { assetList } from "@/assets";
import { storageObject } from "@/utils";
import { setPortfolio } from "@/reducers/portfolio";

export default function StarPortfolioCurrency({
  currencyId,
}: {
  currencyId: string;
}) {
  const userCurrency = storageObject.get<string[]>("portfolio");
  const [currenciesTemp, setCurrency] = useState<string[]>([]);
  console.log(currenciesTemp);
  useEffect(() => {
    setCurrency(userCurrency);
  }, []);
  useEffect(() => {
    console.log("currency update");
    // setPortfolio(userCurrency, {
    //   type: "ADD_ALL_CURRENCY_STATE",
    //   payload: "",
    //   arrayPayload: [...currenciesTemp, currencyId],
    // });
  }, [currenciesTemp]);
  return (
    <SvgAsset
      options={{
        alt: "Favorite currency",
        width: "30",
        height: "30",
        src: `${
          currenciesTemp?.some((item) => item === currencyId)
            ? assetList["starPurple"]
            : assetList["star"]
        }`,
        className: "w-10",
        onClick: (e) => {
          e.preventDefault();

          if (currenciesTemp?.some((currency) => currency === currencyId)) {
            //remove local state
            console.log("entrou aqui");
            setCurrency((oldCurrencies) => {
              // setPortfolio(userCurrency, {
              //   type: "ADD_ALL_CURRENCY_STATE",
              //   payload: "",
              //   arrayPayload: [
              //     ...oldCurrencies.filter((id) => id !== currencyId),
              //   ],
              // });
              // console.log(oldCurrencies);
              return [...oldCurrencies.filter((id) => id !== currencyId)];
            });

            return;
          }

          //update react state WITH localStorage
          setCurrency((oldCurrencies) => {
            //update react state
            return [...oldCurrencies, currencyId];
          });
        },
      }}
      data-crypto={currencyId}
      data-testid="favorite-crypto"
    />
  );
}
