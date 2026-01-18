import { useState, useEffect, useRef } from "react";

/*
1. Do not focus on HTML or CSS
2. Increament/decreament LIGHT_INDEX variable to switch the lights.
3. Switching lights would happen in every 10 seconds.
4. Hint, take advange of useEffect and useRef.
*/

function TrafficSignal() {
  const [timer, setTimer] = useState(5);
  const [signalIndex, setSignaIndex] = useState(1);
  const timerRef = useRef(null);

  let LIGHT_INDEX = 0; //0->red, 1->yellow, 2->green

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimer((t) => {
        if (t === 1) {
          return 5;
        }
        return t - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (timer === 5) {
      setSignaIndex((i) => {
        if (i === 0) return 1;
        if (i === 1) return 2;
        return 0;
      });
    }
  }, [timer]);

  return (
    <>
      <div className="traffic-signal">
        <div className={`signal ${signalIndex === 0 && "signal-red"}`} />
        <div className={`signal ${signalIndex === 1 && "signal-yellow"}`} />
        <div className={`signal ${signalIndex === 2 && "signal-green"}`} />
      </div>
      <h1> {timer} </h1>
    </>
  );
}

export default TrafficSignal;
