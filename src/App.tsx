import Timer from "./features/timer-hooks/Timer";
import TrafficSignal from "./features/traffic-signal/TrafficSignal";
import SearchTable from "./features/table-search/SearchTable";
import ContextComp from "./features/hooks/context/ContextComp";
import ReducerComp from "./features/hooks/reducer/ReducerComp";
import RefComp from "./features/hooks/ref/RefComp";
import "./App.css";

function App() {
  return (
    <>
      {/* <Timer />
      <TrafficSignal />
      <SearchTable />
      <ContextComp />
      <ReducerComp /> */}
      <RefComp />
    </>
  );
}

export default App;
