 
import './App.css'
import Billsplitter from './components/Billsplitter/Billsplitter';
// import Default from "./components/Billsplitter/Billsplitter.stories";
function App() { 
  return (
    <>
      <Billsplitter
        inputLabel1={"Bill"}
        BillAmountInput1={0}
        inputLabel2={"Number of people"}
        NumberOfPeopleInput={1}
        tipMenuLabel={"Select tip %"}
        buttonContent1={"5"}
        buttonContent2={"10"}
        buttonContent3={"15"}
        buttonContent4={"25"}
        buttonContent5={"50"}
        buttonContent6={"Custom"}
        splitLabel1={"Tip Amount"}
        splitLabel2={"/ person"}
        splitLabel3={"Total"}
        splitLabel4={"/ person"}
        idFotsplitter1={""}
        idFotsplitter2={""}
        idForBill={""}
        idForNumberOfPeople={""}
      ></Billsplitter>
    </>
  );
}

export default App
