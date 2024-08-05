import { useState } from "react";
import Counter from "./children-counter";
import "./counter.css"
interface UpdateCount {
  (id: number, newCount: number): void;
}

const CounterApp = () => {
  const [counters, setCounters] = useState([{ id: 1, count: 0 }]);

  const addCounter = () => {
    setCounters([...counters, { id: counters.length + 1, count: 0 }]);
  };

  const updateCount: UpdateCount = (id, newCount) => {
    setCounters(
      counters.map((counter) =>
        counter.id === id ? { ...counter, count: newCount } : counter
      )
    );
  };

  const totalSum = counters.reduce((sum, counter) => sum + counter.count, 0);

  return (
    <div className="container">
      <h1>Total Count: {totalSum}</h1>
      <button className="add-button" onClick={addCounter}>
        Add Counter
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          id={counter.id}
          count={counter.count}
          updateCount={updateCount}
        />
      ))}
    </div>
  );
};

export default CounterApp;
