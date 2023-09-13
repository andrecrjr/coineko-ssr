'use client';
import React, { useEffect, useState } from 'react';
import SvgAsset from '@/assets/IconSvg';
import { assetList } from '@/assets';
import usePortfolioData from '@/components/Hooks/usePortfolioData';

function StarPortfolioCurrency({ currencyId }: { currencyId: string }) {
	const { userPortfolioData, addPortfolio, removePortfolio } =
		usePortfolioData();
	const [currenciesTemp, setCurrency] = useState<string[]>([]);

	useEffect(() => {
		setCurrency(userPortfolioData);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<SvgAsset
			options={{
				alt: 'Favorite currency',
				width: '25',
				height: '25',
				src: `${
					currenciesTemp?.some(item => item === currencyId)
						? assetList['starPurple']
						: assetList['star']
				}`,
				className: 'w-10 max-w-[30px]',
				onClick: e => {
					e.preventDefault();
					if (currenciesTemp?.some(currency => currency === currencyId)) {
						//remove local state
						setCurrency(oldCurrencies => {
							return [...oldCurrencies.filter(id => id !== currencyId)];
						});
						removePortfolio(currencyId);
						return;
					}

					setCurrency(oldCurrencies => [...oldCurrencies, currencyId]);
					addPortfolio(currencyId);
				}
			}}
			data-crypto={currencyId}
			data-testid="favorite-crypto"
		/>
	);
}

export { StarPortfolioCurrency };
