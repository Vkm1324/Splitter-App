export type Action =
  | { type: "SET_BILL_AMOUNT"; payload: number } 
  | { type: "SET_NUMBER_OF_PERSONS"; payload: number } 
  | { type: "SET_SELECTED_TIP_VALUE"; payload: number } 
  | { type: "RESET" }

export interface State {
  billAmountInput: number; 
  numberOfPersonsInput: number; 
  selectedTipValue: number; 
}

export const initialState: State = {
  billAmountInput:0, 
  numberOfPersonsInput: 1, 
  selectedTipValue: 0,
};

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_BILL_AMOUNT":
      return { ...state, billAmountInput: action.payload };
    case "SET_NUMBER_OF_PERSONS":
      return { ...state, numberOfPersonsInput: action.payload };
    case "SET_SELECTED_TIP_VALUE":
      return { ...state, selectedTipValue: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}
