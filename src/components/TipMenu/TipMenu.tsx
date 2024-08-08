import React from "react";
import "../../App.css";
import styles from "./TipMenu.module.css";
interface TipMenuProps {
  /**
   * Label for the number input field
   */
  label: string;
  /**
   * buttonContent for the 1st button field
   */
  buttonContent1: string;
  /**
   * buttonContent for the 2st button field
   */
  buttonContent2: string;
  /**
   * buttonContent for the 3st button field
   */
  buttonContent3: string;
  /**
   * buttonContent for the 4st button field
   */
  buttonContent4: string;
  /**
   * buttonContent for the 5st button field
   */
  buttonContent5: string;
  /**
   * buttonContent for the 6st button field
   */
  buttonContent6: string;
  /**
   * Function to handle button clicks
   */
  onButtonClick: (value: string) => void;
}
const TipMenu: React.FC<TipMenuProps> = (Props) => {
  const {
    label,
    buttonContent1,
    buttonContent2,
    buttonContent3,
    buttonContent4,
    buttonContent5,
    buttonContent6,
    onButtonClick,
  } = Props;

const handleClick = (value: string) => {
  console.log(`Button clicked: ${value}`);

  const customButtonInput = document.getElementById(
    "customButton"
  ) as HTMLInputElement;
  if (customButtonInput) {
    customButtonInput.value = "";
  }

  // Remove previously selected class
  const previouslySelected = document.querySelector(`.${styles.selected}`);
  if (previouslySelected) {
    previouslySelected.classList.remove(styles.selected);
  }

  // Add selected class to the clicked button
  const buttonToSelect = document.querySelector(`#button-${value}`);
  if (buttonToSelect) {
    buttonToSelect.classList.add(styles.selected);
  } else {
    console.error(`Button with ID #button-${value} not found.`);
  }

  onButtonClick(value);
};


  const handleCustomButtonClick = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
      const previouslySelected = document.querySelector(`.${styles.selected}`);
      if (previouslySelected) {
        console.log("Removing selected class from:", previouslySelected);
        previouslySelected.classList.remove(styles.selected);
      }
    const inputValue = event.target.value;
    if (parseFloat(inputValue) <= 0) {
      event.target.value = "";
      return;
    }
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
            className={styles.gridButton}
            value={tipPercentageValue}
            onClick={() => handleClick(tipPercentageValue)}
          >
            {tipPercentageValue}%
          </button>
        ))}
        <input
          id="customButton"
          name="customButton"
          type="number"
          className={styles.customButton}
          onInput={handleCustomButtonClick}
          placeholder={buttonContent6}
        />
      </div>
    </div>
  );
};

export default TipMenu;
 
