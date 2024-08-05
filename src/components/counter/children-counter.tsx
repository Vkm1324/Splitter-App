interface CounterProps {
  id: number;
  count: number;
  updateCount: (id: number, newCount: number) => void;
}

const Counter = ({ id, count, updateCount }: CounterProps) => {
  const increment = () => {
    updateCount(id, count + 1);
  };

  const decrement = () => {
    updateCount(id, count - 1);
  };

  return (
    <div className="counter">
      <h2>Counter {id}</h2>
      <p>Count: {count}</p>
      <button className="increment-button" onClick={increment}>
        Increment
      </button>
      <button className="decrement-button " onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
