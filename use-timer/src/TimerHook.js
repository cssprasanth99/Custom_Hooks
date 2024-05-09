import { useRef, useState } from "react";

export const useTimer = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const ref = useRef();

  function startTimer() {
    ref.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    setIsRunning(true);
  }

  function stopTimer() {
    clearInterval(ref.current);
  }

  function resetTimer() {
    setTimer(0);
  }

  return [timer, isRunning, startTimer, stopTimer, resetTimer];
};
