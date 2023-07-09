import { useState } from "react";
import Child from "./Child";

function App() {
  const [count, setCount] = useState(10);

  const handleCount = (val) => {
    setCount(count + val);
    console.log("Value of count->", count);
  };

  const hanldeZero = () => {
    setCount(0);
    console.log("Zero from Parent");
  };

  return (
    <div className="App">
      <h1>Parent: {count}</h1>
      <button onClick={() => handleCount(1)}>Inc</button>
      <button onClick={() => handleCount(-1)}>Dec</button>
      <button onClick={() => hanldeZero()}>CallZero</button>

      <Child value={count} setValue={setCount} hanldeZero={hanldeZero} />
    </div>
  );
}

export default App;
