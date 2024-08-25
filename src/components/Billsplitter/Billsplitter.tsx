import React, { useReducer,   } from "react"; 
import InputNumber from "../InputNumber/InputNumber";
import TipMenu from "../TipMenu/TipMenu";
import SplitperPerson from "../SplitPerPerson/SplitPerPerson";
import Resetbutton from "../Resetbutton/Resetbutton";
import { initialState, reducer } from "./billsplitterReduce";

/**
 * Props for the BillsplitterProps component.
 */
export interface BillsplitterProps {
  title: string;
  inputLabel1: string;
  BillAmountInput1: number;
  inputLabel2: string;
  NumberOfPeopleInput: number;
  tipMenuLabel: string;
  buttonContent1: string;
  buttonContent2: string;
  buttonContent3: string;
  buttonContent4: string;
  buttonContent5: string;
  buttonContent6: string;
  splitLabel1: string;
  splitLabel2: string;
  splitLabel3: string;
  splitLabel4: string;
  idForSplitter1: string;
  idForSplitter2: string;
  idForBill: string;
  idForNumberOfPeople: string;
  idForResetButton: string;
}

const Billsplitter: React.FC<BillsplitterProps> = (Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //  refs for input elements
  // TODO make use of inital state rather than dom manipulating to set values 

  const handleBillAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numberValue = parseFloat(value);
    if (!isNaN(numberValue)) {
      dispatch({
        type: "SET_BILL_AMOUNT",
        payload: numberValue.toString(),
      });
    } else {
      dispatch({ type: "SET_BILL_AMOUNT", payload: "0.0" });
    }
  };

  const getBillErrorMessage = () => {
    if (+state.billAmountInput < 0) {
      return "Amount cannot be negative";
    }
    return "";
  };

  const handleNumberOfPersonsInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    const numberValue = parseFloat(value);
    if (!isNaN(numberValue) && numberValue > 0) {
      dispatch({
        type: "SET_NUMBER_OF_PERSONS",
        payload: numberValue.toString(),
      });
    } else {
      dispatch({ type: "SET_NUMBER_OF_PERSONS", payload: "1" });
    }
  };

  const getPeopleErrorMessage = () => {
    if (+state.numberOfPersonsInput < 1) {
      return "People cannot be less than 1";
    }
    return "";
  };

  const handleTipButtonClick = (value: string) => {
    const tipPercentage = parseFloat(value) / 100;
    dispatch({
      type: "SET_SELECTED_TIP_VALUE",
      payload: tipPercentage.toString(),
    });
  };

  const handleReset = () => { 
    dispatch({ type: "RESET" });
    const element = document.querySelector(
      '[tabindex="0"]'
    ) as HTMLInputElement;
    if (element) {
      element.focus();
    }
  };

  const isInitialState = (currentState: typeof initialState) => {
    return JSON.stringify(currentState) === JSON.stringify(initialState);
  };

  const calculateTipPerPerson = (
    billAmountInput: number,
    numberOfPersonsInput: number,
    tipPercentage: number
  ): number => {
    if (billAmountInput > 0) {
      return (billAmountInput * tipPercentage) / numberOfPersonsInput;
    }
    return 0;
  };

  const calculateTotalPerPerson = (
    billAmountInput: number,
    numberOfPersonsInput: number,
    tipPercentage: number
  ): number => {
    if (billAmountInput > 0) {
      return (
        billAmountInput / numberOfPersonsInput +
        calculateTipPerPerson(
          billAmountInput,
          numberOfPersonsInput,
          tipPercentage
        )
      );
    }
    return 0;
  };

  return (
    // main container
    <div className={" bg-base-green min-w-full"}>
      {/* title-container */}
      <div className={" py-10 flex justify-center  "}>
        {/* title */}
        <label
          className={
            "font-text text-dark-green text-2xl font-bold leading-9 tracking-[.75rem] max-w-[6.69rem] flex flex-col break-words "
          }
        >
          {Props.title}
        </label>
      </div>
      {/* contentContainer */}
      <div
        className={
          " flex flex-col gap-x-[4.77%]  rounded-[20px]   md:flex-row max-w-[80rem] p-[4.77%] bg-white text-base "
        }
      >
        {/* leftContainer */}
        <div className={" flex flex-col gap-3"}>
          <InputNumber
            inputId={Props.idForBill}
            label={Props.inputLabel1}
            icon="dollar"
            tabIndexValue={0}
            numberInput={state.billAmountInput}
            onNumberInputChange={handleBillAmountChange}
            error={() => getBillErrorMessage()}
            placeHolder={"0.00"}
          />
          <TipMenu
            label={Props.tipMenuLabel}
            buttonContent1={Props.buttonContent1}
            buttonContent2={Props.buttonContent2}
            buttonContent3={Props.buttonContent3}
            buttonContent4={Props.buttonContent4}
            buttonContent5={Props.buttonContent5}
            buttonContent6={Props.buttonContent6}
            onButtonClick={handleTipButtonClick}
            defaultSelected={Props.buttonContent1}
          />
          <InputNumber
            inputId={Props.idForNumberOfPeople}
            label={Props.inputLabel2}
            icon={"person"}
            tabIndexValue={1}
            numberInput={state.numberOfPersonsInput}
            onNumberInputChange={handleNumberOfPersonsInput}
            error={() => getPeopleErrorMessage()}
            placeHolder={"1"}
          />
        </div>
        {/* rightContainer */}
        <div
          className={
            "bg-dark-green rounded-2xl min flex flex-col gap-y-16 p-14 md:text-[0.8rem]"
          }
        >
          <div className={""}>
            <SplitperPerson
              idName={Props.inputLabel1}
              label1={Props.splitLabel1}
              label2={Props.splitLabel2}
              numberInput={calculateTipPerPerson(
                +state.billAmountInput,
                +state.numberOfPersonsInput,
                +state.selectedTipValue
              )}
            />
          </div>
          <div className={""}>
            <SplitperPerson
              idName={Props.inputLabel2}
              label1={Props.splitLabel3}
              label2={Props.splitLabel4}
              numberInput={calculateTotalPerPerson(
                +state.billAmountInput,
                +state.numberOfPersonsInput,
                +state.selectedTipValue
              )}
            />
          </div>
          <div className={""}>
            <Resetbutton
              name={Props.idForResetButton}
              onClick={handleReset}
              disabled={isInitialState(state)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billsplitter;
