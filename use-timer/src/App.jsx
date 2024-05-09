import "./App.css";
import { useTimer } from "./TimerHook";

function App() {
  const [timer, isRunning, startTimer, stopTimer, resetTimer] = useTimer();

  return (
    <>
      {timer}
      <br />
      <button onClick={() => startTimer()}>Start</button>
      <button onClick={() => stopTimer()}>Stop</button>
      <button onClick={() => resetTimer()}>Reset</button>
    </>
  );
}

export default App;
