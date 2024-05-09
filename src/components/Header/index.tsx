import { SearchBar } from './SearchBar';
import Menu from './Menu';
import Link from 'next/link';

const Header = () => {
	return (
		<header className="flex flex-col items-center">
			<section className="sm:ml-4 sm:py-2 flex w-10/12 justify-between flex-col sm:flex-row relative pb-4 sm:pb-0">
				<Link href="/">
					<h1 className="text-4xl flex items-center" title="coinyan">
						coinyan
					</h1>
				</Link>
				<p className="absolute text-xs bottom-1">
					All cryptocurrency data provided by{' '}
					<strong>
						<a
							href="http://coingecko.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							Coinpaprika
						</a>
					</strong>
				</p>
				<SearchBar />
			</section>
			<Menu />
		</header>
	);
};

export default Header;
