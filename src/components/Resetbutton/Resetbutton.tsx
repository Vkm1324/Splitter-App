import React from 'react';
import styles from './Resetbutton.module.css';
interface ResetbuttonProps {
  /**
   * Name of the button
   */
  name: string;
  /**
   * Function to be called when the button is clicked
   */
  onClick: () => void;
  /**
   * State to determine if the button is inactive
   */
  inactive: boolean;
}
const Resetbutton: React.FC<ResetbuttonProps> = (Props) => {
  return (
    <div className={styles.container}>
      <button
        className={Props.inactive ? styles.inactive : ""}
        disabled={Props.inactive}
        onClick={Props.onClick}
      >
        {Props.name}
      </button>
    </div>
  );
};
export default Resetbutton;