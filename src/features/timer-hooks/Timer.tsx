import { useState, useRef, useEffect } from "react";

function Timer() {
  const [timer, setTimer] = useState(Number(localStorage.getItem("timer")));
  const [isRunning, setIsRunning] = useState(
    Boolean(localStorage.getItem("isRunning"))
  );
  const timerRef = useRef<null | number>(null);

  const start = () => {
    setIsRunning(true);
    // if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setTimer((prevT) => prevT + 1);
    }, 1000);
  };

  const stop = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const reset = () => {
    stop();
    setTimer(0);
  };

  useEffect(() => {
    const storeTimer = localStorage.getItem("timer");
    if (storeTimer) {
      setTimer(Number(storeTimer));
    }
    const storeIsRunning = localStorage.getItem("isRunning");
    if (storeIsRunning && Boolean(storeIsRunning)) {
      setIsRunning(storeIsRunning);
      start();
    }
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("timer", timer);
    localStorage.setItem("isRunning", isRunning);
  }, [timer, isRunning]);

  return (
    <>
      <h1> {timer} </h1>
      <button onClick={() => start()}> Start </button>
      <button onClick={() => stop()}> Stop </button>
      <button onClick={() => reset()}> Reset </button>
    </>
  );
}

export default Timer;
