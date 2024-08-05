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
  /**
   * Currently selected button value
   */
  selectedButton: string;
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
    selectedButton,
  } = Props;

  const handleClick = (value: string) => {
    const customButtonInput = document.getElementById(
      "customButton"
    ) as HTMLInputElement;
    if (customButtonInput) {
      customButtonInput.value = "";
    }
    onButtonClick(value);
  };

  const handleCustomButtonClick = (event) => {
    const inputValue = event.target!.value;
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
        ].map((content) => (
          <button
            className={`${styles.gridButton} ${selectedButton === content ? styles.selected : ""}`}
            onClick={() => handleClick(content)}
          >
            {content}
          </button>
        ))}
        <input
          id="customButton"
          type="number"
          className={styles.customButton} //${selectedButton === buttonContent6 ? styles.selected : ""}`}
          onInput={handleCustomButtonClick}
          placeholder={buttonContent6}
        ></input>
      </div>
    </div>
  );
};
export default TipMenu;

// color: hsla(183, 100%, 15%, 1);
