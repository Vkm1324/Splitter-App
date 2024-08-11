import type {Meta,StoryObj} from "@storybook/react"; 
import TipMenu from "./TipMenu";
 const meta:Meta<typeof TipMenu>={
    title:'BILL-SPLITTER/TipMenu',
    component:TipMenu,
    parameters:{
        layout:'centered',
    },
    tags:['autodocs'],
    }satisfies Meta<typeof TipMenu>;
    
    export default meta;
    type Story=StoryObj<typeof meta>;
      const handleTipButtonClick = (value: string) => {
    const tipPercentage = parseFloat(value) / 100;
    // dispatch({ type: "SET_SELECTED_TIP_VALUE", payload: tipPercentage.toString() });
        // updateResetButtonState(false);
        console.log(tipPercentage);
  };
export const Default: Story = {
  args: {
    buttonContent1: "5",
    label: "Select Tip %",
    buttonContent2: "10",
    buttonContent3: "15",
    buttonContent4: "20",
    buttonContent5: "50",
    buttonContent6: "CUSTOM",
    onButtonClick: handleTipButtonClick,
  },
};