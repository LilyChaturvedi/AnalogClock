import React, { useEffect, useState } from "react";
import "./Custom.css";
const CustomClock = ({
  timezoneOffset,
  value,
  colors,
  backColors,
  setTimeZone,
}) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);
  const currentTime = new Date(time.getTime() + timezoneOffset * 60 * 1000);

  const seconds = currentTime.getSeconds();
  const minutes = currentTime.getMinutes();
  const hours = currentTime.getHours() % 12;

  if (minutes === 0 && seconds === 0) {
    alert(`${value} time is ${hours} `);
  }
  const handleTimezoneChange = (e) => {
    setTimeZone(e.target.value);
  };

  const secondDegrees = (seconds / 60) * 360;
  const minuteDegrees = ((minutes + seconds / 60) / 60) * 360;
  const hourDegrees = ((hours + minutes / 60) / 12) * 360;
  const arr = Array.from({ length: 12 }, (_, index) => index + 1);

  return (
    <div className="container">
      <div
        className="clock"
        style={{ color: colors, backgroundColor: backColors }}
      >
        <div
          style={{
            backgroundColor: "red",
            height: "54px",
            width: "4px",
            transform: `rotate(${hourDegrees}deg)`,
          }}
          className="hand"
        >
          <i style={{}}></i>
        </div>
        <div
          className="hand"
          style={{
            backgroundColor: "yellow",
            height: "74px",
            width: "2px",
            transform: `rotate(${minuteDegrees}deg)`,
          }}
        >
          <i></i>
        </div>
        <div
          className="hand"
          style={{
            backgroundColor: "white",
            height: "94px",
            width: "1px",
            transform: `rotate(${secondDegrees}deg)`,
          }}
        >
          <i></i>
        </div>
        {arr.map((item, index) => {
          return (
            <span
              key={index}
              className="span"
              style={{ transform: `rotate(${30 * item}deg)` }}
            >
              <b
                style={{
                  transform: `rotate(${-30 * item}deg)`,
                  color: "white",
                }}
              >
                {item}
              </b>
            </span>
          );
        })}
      </div>
      <h4>{value}</h4>
      {value != "UK time" ? (
        <select
          style={{ color: "black" }}
          onClick={(e) => handleTimezoneChange(e)}
        >
          <option value={0}>GMT/UTC</option>
          <option value={-300}>Eastern Time (US & Canada)</option>
          <option value={-420}>Mountain Time (US & Canada)</option>
        </select>
      ) : (
        ""
      )}
    </div>
  );
};

export default CustomClock;
