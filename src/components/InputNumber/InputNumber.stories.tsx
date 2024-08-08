import type { Meta, StoryObj } from "@storybook/react";
import InputNumber from "./InputNumber";
// import { FC } from "react";
// import { useRef } from "react";
const meta: Meta<typeof InputNumber> = {
  title: "Bill-splitter/InputNumber",
  component: InputNumber,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InputNumber>;
export default meta;
type Story = StoryObj<typeof meta>;


 export const BILL: Story = {
  args: {
    label: "BILL",
    icon: "dollar",
    numberInput: 400,
  },
};

const getBillErrorMessage = (numberInput: number) => {
  if (numberInput < 0) {
    return "Amount cannot be negative";
  }
  return "";
};
export const People: Story = {
  args: {
    label: "Number of people",
    icon: "person",
    numberInput: 400,
    inputId: "numberOfPople",
    // onNumberInputChange:{handleBillAmountChange},
    error:() => getBillErrorMessage(InputNumber)
    // inputRef: inputRef,

  },
};
        
