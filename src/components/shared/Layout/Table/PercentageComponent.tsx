
export const ColumnPercentageCurrency = ({
  currencyNumber,
  role,
}: {
  currencyNumber: number | undefined;
  role?: string;
}) => {
  return (
    <td
      className={`table--body  ${
        currencyNumber && currencyNumber > 0 ? 'text-green-500' : 'text-red-600'
      }`}
      aria-label={role}
    >
      {(currencyNumber && currencyNumber.toFixed(2)) || '0.00'}%
    </td>
  );
};
