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
				{children}
			</body>
		</html>
	);
}
