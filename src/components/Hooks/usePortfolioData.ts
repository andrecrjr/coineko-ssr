import { portFolioManagement } from '@/services/PortfolioService';
import { storageObject } from '@/utils';

function usePortfolioData() {
  const userPortfolioData = storageObject.get<string[]>('portfolio');
  const addPortfolio = (currency: string) =>
    portFolioManagement.addToPortfolio(currency);
  const removePortfolio = (currency: string) =>
    portFolioManagement.removePortfolio(currency);
  return { userPortfolioData, addPortfolio, removePortfolio };
}

export default usePortfolioData;
