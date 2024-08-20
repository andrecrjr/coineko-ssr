import { assetList } from '@/assets';
import SvgAsset from '@/assets/IconSvg';
import React from 'react';

export function DescriptionTable({ description }: { description: string }) {
	return (
		<section className="flex items-center mt-8 w-10/12 mb-2 md:mb-5 md:mt-10">
			<SvgAsset
				options={{
					alt: 'coinyan',
					width: '50',
					height: '50',
					src: `${assetList['cat']}`,
					className: 'inline self-center w-5 sm:w-15'
				}}
			/>

			<h3 className="text-xs text-left items-start md:text-base">
				{description}
			</h3>
		</section>
	);
}
