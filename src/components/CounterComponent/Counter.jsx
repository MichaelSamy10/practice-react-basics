import { useState } from "react";
import Styles from "./Counter.module.css";
function Counter() {
  const [count, setCount] = useState(0);

  const onCounterPlus = () => {
    setCount((prev) => prev + 1);
  };

  const onCounterMinus = () => {
    setCount((prev) => (prev == 0 ? 0 : prev - 1));
  };

  const onResetCounter = () => {
    setCount(0);
  };

  return (
    <div>
      <div className={Styles.buttonsGroup}>
        <button onClick={onCounterPlus}>Counter +</button>
        <button onClick={onCounterMinus}>Counter -</button>
        <button onClick={onResetCounter}>Reset Counter</button>
        <input
          type="number"
          value={count}
          onChange={(event) => {
            setCount(event.target.value);
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        {" "}
        Counter {count}
      </div>
    </div>
  );
}

export default Counter;
