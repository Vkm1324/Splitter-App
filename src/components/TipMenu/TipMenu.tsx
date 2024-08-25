import React, { useState, useRef } from "react";

interface TipMenuProps {
  label: string;
  buttonContent1: string;
  buttonContent2: string;
  buttonContent3: string;
  buttonContent4: string;
  buttonContent5: string;
  buttonContent6: string;
  onButtonClick: (value: string) => void;
  defaultSelected?: string; // Make defaultSelected optional
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
    defaultSelected,
  } = props;

  // Determine the initial selected value
  const initialSelectedValue = defaultSelected || buttonContent1;

  const [selectedValue, setSelectedValue] =useState<string>(initialSelectedValue);
  const [customSelected, setCustomSelected] = useState<boolean>(false);
  const customButtonRef = useRef<HTMLInputElement>(null);

  const handleClick = (value: string) => {
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
    <div className="max-w-[32.8rem] font-text w-full font-bold text-[1.25rem] tracking-wide flex flex-col bg-white">
      <label className="pb-6 text-gray-700">{label}</label>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-6">
        {[
          buttonContent1,
          buttonContent2,
          buttonContent3,
          buttonContent4,
          buttonContent5,
        ].map((tipPercentageValue, index) => (
          <button
            key={index}
            className={`max-w-[9.93rem] w-full  rounded-lg border-none text-center cursor-pointer py-2 text-2xl tracking-wide
              ${selectedValue === tipPercentageValue ? "bg-base-green text-dark-green" : "text-white bg-dark-green "}`}
            value={tipPercentageValue}
            onClick={() => handleClick(tipPercentageValue)}
          >
            {tipPercentageValue}%
          </button>
        ))}
        <input
          ref={customButtonRef}
          name="customButton"
          type="text"
          className={`bg-gray-100 text-gray-700 font-bold rounded-lg border-none text-center  w-full cursor-pointer text-2xl tracking-normal outline-none   
          max-w-[9.93rem]
           ${customSelected ? "outline outline-2 outline-base-green" : ""}`}
          onClick={handleCustomButtonClick}
          placeholder={buttonContent6}
        />
      </div>
    </div>
  );
};

export default TipMenu;
