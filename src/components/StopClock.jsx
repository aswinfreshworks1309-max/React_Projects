import { useEffect, useRef, useState } from "react";

export default function StopClock() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setTime((t) => t + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [running]);

  const formatTime = () => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${String(hours).padStart(2, "0")} : ${String(minutes).padStart(
      2,
      "0"
    )} : ${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center  bg-gray-400">
      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-2xl w-[400px] text-center border border-white/20">

        <h1 className="text-3xl font-bold text-white mb-6 tracking-wide ">
          Stop Watch
        </h1>

        <div className="text-5xl font-mono text-white mb-8 drop-shadow-[0_0_15px_#7c3aed]">
          {formatTime()}
        </div>

        <div className="flex justify-between gap-4">
          <button
            onClick={() => setRunning(true)}
            className="flex-1 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold shadow-lg hover:scale-105 transition"
          >
             Start
          </button>

          <button
            onClick={() => setRunning(false)}
            className="flex-1 py-3 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-black font-semibold shadow-lg hover:scale-105 transition"
          >
             Pause
          </button>

          <button
            onClick={() => {
              setRunning(false);
              setTime(0);
            }}
            className="flex-1 py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold shadow-lg hover:scale-105 transition"
          >
             Reset
          </button>
        </div>

      </div>
    </div>
  );
}
