import { Page } from '@/components/Page';
import { ReactNode } from 'react';
import Header from '../components/Header';
import './globals.css';

export const metadata = {
	title: 'Coineko',
	description: 'The cutest coin watcher'
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body>
				<Header />
				<Page>{children}</Page>
			</body>
		</html>
	);
}
