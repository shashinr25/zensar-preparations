import { useState } from "react";
import Timer from "./features/timer-hooks/Timer";
import TrafficSignal from "./features/traffic-signal/TrafficSignal";
import SearchTableOld from "./features/table-search/SearchTableOld";
import SearchTable from "./features/table-search/SearchTable";
import "./App.css";

function App() {
  return (
    <>
      {/* <Timer /> */}
      {/* <TrafficSignal /> */}
      <SearchTableOld />
      <SearchTable />
    </>
  );
}

export default App;
