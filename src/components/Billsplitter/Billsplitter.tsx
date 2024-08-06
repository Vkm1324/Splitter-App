import React, { useEffect, useReducer } from "react";
import styles from "./Billsplitter.module.css";

import InputNumber from "../InputNumber/InputNumber";
import TipMenu from "../TipMenu/TipMenu";
import SplitperPerson from "../SplitPerPerson/SplitPerPerson";
import Resetbutton from "../Resetbutton/Resetbutton";
import { initialState, reducer } from "./billsplitterReduce";

// import { BillsplitterProps } from "./Billsplitter";

/**
 * Props for the BillsplitterProps component.
 */
export interface BillsplitterProps {
  /**
   * Label for the first InputNumber component.
   */
  inputLabel1: string;

  /**
   * Initial value for the first InputNumber component.
   */
  BillAmountInput1: number;

  /**
   * Label for the second InputNumber component.
   */
  inputLabel2: string;

  /**
   * Initial value for the second InputNumber component.
   */
  BillAmountInput2: number;

  /**
   * Label for the TipMenu component.
   */
  tipMenuLabel: string;

  /**
   * Content for the first button in the TipMenu component.
   */
  buttonContent1: string;

  /**
   * Content for the second button in the TipMenu component.
   */
  buttonContent2: string;

  /**
   * Content for the third button in the TipMenu component.
   */
  buttonContent3: string;

  /**
   * Content for the fourth button in the TipMenu component.
   */
  buttonContent4: string;

  /**
   * Content for the fifth button in the TipMenu component.
   */
  buttonContent5: string;

  /**
   * Content for the sixth button in the TipMenu component.
   */
  buttonContent6: string;

  /**
   * Label for the first SplitperPerson component.
   */
  splitLabel1: string;

  /**
   * Additional label for the first SplitperPerson component.
   */
  splitLabel2: string;

  /**
   * Label for the second SplitperPerson component.
   */
  splitLabel3: string;

  /**
   * Additional label for the second SplitperPerson component.
   */
  splitLabel4: string;
}

const Billsplitter: React.FC<BillsplitterProps> = (Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleBillAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      const numberValue = parseFloat(value);
      if (!isNaN(numberValue) && numberValue >= 0) {
        dispatch({
          type: "SET_BILL_AMOUNT",
          payload: parseFloat(numberValue.toFixed(2)),
        });
        dispatch({ type: "SET_BILL_AMOUNT_ERROR", payload: "" });
      } else {
        dispatch({ type: "SET_BILL_AMOUNT", payload: 0.0 });
        dispatch({
          type: "SET_BILL_AMOUNT_ERROR",
          payload: "Amount cannot be negative",
        });
      }
    } else {
      dispatch({ type: "SET_BILL_AMOUNT", payload: 0 });
      dispatch({
        type: "SET_BILL_AMOUNT_ERROR",
        payload: "Please enter a non-negative number",
      });
    }
  };

  const handleNumberOfPersonsInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      const numberValue = parseFloat(value);
      if (!isNaN(numberValue) && numberValue > 0) {
        dispatch({ type: "SET_NUMBER_OF_PERSONS", payload: numberValue });
        dispatch({ type: "SET_NUMBER_OF_PERSONS_ERROR", payload: "" });
      } else {
        dispatch({ type: "SET_NUMBER_OF_PERSONS", payload: 1 });
        dispatch({
          type: "SET_NUMBER_OF_PERSONS_ERROR",
          payload: "Person cannot be zero or negative",
        });
      }
    } else {
      dispatch({
        type: "SET_NUMBER_OF_PERSONS_ERROR",
        payload: "Invalid input, please enter a number",
      });
    }
  };

  const handleTipButtonClick = (value: string) => {
    dispatch({ type: "SET_SELECTED_BUTTON", payload: value });
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  useEffect(() => {
    const tipPercentage = parseFloat(state.selectedButton) / 100;
    const totalTip = state.billAmountInput * tipPercentage;
    const tipPerPerson =
      state.numberOfPersonsInput > 0 && totalTip > 0
        ? totalTip / state.numberOfPersonsInput
        : 0.0;
    const totalAmountPerPerson =
      state.billAmountInput > 0
        ? state.billAmountInput / state.numberOfPersonsInput + tipPerPerson
        : 0.0;
    dispatch({ type: "SET_TIP_PER_PERSON", payload: tipPerPerson });
    dispatch({
      type: "SET_TOTAL_AMOUNT_PER_PERSON",
      payload: totalAmountPerPerson,
    });
    dispatch({ type: "SET_INACTIVE", payload: false });
  }, [state.billAmountInput, state.numberOfPersonsInput, state.selectedButton]);

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <InputNumber
          label={Props.inputLabel1}
          icon="dollar"
          numberInput={state.billAmountInput}
          onNumberInputChange={handleBillAmountChange}
          error={state.billAmountInputError}
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
          selectedButton={state.selectedButton}
        />
        <InputNumber
          label={Props.inputLabel2}
          icon={"person"}
          numberInput={state.numberOfPersonsInput}
          onNumberInputChange={handleNumberOfPersonsInput}
          error={state.numberOfPersonsInputError}
        />
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.tipAmount}>
          <SplitperPerson
            label1={Props.splitLabel1}
            label2={Props.splitLabel2}
            numberInput={state.tipPerPerson}
          />
        </div>
        <div className={styles.totalAmount}>
          <SplitperPerson
            label1={Props.splitLabel3}
            label2={Props.splitLabel4}
            numberInput={state.totalAmountPerPerson}
          />
        </div>
        <div className={styles.reset}>
          <Resetbutton
            name="Reset"
            onClick={handleReset}
            inactive={state.inactive}
          />
        </div>
      </div>
    </div>
  );
};

export default Billsplitter;
