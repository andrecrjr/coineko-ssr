/* eslint-disable @next/next/no-img-element */
import { Currency } from '@/types';

export const ColumnCurrencyInfoGrid = ({
	currency
}: {
	currency: Currency | undefined;
}) => {
	return (
		<>
			<td
				className="table--body text-left
			text-dark-purple-neko font-bold overflow-scroll 
			sm:overflow-auto pl-3"
			>
				{currency?.rank || '...'}
			</td>
			<td className="table--body table--body__coin">
				<section className="grid grid-cols-[1fr_100px] sm:grid-cols-[30px_auto] md:auto-rows-max  table--fix">
					<img
						src={`${`https://static.coinpaprika.com/coin/${currency?.id}/logo.png`}`}
						className="mx-auto mt-auto"
						style={{ userSelect: 'none' }}
						width="25"
						height="25"
						alt={currency?.name || 'Crypto'}
						loading="lazy"
					/>
					<a
						className="row-span-2 flex 
                            items-center pl-1 w-auto font-bold 
                             break-words overflow-scroll sm:overflow-hidden"
						style={{ userSelect: 'none' }}
					>
						{currency?.name || 'Loading....'}
					</a>
					<p
						className="text-[10px] text-center 
        text-dark-purple-neko font-bold max-w-[auto] break-words"
					>
						{currency?.symbol.toUpperCase() || '...'}
					</p>
				</section>
			</td>
		</>
	);
};
