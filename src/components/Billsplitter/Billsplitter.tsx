import React, { useReducer, useRef } from "react";
import styles from "./Billsplitter.module.css";
import tipstyles from "../TipMenu/TipMenu.module.css";
import resetStyles from "../Resetbutton/Resetbutton.module.css";
import "../../App.css";
import "../../index.css";
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
  idFotsplitter1: string;
  idFotsplitter2: string;
  idForBill: string;
  idForNumberOfPeople: string;
  idForResetButton: string;
}

const Billsplitter: React.FC<BillsplitterProps> = (Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Create a ref for the billInput element
  const billAmountInput = useRef<HTMLInputElement>(null);

  // Create a ref for the number of people input element
  const numberOfPeopleInput = useRef<HTMLInputElement>(null);
  const handleBillAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numberValue = parseFloat(value);
    if (!isNaN(numberValue)) {
      dispatch({
        type: "SET_BILL_AMOUNT",
        payload: (numberValue.toString()),
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
      dispatch({ type: "SET_NUMBER_OF_PERSONS", payload: numberValue.toString() });
      updateResetButtonState(false);
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
    dispatch({ type: "SET_SELECTED_TIP_VALUE", payload: tipPercentage.toString() });
    updateResetButtonState(false);
  };

  const handleReset = () => {
    const customButtonInput = document.getElementById(
      "customButton"
    ) as HTMLInputElement;
    if (customButtonInput) {
      customButtonInput.value = "";
    }
    const previouslySelected = document.querySelector(`.${tipstyles.selected}`);
    if (previouslySelected) {
      previouslySelected.classList.remove(tipstyles.selected);
    }
    dispatch({ type: "RESET" });
    const element = document.querySelector(
      '[tabindex="0"]'
    ) as HTMLInputElement;
    if (element) {
      element.focus();
    }
    updateResetButtonState(true);
  };

  const updateResetButtonState = (disable: boolean) => {
    const resetButton = document.getElementById(
      Props.idForResetButton
    ) as HTMLInputElement;
    if (resetButton) {
      if (disable) {
        resetButton.classList.add(resetStyles.disabled);
      } else {
        resetButton.classList.remove(resetStyles.disabled);
      }
    }
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
      updateResetButtonState(false);
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
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <label className={styles.title}>{Props.title}</label>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.leftContainer}>
          <InputNumber
            inputId={Props.idForBill}
            label={Props.inputLabel1}
            icon="dollar"
            tabIndexValue={0}
            inputRef={billAmountInput}
            numberInput={state.billAmountInput}
            onNumberInputChange={handleBillAmountChange}
            error={() => getBillErrorMessage()}
            placeHolder={"0.00"} />
          <TipMenu
            label={Props.tipMenuLabel}
            buttonContent1={Props.buttonContent1}
            buttonContent2={Props.buttonContent2}
            buttonContent3={Props.buttonContent3}
            buttonContent4={Props.buttonContent4}
            buttonContent5={Props.buttonContent5}
            buttonContent6={Props.buttonContent6}
            onButtonClick={handleTipButtonClick}
          />
          <InputNumber
            inputId={Props.idForNumberOfPeople}
            label={Props.inputLabel2}
            icon={"person"}
            tabIndexValue={1}
            numberInput={state.numberOfPersonsInput}
            onNumberInputChange={handleNumberOfPersonsInput}
            error={() => getPeopleErrorMessage()}
            inputRef={numberOfPeopleInput}
            placeHolder={"1"} />
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.tipAmount}>
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
          <div className={styles.totalAmount}>
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
          <div className={styles.reset}>
            <Resetbutton name={Props.idForResetButton} onClick={handleReset} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billsplitter;
