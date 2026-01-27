import { debounce } from "./useDebounce";

function Input() {
  const callFn = () => {
    console.log("Search");
  };

  const handleSearch = debounce(callFn, 500);

  return (
    <>
      <input id="search" onChange={(e) => handleSearch(e.target.value)} />
    </>
  );
}

export default Input;
