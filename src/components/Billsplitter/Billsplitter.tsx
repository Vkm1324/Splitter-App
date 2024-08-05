import React, { useEffect, useState } from "react";
import styles from "./Billsplitter.module.css";

import InputNumber from "../InputNumber/InputNumber";
import TipMenu from "../TipMenu/TipMenu";
import SplitperPerson from "../SplitPerPerson/SplitPerPerson";
import Resetbutton from "../Resetbutton/Resetbutton";
/**
 * Props for the YourComponent component.
 */
interface BillsplitterProps {
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
  // handling bill amount input
  const [BillAmountInput, setBillAmountInput] = useState<number>(0.0);
  const [BillAmountInputError, setBillAmountInputError] = useState<string>("");
  const handleBillAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only non-negative numbers
    if (/^\d*\.?\d*$/.test(value)) {
      const numberValue = parseFloat(value);

      // If the value is a valid number, update the state
      if (!isNaN(numberValue) && numberValue >= 0) {
        // TODO remove leading zero

        // console.log(numberValue);
        // console.log(numberValue.toFixed(2));
        // console.log(parseInt(numberValue.toFixed(2)));

        setBillAmountInput(parseFloat(numberValue.toFixed(2)));
        setBillAmountInputError("");
      } else {
        setBillAmountInput(0.0);
        setBillAmountInputError("Amount cannot be negative");
      }
    } else {
      setBillAmountInput(0);
      setBillAmountInputError("please enter a non-negative number");
    }
  };

  // handling number of people input
  const [NumberOfPersonsInput, setNumberOfPersonsInput] = useState<number>(1);
  const [NumberOfPersonsInputError, setNumberOfPersonsInputError] =
    useState<string>("");
  const handleNumberOfPersonsInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    // Allow only non-negative numbers
    // && Number.isInteger(value)
    if (/^\d*\.?\d*$/.test(value)) {
      const numberValue = parseFloat(value);

      // If the value is a valid number, update the state
      if (!isNaN(numberValue) && numberValue > 0) {
        setNumberOfPersonsInput(numberValue);
        setNumberOfPersonsInputError("");
      } else {
        setNumberOfPersonsInput(1);
        setNumberOfPersonsInputError("Person cannot be zero or negative");
      }
    } else {
      setNumberOfPersonsInputError("Invalid input, please enter number");
    }
  };

  // handling tip menu
  const [selectedButton, setSelectedButton] = useState<string>("");

  const handleTipButtonClick = (value: string) => {
    setSelectedButton(value);
    console.log(value);
  };

  // handling Tip amount per person
  const [tipPerPerson, setTipPerPerson] = useState<number>(0.0);

  // handling Total amount per person
  const [totalAmountPerPerson, settotalAmountPerPerson] = useState<number>(0.0);

  // handling reset button
  // Reset to default value
  const [inactive, setInactive] = useState<boolean>(true);
  const handleReset = () => {
    const customButtonInput = document.getElementById(
      "customButton"
    ) as HTMLInputElement;
    if (customButtonInput) {
      customButtonInput.value = "";
    }
    setInactive(true);
    setBillAmountInput(0.0);
    setNumberOfPersonsInput(1);
    setSelectedButton("");
    setBillAmountInputError("");
    setNumberOfPersonsInputError("");
    console.log("Reset button clicked");
    // setTipPerPerson(0);
    // settotalAmountPerPerson(0);
  };

  useEffect(() => {
    const tipPercentage = parseFloat(selectedButton) / 100;
    const totalTip = BillAmountInput * tipPercentage;
    const tipPerPerson =
      NumberOfPersonsInput > 0 && totalTip > 0
        ? totalTip / NumberOfPersonsInput
        : 0.0;
    setTipPerPerson(tipPerPerson);
    const totalAmountPerPerson =
      BillAmountInput > 0
        ? BillAmountInput / NumberOfPersonsInput + tipPerPerson
        : 0.0;
    settotalAmountPerPerson(totalAmountPerPerson);
    setInactive(false);
  }, [BillAmountInput, NumberOfPersonsInput, selectedButton]);

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <InputNumber
          label={Props.inputLabel1}
          icon="dollar"
          numberInput={BillAmountInput}
          onNumberInputChange={handleBillAmountChange}
          error={BillAmountInputError}
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
          selectedButton={selectedButton}
        />
        <InputNumber
          label={Props.inputLabel2}
          icon={"person"}
          numberInput={NumberOfPersonsInput}
          onNumberInputChange={handleNumberOfPersonsInput}
          error={NumberOfPersonsInputError}
        />
      </div>
      <div className={styles.rigthContainer}>
        <div className={styles.tipAmount}>
          <SplitperPerson
            label1={Props.splitLabel1}
            label2={Props.splitLabel2}
            numberInput={tipPerPerson}
          />
        </div>
        <div className={styles.totalAmount}>
          <SplitperPerson
            label1={Props.splitLabel3}
            label2={Props.splitLabel4}
            numberInput={totalAmountPerPerson}
          />
        </div>
        <div className={styles.reset}>
          <Resetbutton name="Reset" onClick={handleReset} inactive={inactive} />
        </div>
      </div>
    </div>
  );
};
export default Billsplitter;
