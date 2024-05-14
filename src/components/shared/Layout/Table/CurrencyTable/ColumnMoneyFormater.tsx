import { formatterMoney } from '@/utils';

export const ColumnMoneyFormatter = ({
	classNames,
	formatPrice
}: {
	classNames: string;
	formatPrice: number;
}) => {
	return (
		<td className={classNames}>
			<p className="flex">
				{formatterMoney(
					'en-US',
					{
						style: 'currency',
						currency: 'USD'
					},
					formatPrice
				)}
			</p>
		</td>
	);
};
