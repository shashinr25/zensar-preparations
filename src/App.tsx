import { useState } from "react";
import Timer from "./features/timer-hooks/Timer";
import TrafficSignal from "./features/traffic-signal/TrafficSignal";
import SearchTableOld from "./features/table-search/SearchTableOld";
import SearchTable from "./features/table-search/SearchTable";
import ContextComp from './features/hooks/context/ContextComp';
import ReducerComp from './features/hooks/reducer/ReducerComp';
import "./App.css";

function App() {
  return (
    <>
      {/* <Timer /> */}
      {/* <TrafficSignal /> */}
      {/* <SearchTableOld />
      <SearchTable /> */}
      {/* <ContextComp /> */}
      <ReducerComp />
    </>
  );
}

export default App;
