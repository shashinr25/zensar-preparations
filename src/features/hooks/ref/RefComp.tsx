import { useState, useEffect, useRef } from "react";

function RefComp() {
  let [query, setQuery] = useState("");

  const inputRef = useRef(0);

  useEffect(() => {
    setInterval(() => {
      inputRef.current = Number(inputRef.current) + 1;
      //   setQuery((n) => n + 1);
    }, 500);
  }, []);

  console.log("re-rendered", query, inputRef.current);
  return (
    <>
      <div className="ref-container">
        <div>
          <label htmlFor="name"> Age </label>
          <input
            type="number"
            id="age"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

export default RefComp;
