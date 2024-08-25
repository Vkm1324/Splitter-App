import React from "react";

interface SplitPerPersonProps {
  label1: string;
  label2: string;
  numberInput: number;
  idName: string;
}

const SplitPerPerson: React.FC<SplitPerPersonProps> = ({
  label1,
  label2,
  numberInput,
  idName,
}) => {
  return (
    //container
    <div className="grid grid-cols-[1fr_2fr] grid-rows-[auto_auto] gap-0 items-center max-w-[28.375rem] w-full bg-dark-green font-text  font-normal text-base">
      {/* label 1  */}
      <label className="w-full col-span-1 row-start-1 text-white  tracking-[.075rem] text-[0.766rem] leading-4 sm:text-[1rem] sm:leading-[1.4]">
        {label1}
      </label>
      {/* label 2  */}
      <label className="w-full col-span-1 row-start-2 text-text-color-light font-normal leading-4 text-[.76rem] md:text-[1rem]">
        {label2}
      </label>
      {/* input container  */}
      <div className="col-span-1 row-span-2 flex justify-end w-full">
        {/* number input */}
        <input
          id={idName}
          type="text"
          value={`$${numberInput.toFixed(2)}`}
          className="w-full border-none outline-none text-right text-[1.838rem] sm:text-5xl  text-[#2CC0AD]
           bg-dark-green leading-[2.72rem] sm:leading-[71.01px]"
          placeholder="$ -.--/"
          readOnly
        />
      </div>
    </div>
  );
};

export default SplitPerPerson;
