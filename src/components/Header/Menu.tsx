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
			className="w-full bg-purple-neko overflow-x-scroll 
			h-8 sm:h-10 flex content-center sm:justify-center sm:overflow-auto"
		>
			<ul className="list-none flex self-center ">
				{MenuOptions.map((item, index) => {
					let route = '';
					if (item.path !== 'portfolio') {
						route = hostname + '/page/' + item.path + '/1';
					} else {
						route = hostname + '' + item.path;
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
									'text-sm pr-10 leading-5 first:pl-4 last:pr-4 font-roboto'
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
