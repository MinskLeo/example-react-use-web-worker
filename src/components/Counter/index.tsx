import { useCallback, useEffect, useState } from "react";

export interface ICounterProps {}

export const Counter: React.FC<ICounterProps> = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setValue((v) => {
        const newValue = v + 1;
        console.log("New value: ", newValue);
        return newValue;
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const handleClickMeClick = useCallback(() => {
    console.log("=== I'M NOT FROZEN! ===");
  }, []);

  return (
    <div>
      <p>Counter: {value}</p>
      <button onClick={handleClickMeClick}>
        Click me to check if it's frozen
      </button>
    </div>
  );
};

export default Counter;
