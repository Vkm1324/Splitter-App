import React, { useRef } from "react";

interface ResetbuttonProps {
  name: string;
  onClick: () => void;
  disabled: boolean;
}

const Resetbutton: React.FC<ResetbuttonProps> = ({
  name,
  onClick,
  disabled,
}) => {
  const resetButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="max-w-[28.375rem] w-full">
      <button
        ref={resetButtonRef}
        id={name}
        onClick={onClick}
        disabled={disabled}
        className={`w-full px-0 py-[13px] text-[1.5rem] font-space-mono leading-[35.54px] tracking-[2px] text-center font-bold rounded-[7px] 
          ${
            disabled
              ? "bg-[#0D686D] text-dark-green cursor-default"
              : "bg-[#26C2AD] text-dark-green cursor-pointer hover:bg-base-green"
          } 
          sm:py-[9px] sm:max-w-full`}
      >
        {name}
      </button>
    </div>
  );
};

export default Resetbutton;
