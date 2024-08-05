import type { Meta, StoryObj } from "@storybook/react";
import SplitPerPerson from "./SplitPerPerson";
const meta: Meta<typeof SplitPerPerson> = {
  title: "BILL-SPLITTER/SplitPerPerson",
  component: SplitPerPerson,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SplitPerPerson>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TipAmount: Story = {
  args: {
    label1: "Tip Amount",
    label2: "/ person",
    numberInput:5
  },
};

export const Total: Story = {
  args: {
    label1: "Total",
    label2: "/ person",
    numberInput: 15
  },
};