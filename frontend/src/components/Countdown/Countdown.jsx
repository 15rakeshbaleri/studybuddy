import React, { useState, useEffect } from "react";
import Style from "./Countdown.module.css";

function Countdown() {
  const [time, setTime] = useState(0); // Time in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [alarmTime, setAlarmTime] = useState(""); // Time for the alarm (HH:MM:SS format)

  // Effect to handle the timer logic
  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  // Effect to check for alarm trigger
  useEffect(() => {
    if (alarmTime && formatTime(time) === alarmTime) {
      setAlarmTriggered(true);
      playAlarm();
    }
  }, [time, alarmTime]);

  // Alarm sound logic
  const playAlarm = () => {
    const alarmSound = new Audio("https://www.soundjay.com/button/beep-07.wav"); // Replace with any alarm sound URL
    alarmSound.play();
  };

  // Format time to HH:MM:SS
  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className={Style.container}>
      <h1 className={Style.title}>Study Timer</h1>
      <div className={Style.timerWrapper}>
        <div className={Style.timer}>{formatTime(time)}</div>
      </div>
      <div className={Style.controls}>
        <button
          className={Style.button}
          onClick={() => setIsRunning(!isRunning)}
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          className={Style.button}
          onClick={() => {
            setIsRunning(false);
            setTime(0);
            setAlarmTriggered(false);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Countdown;
