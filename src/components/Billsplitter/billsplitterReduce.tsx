export type Action =
  | { type: "SET_BILL_AMOUNT"; payload: number }
  | { type: "SET_BILL_AMOUNT_ERROR"; payload: string }
  | { type: "SET_NUMBER_OF_PERSONS"; payload: number }
  | { type: "SET_NUMBER_OF_PERSONS_ERROR"; payload: string }
  | { type: "SET_SELECTED_BUTTON"; payload: string }
  | { type: "SET_TIP_PER_PERSON"; payload: number }
  | { type: "SET_TOTAL_AMOUNT_PER_PERSON"; payload: number }
  | { type: "RESET" }
  | { type: "SET_INACTIVE"; payload: boolean };

export interface State {
  billAmountInput: number;
  billAmountInputError: string;
  numberOfPersonsInput: number;
  numberOfPersonsInputError: string;
  selectedButton: string;
  tipPerPerson: number;
  totalAmountPerPerson: number;
  inactive: boolean;
}

export const initialState: State = {
  billAmountInput: 0.0,
  billAmountInputError: "",
  numberOfPersonsInput: 1,
  numberOfPersonsInputError: "",
  selectedButton: "",
  tipPerPerson: 0.0,
  totalAmountPerPerson: 0.0,
  inactive: true,
};

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_BILL_AMOUNT":
      return { ...state, billAmountInput: action.payload };
    case "SET_BILL_AMOUNT_ERROR":
      return { ...state, billAmountInputError: action.payload };
    case "SET_NUMBER_OF_PERSONS":
      return { ...state, numberOfPersonsInput: action.payload };
    case "SET_NUMBER_OF_PERSONS_ERROR":
      return { ...state, numberOfPersonsInputError: action.payload };
    case "SET_SELECTED_BUTTON":
      return { ...state, selectedButton: action.payload };
    case "SET_TIP_PER_PERSON":
      return { ...state, tipPerPerson: action.payload };
    case "SET_TOTAL_AMOUNT_PER_PERSON":
      return { ...state, totalAmountPerPerson: action.payload };
    case "RESET":
      return initialState;
    case "SET_INACTIVE":
      return { ...state, inactive: action.payload };
    default:
      return state;
  }
}
