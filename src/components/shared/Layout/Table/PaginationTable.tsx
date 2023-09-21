'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export function PaginationTable() {
	const { categoryPages } = useParams();
	const pageCurrentNumber = parseInt(categoryPages?.[1] || '1');

	const pathNameNextPrevious = (type: 'previous' | 'next') => {
		return `/page/${categoryPages?.[0] || 'cryptocurrency'}/${
			type === 'previous' ? pageCurrentNumber - 1 : pageCurrentNumber + 1
		}`;
	};
	return (
		<ul className="inline-flex gap-4 bg-purple-neko-300 justify-around sticky top-0 left-0 right-0">
			<li className="min-w-[80px]">
				{pageCurrentNumber - 1 !== 0 && (
					<Link
						href={{
							pathname: pathNameNextPrevious('previous')
						}}
						className="text-purple-neko-900"
					>
						Previous Page
					</Link>
				)}
			</li>
			<li className="min-w-[80px]">
				<Link
					href={{ pathname: pathNameNextPrevious('next') }}
					className=" text-purple-neko-900 font-bold"
				>
					Next Page
				</Link>
			</li>
		</ul>
	);
}
