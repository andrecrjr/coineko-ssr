import { useFetch } from '../Hooks/useFetch';

import { CurrencyItem, searchType } from '@/types';
import Image from 'next/image';
import { StarPortfolioCurrency } from '../shared/Layout';

export const AutoComplete = ({ searchParam }: { searchParam: string }) => {
	const { data, isLoading } = useFetch<searchType>(
		`/search?query=${searchParam}`
	);

	if (!isLoading && !!data)
		return (
			<ul className="suggest--box" role="listbox">
				{data &&
					data.coins.map((item: CurrencyItem) => {
						return (
							<li
								role="aria-selected"
								key={item.id}
								className="suggest--box__option"
							>
								<AutoCompleteItem currency={item} />
							</li>
						);
					})}
			</ul>
		);
	return <></>;
};

const AutoCompleteItem = ({ currency }: { currency: CurrencyItem }) => {
	return (
		<div
			className="grid grid-cols-[25px_auto_auto] 
					my-8 sm:my-3 mx-5 items-center"
		>
			<StarPortfolioCurrency currencyId={currency.id} />
			<Image
				src={currency.thumb}
				className="ml-4"
				width="19"
				height="19"
				alt={currency.name}
			/>
			<h3 className="text-sm break-before-auto overflow-hidden ml-4">
				{currency.name}
			</h3>
		</div>
	);
};
