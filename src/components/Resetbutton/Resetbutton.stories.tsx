import type {Meta,StoryObj} from "@storybook/react"; 
import Resetbutton from "./Resetbutton";
 const meta:Meta<typeof Resetbutton>={
    title:'BILL SPLITTER/Reset Button',
    component:Resetbutton,
    parameters:{
        layout:'centered',
    },
    tags:['autodocs'],
    }satisfies Meta<typeof Resetbutton>;
    
    export default meta;
    type Story=StoryObj<typeof meta>;
    
export const RESET: Story = {
    args: {
        name:"RESET"
        }
    };