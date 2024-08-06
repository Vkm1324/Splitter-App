export type Action =
  | { type: "SET_BILL_AMOUNT"; payload: number } 
  | { type: "SET_NUMBER_OF_PERSONS"; payload: number } 
  | { type: "SET_SELECTED_TIP_VALUE"; payload: string } 
  | { type: "RESET" }
  | { type: "SET_INACTIVE"; payload: boolean };

export interface State {
  billAmountInput: number; 
  numberOfPersonsInput: number; 
  selectedTipValue: string; 
}

export const initialState: State = {
  billAmountInput: 0.0, 
  numberOfPersonsInput: 1, 
  selectedTipValue: "",  
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
