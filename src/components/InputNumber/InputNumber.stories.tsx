import type { Meta, StoryObj } from "@storybook/react";
import InputNumber from "./InputNumber";
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


// export const Default: Story= {
//     args: {
//         label: "BILL",
//         icon: "dollar",
//         numberInput: 100,
//         // error:"cant"
//     },
// };

export const BILL: Story = {
  args: {
    label: "BILL",
    icon: "dollar",
    numberInput: 400,
  },
};

export const People : Story = {
  args: {
    label: "Number of people",
    icon: "person",
    numberInput: 400,
  },
};
