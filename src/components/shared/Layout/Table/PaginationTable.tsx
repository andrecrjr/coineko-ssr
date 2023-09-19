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
		<ul className="flex gap-4 mr-8 sm:sticky sm:top-0 bg-light-gray-neko">
			{pageCurrentNumber - 1 !== 0 && (
				<li>
					<Link
						href={{ pathname: pathNameNextPrevious('previous') }}
						className=" text-dark-purple-neko"
					>
						Previous Page
					</Link>
				</li>
			)}
			<li>
				<Link
					href={{ pathname: pathNameNextPrevious('next') }}
					className=" text-dark-purple-neko font-bold"
				>
					Next Page
				</Link>
			</li>
		</ul>
	);
}
