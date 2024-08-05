import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// const CustomButton = ({ borderColor, children }) => {
//   const buttonStyle = {
//     border: `2px solid ${borderColor}`,
//     padding: '10px 20px',
//     backgroundColor: 'white',
//     cursor: 'pointer',
//   };

//   return (
//     <button style={buttonStyle}>
//       {children}
//     </button>
//   );
// };

// const Greeting =({person}:{person:string})=> (
//   <div
//     id='container'
//     data-Id=""
//     aria-label='Greeting Card'
//     className='container'
//     style={
//       {
//         width: "100%",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         textAlign: "center",
//         gap:"8px"
        
//       }
//     }
//   >
//     <h2>Welcome</h2>
//     <p>{person}</p>
//   </div>
// );


// const greeting = (
//   <div>
//     <Greeting person="Veeresh"></Greeting>
//     <Greeting person="Jeevan"></Greeting>
//     <Greeting person="Suhas"></Greeting>
//   </div>
// );
// ReactDOM.createRoot(document.getElementById("root")!).render(
// greeting
// );
// const buttons = (
//   <div>
//     <CustomButton borderColor="blue">Click Me</CustomButton>
//     <CustomButton borderColor="red">Delete</CustomButton>;
//   </div>
// );

// ReactDOM.createRoot(document.getElementById("root")!).render(buttons);







ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

