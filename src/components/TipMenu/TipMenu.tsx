import React, { useState, useRef } from "react";
import "../../App.css";
import "../../index.css";
import styles from "./TipMenu.module.css";

interface TipMenuProps {
  label: string;
  buttonContent1: string;
  buttonContent2: string;
  buttonContent3: string;
  buttonContent4: string;
  buttonContent5: string;
  buttonContent6: string;
  onButtonClick: (value: string) => void;
  // Optional prop for default selected value
  defaultSelected?: string;
}

const TipMenu: React.FC<TipMenuProps> = (props) => {
  const {
    label,
    buttonContent1,
    buttonContent2,
    buttonContent3,
    buttonContent4,
    buttonContent5,
    buttonContent6,
    onButtonClick,
    // Default to buttonContent1 if not provided
    defaultSelected = buttonContent1,
  } = props;

  const [selectedValue, setSelectedValue] = useState<string>(defaultSelected);
  const [customSelected, setCustomSelected] = useState<boolean>(false);
  //   ref for the custom input
  const customButtonRef = useRef<HTMLInputElement>(null);
  // onButtonClick(defaultSelected);
  const handleClick = (value: string) => {
    console.log(`Button clicked: ${value}`);
    setSelectedValue(value);
    setCustomSelected(false);

    if (customButtonRef.current) {
      customButtonRef.current.value = "";
    }

    onButtonClick(value);
  };

  const handleCustomButtonClick = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCustomSelected(true);
    const inputValue = event.target.value;
    if (parseFloat(inputValue) <= 0) {
      event.target.value = "";
      return;
    }
    setSelectedValue(inputValue);
    onButtonClick(inputValue);
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <div className={styles.gridContainer}>
        {[
          buttonContent1,
          buttonContent2,
          buttonContent3,
          buttonContent4,
          buttonContent5,
        ].map((tipPercentageValue, index) => (
          <button
            id={`button-${tipPercentageValue}`}
            key={index}
            className={`${styles.gridButton} ${selectedValue === tipPercentageValue ? styles.selected : ""}`}
            value={tipPercentageValue}
            onClick={() => handleClick(tipPercentageValue)}
          >
            {tipPercentageValue}%
          </button>
        ))}
        <input
          ref={customButtonRef}  
          name="customButton"
          type="number" 
          className={`${styles.customButton} ${customSelected ? styles.customButtonselected : ""}`}
          onChange={handleCustomButtonClick}  
          placeholder={buttonContent6}
        />
      </div>
    </div>
  );
  
};

export default TipMenu;
