import { storageObject } from '@/utils';

export const portFolioManagement = {
	addToPortfolio: (newData: string | null) => {
		const portfolioData = storageObject.get<string[]>('portfolio');

		if (newData) {
			portfolioData.push(newData);
			storageObject.set('portfolio', portfolioData);
			return;
		}
		return;
	},
	removePortfolio: (currencyId: string) => {
		const portfolioData = storageObject.get<string[]>('portfolio');
		if (currencyId) {
			const updatedPortfolio = [
				...portfolioData.filter(id => id !== currencyId)
			];
			storageObject.set('portfolio', updatedPortfolio);
		}
		return;
	}
};
