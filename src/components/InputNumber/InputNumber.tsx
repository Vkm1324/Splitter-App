import React, { RefObject } from "react";
import "../../App.css";
import styles from "./InputNumber.module.css";
import dollar from "./assests/dollar.svg";
import person from "./assests/person.svg";

export interface InputNumberProps {
  /**
   * Label for the number input field
   */
  label: string;
  /**
   * Id for the number input field
   */
  inputId: string;
  /**
   * Icon
   */
  icon: "dollar" | "person";
  /**
   * Number fed to the input field
   */
  numberInput: string;
  /**
   * Error to display when number is negative
   */
  error: () => string;
  /**
   * Function to handle changes to the input value
   */
  onNumberInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Tab index value for input
   */
  tabIndexValue: number;
  /**
   * Input reference
   */
  inputRef: RefObject<HTMLInputElement>;

  /**
   * Placeholder text for the input field
   */
  placeHolder: string;
}

const InputNumber: React.FC<InputNumberProps> = ({
  label,
  icon,
  numberInput,
  inputId,
  onNumberInputChange,
  error,
  tabIndexValue,
  placeHolder,
  inputRef,
}) => {
  const iconSrc = icon === "dollar" ? dollar : person;

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={inputId}>
        {label}
      </label>
      <div className={styles.inputContainer}>
        <img className={styles.img} src={iconSrc} alt="icon" />
        <input
          type="text"
          id={inputId}
          value={numberInput}
          tabIndex={tabIndexValue}
          onChange={onNumberInputChange}
          className={styles.numberInput}
          placeholder={placeHolder}
          ref={inputRef}
        />
      </div>
      <div className={styles.errorMsg}>{error()}</div>
    </div>
  );
};

export default InputNumber;
