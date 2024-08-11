export type Action =
  | { type: "SET_BILL_AMOUNT"; payload: string } 
  | { type: "SET_NUMBER_OF_PERSONS"; payload: string } 
  | { type: "SET_SELECTED_TIP_VALUE"; payload: string } 
  | { type: "RESET" }

export interface State {
  billAmountInput: string;
  numberOfPersonsInput: string;
  selectedTipValue: string;
}

export const initialState: State = {
  billAmountInput:"", 
  numberOfPersonsInput: "1", 
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
