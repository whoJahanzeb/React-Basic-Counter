import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);
  function addValue() {
    if (counter >= 20) {
      return;
    }
    setCounter(counter + 1);
  }
  function removeValue() {
    if (counter <= 0) {
      return;
    }
    setCounter(counter - 1);
  }
  return (
    <>
      <div className="max-w-xl mx-auto space-y-4 text-center">
        <h1 className="text-xl font-semibold">Value: {counter}</h1>
        <button className="bg-green-500 text-white" onClick={addValue}>
          Add Value
        </button>
        <br />
        <button className="bg-red-500 text-white" onClick={removeValue}>
          Remove Value
        </button>
      </div>
    </>
  );
}
export default App;
