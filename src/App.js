import React, {useState} from 'react';
import './App.css';
import Header from './Components/Header'
import Timer from './Components/Timer';
import Btntimer from './Components/Btn-timer'

function App() {
  const [time, setTime] = useState({ms:0,s:0,m:0,h:0});
  const [interv, setInterv] = useState()
  const [status, setStatus] = useState(0)

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run,10));
  }

  let updateMs = time.ms, updateM = time.m, updateS = time.s, updateH = time.h;

  const run = () => {
    
    if( updateM === 60){
      updateH += 1;
      updateM = 0;
    }
    if( updateS === 60){
      updateM += 1;
      updateS = 0;
    }
    if( updateMs === 100){
      updateS += 1;
      updateMs = 0;
    }
    updateMs ++;
    return setTime({ms:updateMs, s:updateS, m:updateM, h:updateH})
  }

  const stop = () => {
    clearInterval(interv)
    setStatus(2);
  }
  const reset = () => {
    clearInterval(interv)
    setStatus(0);
    setTime({ms:0,s:0,m:0,h:0})
  }
  const resume = () => start();
  

  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
          <Timer time={time}/>
          <Btntimer status={status} stop={stop} resume={resume} reset={reset} start={start}/>
        </div>
      </div>
    </div>
  );
}



export default App;
