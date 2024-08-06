import React from 'react';
import "../../App.css";
import styles from './SplitPerPerson.module.css';
interface SplitPerPersonProps {
  /**
   * Label for the number input field
   */
  label1: string;
  label2: string;
  numberInput: number;
  idName:string;
}
const SplitPerPerson: React.FC<SplitPerPersonProps> = (Props) => {
  const { label1, label2, numberInput, idName } = Props;
   return (
     <div className={styles.container}>
       <label className={styles.label1}>{label1}</label>
       <label className={styles.label2}>{label2}</label>
       <div className={styles.inputContainer}>
         <input
           id={idName}
           type="string"
           value={'$'+numberInput.toFixed(2)}
           className={styles.numberInput}
           placeholder="$0.00"
           readOnly
         />
       </div>
     </div>
   );

};
export default SplitPerPerson;