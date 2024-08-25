// import "../../App.css";
import "../../index.css";
import dollar from "./assests/dollar.svg";
import person from "./assests/person.svg";

export interface InputNumberProps {
  label: string;
  inputId: string;
  icon: "dollar" | "person";
  numberInput: string;
  error: () => string;
  onNumberInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  tabIndexValue: number; 
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
}) => {
  const iconSrc = icon === "dollar" ? dollar : person;

  return (
    <div className="bg-white w-full max-w-[32.75rem] flex flex-col gap-3 font-text">
      <label
        className="max-w-max font-bold text-[1.25rem]  tracking-[0.1em] leading-[1.5rem] text-text-color "
        htmlFor={inputId}
      >
        {label}
      </label>
      <div className="flex flex-row  rounded-[6px] max-w-full focus-within:outline focus-within:outline-3 focus-within:outline-stroke-green">
        <img
          className="px-[20px] py-[8px]  bg-bg-shade"
          src={iconSrc}
          alt="icon"
        />
        <input
          type="text"
          id={inputId}
          value={numberInput}
          tabIndex={tabIndexValue}
          onChange={onNumberInputChange}
          className="flex-2 pr-[15px] py-[8px] text-right w-full bg-bg-shade rounded-[6px] text-2xl font-bold text-dark-green border-none outline-none cursor-pointer placeholder:text-text-color-light"
          placeholder={placeHolder}
        />
      </div>
      <div className="min-h-[1.9rem] text-end max-w-max font-bold text-[1.25rem] text-error tracking-[0.1em] leading-[1.5rem]">
        {error()}
      </div>
    </div>
  );
};

export default InputNumber;
