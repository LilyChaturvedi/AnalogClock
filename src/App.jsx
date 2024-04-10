import React, { useState } from "react";
import "./App.css";
import CustomClock from "./Component/CustomClock";

function App() {
  const [selectedTimezone2, setSelectedTimezone2] = useState(0);
  const [selectedTimezone3, setSelectedTimezone3] = useState(0);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <CustomClock
        timezoneOffset={selectedTimezone2}
        setTimeZone={setSelectedTimezone2}
        value={"America"}
        colors={"white"}
        backColors={"rgba(255, 255, 255, 0.1)"}
      />
      <CustomClock
        timezoneOffset={0}
        value={"UK time"}
        colors={"white"}
        backColors={"gray"}
      />

      <CustomClock
        timezoneOffset={selectedTimezone3}
        setTimeZone={setSelectedTimezone3}
        value={"New York"}
        colors={"white"}
        backColors={"rgba(255, 255, 255, 0.1)"}
      />
    </div>
  );
}

export default App;
