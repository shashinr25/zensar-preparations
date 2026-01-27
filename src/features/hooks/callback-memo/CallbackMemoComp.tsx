// import { useState, useCallback, useMemo } from "react";
// import CallBackMemoButton from "./CallBackMemoButton";

// function CallbackMemo() {
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState("");

//   //   const incrementCount = () => {
//   //     setCount((c) => c + 1);
//   //   };

//   const incrementCount = useCallback(() => {
//     setCount((c) => c + 1);
//   }, [count]);

//   console.log("Parent Component");

//   return (
//     <>
//       <h1> Count: {count} </h1>
//       <CallBackMemoButton incrementCount={() => incrementCount()} />
//       <h1> Name: {name} </h1>
//       <input type="text" id="name" onChange={(e) => setName(e.target.value)} />
//     </>
//   );
// }

// export default CallbackMemo;

import { useState, useEffect } from "react";
// This Component can't been changed
function ChildComponent({ callback, data }) {
  useEffect(() => {
    if (data.active) {
      console.log("ChildComponent effect");
      callback();
    }
  }, [data, callback]);

  return <h3>Component example</h3>;
}

function CallbackMemo() {
  const [count, setCount] = useState(0);

  function callbackExample() {
    console.log("Callback example");
  }

  const data = {
    active: true,
  };

  return (
    <>
      <h1>Current counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent callback={callbackExample} data={data} />
    </>
  );
}

export default CallbackMemo;
