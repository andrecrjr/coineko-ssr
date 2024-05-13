import Sparkline from '@/components/shared/Sparkline';
import { Currency } from '@/types';
import { StarPortfolioCurrency } from '../../StarPortfolioCurrency';
import { ColumnPercentageCurrency } from '../PercentageComponent';
import { ColumnCurrencyInfoGrid } from './ColumnCurrencyInfo';
import { ColumnMoneyFormatter } from './ColumnMoneyFormater';

export const CurrencyTableColumn = ({ currency }: { currency: Currency }) => {
	return (
		<tr className="table--body__line pt-4">
			<td className="table--body w-[35px] pl-2 table--star">
				<StarPortfolioCurrency currencyId={currency.id} />
			</td>

			<ColumnCurrencyInfoGrid currency={currency} />
			<ColumnMoneyFormatter
				classNames={'table--body overflow-scroll sm:overflow-auto'}
				formatPrice={currency?.quotes['USD'].price || 0}
			/>
			<ColumnPercentageCurrency
				currencyNumber={currency?.quotes['USD'].percent_change_1h}
				role={`percentage 1h in ${currency.name}`}
			/>
			<ColumnPercentageCurrency
				currencyNumber={currency && currency?.quotes['USD'].market_cap_change_24h}
			/>
			<ColumnPercentageCurrency
				currencyNumber={currency && currency?.quotes['USD'].percent_change_7d}
			/>
			<ColumnMoneyFormatter
				classNames="table--body"
				formatPrice={currency?.quotes['USD'].market_cap || 0}
			/>
			<td className="table--body">
				{currency.last_7_days && (
					<Sparkline
						datasetSpark={currency?.last_7_days}
						color={
							currency?.quotes['USD'].percent_change_7d &&
							currency?.quotes['USD'].percent_change_7d > 0
								? 'green'
								: 'red'
						}
					/>
				)}
			</td>
		</tr>
	);
};
