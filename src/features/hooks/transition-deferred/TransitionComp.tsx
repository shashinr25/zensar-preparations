import { useState, useTransition, useDeferredValue } from "react";

function TransitionComp() {
  const [data, setData] = useState([
    {
      name: "Shashi",
      age: 34,
    },
    {
      name: "Pooja",
      age: 29,
    },
  ]);

  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <div>
        Name: <input type="text" onChange={(e) => handleChange(e)} />
      </div>
    </>
  );
}

export default TransitionComp;
