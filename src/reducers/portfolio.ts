import { storageObject } from "@/utils";

export const setPortfolio = (
  state: string[],
  action: { type: string; payload: string; arrayPayload?: string[] }
) => {
  const addState = [...state, action.payload] || [""];
  const removeCurrency = [...state.filter((item) => item !== action.payload)];
  console.log(state);
  switch (action.type) {
    case "ADD_COIN":
      storageObject.set("portfolio", addState);
      return addState;
    case "REMOVE_COIN":
      storageObject.set("portfolio", removeCurrency);
      return removeCurrency;
    case "ADD_ALL_CURRENCY_STATE":
      storageObject.set("portfolio", action.arrayPayload || []);
      return addState;
    default:
      return state;
  }
};
