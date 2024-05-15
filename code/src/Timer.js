import React, { useState, useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState({ hour: 0, min: 0, sec: 0 });
  const [isActive, setIsActive] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (isActive) {
      const id = setInterval(() => {
        setTime((time) => {
          const newSec = time.sec + 30;
          const newMin = time.min + Math.floor(newSec / 60);
          const newHour = time.hour + Math.floor(newMin / 60);
          return {
            hour: newHour % 24,
            min: newMin % 60,
            sec: newSec % 60,
          };
        });
      }, 1000);
      setIntervalId(id);
    } else if (!isActive && intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }

    return () => clearInterval(intervalId);
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime({ hour: 0, min: 0, sec: 0 });
  };

  return (
    <div className="time-container">
      <div className="whole">
        <h1>STOP WATCH</h1>
        <div className="timer">
          <p>
            <span>{String(time.hour).padStart(2, "0")}</span>
            <span>:</span>
            <span>{String(time.min).padStart(2, "0")}</span>
            <span>:</span>
            <span>{String(time.sec).padStart(2, "0")}</span>
          </p>
        </div>
        <div className="but">
          <button 
          onClick={handleStart}
          >Start</button>
          <button
           onClick={handleStop}
           >Stop</button>
          <button 
          onClick={handleReset}
          >Reset</button>
        </div>
      </div>
    </div>
  );
}



// //use ref
// import React, { useState, useEffect, useRef } from "react";

// export default function Timer() {
//   const [time, setTime] = useState({ hour: 0, min: 0, sec: 0 });
//   const [isActive, setIsActive] = useState(false);
//   const timerRef = useRef(null);

//   useEffect(() => {
//     if (isActive) {
//       timerRef.current = setInterval(() => {
//         setTime((prevTime) => {
//           const newSec = prevTime.sec + 1;
//           const newMin = prevTime.min + Math.floor(newSec / 60);
//           const newHour = prevTime.hour + Math.floor(newMin / 60);
//           return {
//             hour: newHour % 24,
//             min: newMin % 60,
//             sec: newSec % 60,
//           };
//         });
//       }, 1000);
//     } else if (!isActive && timerRef.current) {
//       clearInterval(timerRef.current);
//     }

//     return () => clearInterval(timerRef.current);
//   }, [isActive]);

//   const handleStart = () => {
//     setIsActive(true);
//   };

//   const handleStop = () => {
//     setIsActive(false);
//   };

//   const handleReset = () => {
//     setIsActive(false);
//     setTime({ hour: 0, min: 0, sec: 0 });
//   };

//   return (
//     <div className="time-container">
//       <div className="whole">
//         <h1>STOP WATCH</h1>
//         <div className="timer">
//           <p>
//             <span>{String(time.hour).padStart(2, "0")}</span>
//             <span>:</span>
//             <span>{String(time.min).padStart(2, "0")}</span>
//             <span>:</span>
//             <span>{String(time.sec).padStart(2, "0")}</span>
//           </p>
//         </div>
//         <div className="but">
//           <button onClick={handleStart}>Start</button>
//           <button onClick={handleStop}>Stop</button>
//           <button onClick={handleReset}>Reset</button>
//         </div>
//       </div>
//     </div>
//   );
// }

