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
}


const Resetbutton: React.FC<ResetbuttonProps> = (Props) => {
  return (
    <div className={styles.container}>
      <button
        className={`${styles.reset} ${styles.disabled}`}
        // disabled={true}
        id={Props.name}
        onClick={Props.onClick}
      >
        {Props.name}
      </button>
    </div>
  );
};
export default Resetbutton;