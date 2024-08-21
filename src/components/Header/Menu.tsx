import React from 'react';
import { MenuOptions } from './menu';
import Link from 'next/link';
import { headers } from 'next/headers';

const Menu = () => {
	const headersList = headers();
	const host = headersList.get('host');

	const hostname =
		process.env.NODE_ENV === 'development' && host
			? 'http://localhost:3000/'
			: 'https://' + host?.split(':')[0];

	return (
		<nav
			className="w-full bg-purple-neko-700 
			overflow-x-scroll 
			h-12 sm:max-h-14 flex content-center 
			sm:justify-center 
			sm:overflow-auto sm:overflow-y-hidden"
		>
			<ul className="list-none flex self-center ">
				{MenuOptions.map((item, index) => {
					let route = hostname + '/' + item.path;
					if (item.path !== 'portfolio') {
						route = hostname + '/page/' + item.path + '/1';
					}
					return (
						<Link
							href={{
								pathname: route
							}}
							key={index}
						>
							<li
								className={
									'text-sm sm:text-lg leading-5 px-8 font-roboto text-purple-50 sm:py-10'
								}
								data-testid={`button-${item.alias.toLowerCase()}`}
							>
								{item.alias}
							</li>
						</Link>
					);
				})}
			</ul>
		</nav>
	);
};

export default Menu;
