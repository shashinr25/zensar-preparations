import Timer from "./features/timer-hooks/Timer";
import TrafficSignal from "./features/traffic-signal/TrafficSignal";
import SearchTable from "./features/table-search/SearchTable";
import ContextComp from "./features/hooks/context/ContextComp";
import ReducerComp from "./features/hooks/reducer/ReducerComp";
import RefComp from "./features/hooks/ref/RefComp";
import CallbackMemoComp from "./features/hooks/callback-memo/CallbackMemoComp";
import TransitionComp from ".//features/hooks/transition-deferred/TransitionComp";
import Dashboard from "./features/infinite-scroll/Dashboard";
import Input from "./features/debounce/Input";
import "./App.css";

function App() {
  return (
    <>
      {/* <Timer />
      <TrafficSignal />
      <SearchTable />
      <ContextComp />
      <ReducerComp /> */}
      {/* <RefComp /> */}
      {/* <CallbackMemoComp /> */}
      {/* <TransitionComp /> */}
      {/* <Dashboard /> */}
      <Input />
    </>
  );
}

export default App;
