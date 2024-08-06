import React, { useReducer } from "react";
import styles from "./Billsplitter.module.css";

import InputNumber from "../InputNumber/InputNumber";
import TipMenu from "../TipMenu/TipMenu";
import SplitperPerson from "../SplitPerPerson/SplitPerPerson";
import Resetbutton from "../Resetbutton/Resetbutton";
import { initialState, reducer } from "./billsplitterReduce";
// useEffect;
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

  /**
   * id label for the first SplitperPerson component.
   */
  idFotsplitter1: string;
  /**
   * id label for the second SplitperPerson component.
   */
  idFotsplitter2: string;
    /**
   * id label for the Bill.
   */
  idForBill: string;
  /**
   * id label for the For Number Of People component.
   */
  idForNumberOfPeople: string;
}

const Billsplitter: React.FC<BillsplitterProps> = (Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
     const handleBillAmountChange = (
       e: React.ChangeEvent<HTMLInputElement>
     ) => {
       const value = e.target.value;
       const numberValue = parseFloat(value);
       if (!isNaN(numberValue) && numberValue >= 0) {
         dispatch({
           type: "SET_BILL_AMOUNT",
           payload: parseFloat(numberValue.toFixed(2)),
         });
       } else {
         dispatch({ type: "SET_BILL_AMOUNT", payload: 0.0 });
       }
     };
  const getBillErrorMessage = () => {
          if (state.billAmountInput < 0) {
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
          dispatch({ type: "SET_NUMBER_OF_PERSONS", payload: numberValue }); 
        } else {
          dispatch({ type: "SET_NUMBER_OF_PERSONS", payload: 1 });
        }
    };

    const getPeopleErrorMessage = () => {
      if (state.numberOfPersonsInput < 1) {
        return "People cannot be less than 1";
      }
      return "";
    };

  const handleTipButtonClick = (value: string) => { 
    const tipPercentage = parseFloat(value)/100;
    console.log(tipPercentage);
    dispatch({type:"SET_SELECTED_TIP_VALUE",payload:tipPercentage})
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  function calculateTipPerPerson(
    billAmountInput: number,
    numberOfPersonsInput: number,
    tipPercentage: number
  ): number {
    if (billAmountInput > 0) {
      return (
        (billAmountInput * tipPercentage) / numberOfPersonsInput);
    } else return 0;
  }
  function calculateTotalPerPerson(
    billAmountInput: number,
    numberOfPersonsInput: number,
    tipPercentage: number
  ): number {
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
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <InputNumber
          inputId={Props.idForBill}
          label={Props.inputLabel1}
          icon="dollar"
          numberInput={state.billAmountInput}
          onNumberInputChange={handleBillAmountChange}
          error={getBillErrorMessage()}
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
        />
        <InputNumber
          inputId={Props.idForNumberOfPeople}
          label={Props.inputLabel2}
          icon={"person"}
          numberInput={state.numberOfPersonsInput}
          onNumberInputChange={handleNumberOfPersonsInput}
          error={getPeopleErrorMessage()}
        />
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.tipAmount}>
          <SplitperPerson
            idName={Props.inputLabel1}
            label1={Props.splitLabel1}
            label2={Props.splitLabel2}
            numberInput={calculateTipPerPerson(
              state.billAmountInput,
              state.numberOfPersonsInput,
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
              state.billAmountInput,
              state.numberOfPersonsInput,
              +state.selectedTipValue
            )}
          />
        </div>
        <div className={styles.reset}>
          <Resetbutton name="Reset" onClick={handleReset} />
        </div>
      </div>
    </div>
  );
};

export default Billsplitter;
