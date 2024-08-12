import React, { useRef } from "react";
import styles from "./Resetbutton.module.css";
import "../../index.css";

interface ResetbuttonProps {
  /**
   * Name of the button
   */
  name: string;
  /**
   * Function to be called when the button is clicked
   */
  onClick: () => void;
}

const Resetbutton: React.FC<ResetbuttonProps> = (Props) => {
  //  ref for the reset-button element 
  const resetButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <div className={styles.container}>
      <button
        ref={resetButtonRef} 
        className={`${styles.reset} ${styles.disabled}`}
        id={Props.name}
        onClick={Props.onClick}
      >
        {Props.name}
      </button>
    </div>
  );
};

export default Resetbutton;
