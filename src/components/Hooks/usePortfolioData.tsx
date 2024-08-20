import { portFolioManagement } from '@/services/PortfolioService';
import { storageObject } from '@/utils';
import { mutate } from 'swr';

function usePortfolioData() {
	const userPortfolioData = storageObject.get<string[]>('portfolio');
	const addPortfolio = (currency: string) =>
		portFolioManagement.addToPortfolio(currency);
	const removePortfolio = (currency: string) => {
		portFolioManagement.removePortfolio(currency);
		mutate(
			`${process.env.NEXT_PUBLIC_STATIC_HOSTNAME}/api/portfolioCryptoPrice`
		);
	};

	return { userPortfolioData, addPortfolio, removePortfolio };
}

export default usePortfolioData;
