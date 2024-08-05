 
import './App.css'
// import Message from './message/message';
import CounterApp from './components/counter/parent-counter';

function App() { 
  return (
    <>
      {/* <div>
        <Message
          type="info"
          title="Information"
          content="This is an info message."
        />
        <Message
          type="error"
          title="Error"
          content="This is an error message."
        />
        <Message
          type="warning"
          title="Warning"
          content="This is a warning message."
        />
      </div> */}
      <CounterApp />
    </>
  );
}

export default App
