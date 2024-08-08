import type {Meta,StoryObj} from "@storybook/react";
import Billsplitter from "./Billsplitter";
 const meta:Meta<typeof Billsplitter>={
    title:'App/Billsplitter',
    component:Billsplitter,
    parameters:{
      layout: 'centered',
      padding:0,
    },
    tags:['autodocs'],
    }satisfies Meta<typeof Billsplitter>;
    
    export default meta;
    type Story=StoryObj<typeof meta>;
    
export const Default: Story = {
  args: {
    inputLabel1: "Bill",
    inputLabel2: "Number of people",
    buttonContent1: "5",
    buttonContent2: "10",
    buttonContent3: "15",
    buttonContent4: "25",
    buttonContent5: "50",
    buttonContent6: "Custom",
    splitLabel1: "Tip Amount",
    splitLabel2: "/ person",
    splitLabel3: "Total",
    splitLabel4: "/ person",
    tipMenuLabel: "Select Tip %",
    title1: "SPLITTER",
    idForBill: "billAmoutId",
    idForResetButton:"RESET"
    
  },
};