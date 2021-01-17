import React, {useState} from 'react';
import './App.css';
import Timer from './Components/Timer';
import Btntimer from './Components/Btn-timer'
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  const [time, setTime] = useState({ms:0,s:0,m:5});
  const [interv, setInterv] = useState()
  const [status, setStatus] = useState(0)

  const start = (event) => {
    const arrayOfButtons = event.target.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[0].childNodes;
    let validation = 0;
    arrayOfButtons.forEach((elem) => {
      if(elem.classList.contains('selected')){
        validation += 1
      }
    });
    if(validation === 0) {
      return alert("tenha certeza de ter marcado uma opção de tempo para iniciarmos a contagem.")
    }
    run();
    setStatus(1);
    setInterv(setInterval(run,10));
  }

  let updateMs = time.ms, updateM = time.m, updateS = time.s, updateH = time.h;

  const run = () => {

    if(updateM === -1) {
      return reset();
    }
    if( updateS === -1){
      updateM -= 1;
      updateS = 59;
    }
    if( updateMs === -1){
      updateS -= 1;
      updateMs = 100;
    }
    if (updateM === 0 && updateS === 0 & updateMs === 1) {
      alert('O tempo acabou, hora de voltar à aula!')
    }
    updateMs --;
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
  const resume = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run,10));
  }

  const threeMinutes = (event) => {
    updateMs = 0
    updateM = 3
    updateS = 0
    event.target.parentNode.childNodes[2].classList.remove('selected')
  event.target.parentNode.childNodes[1].classList.remove('selected')

  if (event.target.className.includes(' selected')){
    event.target.classList.remove('selected')
  } else {
    event.target.classList.add('selected')
  }
}
const fiveMinutes = (event) => {
  updateMs = 0
  updateM = 5
  updateS = 0

  event.target.parentNode.childNodes[2].classList.remove('selected')
  event.target.parentNode.childNodes[0].classList.remove('selected')

  if (event.target.className.includes(' selected')){
    event.target.classList.remove('selected')
  } else {
    event.target.classList.add('selected')
  }
}
const tenMinutes = (event) => {
  updateMs = 0
  updateM = 10
  updateS = 0

event.target.parentNode.childNodes[1].classList.remove('selected')
event.target.parentNode.childNodes[0].classList.remove('selected')

  if (event.target.className.includes(' selected')){
    event.target.classList.remove('selected')
  } else {
    event.target.classList.add('selected')
  }
}

  return (
    <div className="main-section">
      <Header/>
      <div className="clock-holder">
        <div className="stopwatch">
          <Timer status={status} time={time} threeMinutes={threeMinutes} fiveMinutes={fiveMinutes} tenMinutes={tenMinutes}/>
          <Btntimer status={status} stop={stop} resume={resume} reset={reset} start={start}/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}



export default App;
