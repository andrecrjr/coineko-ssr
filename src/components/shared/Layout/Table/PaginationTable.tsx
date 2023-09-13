'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export function PaginationTable() {
	const data = useParams();
	console.log(data);
	return (
		<ul className="flex gap-4">
			<li className="color-dark-purple-neko bold">
				<Link href="/2">Previous</Link>
			</li>
			<li>
				<Link href="/2">Next</Link>
			</li>
		</ul>
	);
}
