import React from 'react';

export function HeadTable() {
	return (
		<thead className="border-b-[2px] border-[#4d51bb]">
			<tr>
				<td className="table--head px-0 w-6 h-auto"></td>
				<td className="table--head px-3 text-left">#</td>
				<td className="table--head">Coin</td>
				<td className="table--head min-w-[80px]">Price</td>
				<td className="table--head min-w-[80px] text-center sm:text-left">
					1h
				</td>
				<td className="table--head min-w-[80px] text-center sm:text-left">
					24h
				</td>
				<td className="table--head min-w-[80px] text-center sm:text-left">
					7d
				</td>
				<td className="table--head min-w-[170px] sm:min-w-[160px] md:min-w-[145px]">
					Market Cap.
				</td>
				{/* <td className="table--head min-w-[auto] sm:min-w-[auto]">
					Last 7 days
				</td> */}
			</tr>
		</thead>
	);
}
