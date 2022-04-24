import React, {useEffect, useState} from "react";
import ChooseTime from "../components/ChooseTime";
import '../styles.css';



function Pomodoro() {
  const [countMin, setCountMin] = useState(25)
  const [Breack, setBreack] = useState(1)
  const [countSec, setcountSec] = useState(0)
  const [session, setSession] = useState(1)
  const [intervalId, setIntervalId] = useState(0);
  const [modalWindow, setModalWindow] = useState(false);
  const [color, setColor] = useState(['redBlue', 'violetYellow', 'orangeGreen']);
  const [backColor, setBackColor] = useState({red: true, yellow: false, green: false})
 
  const getBackColor = () => {
    if(backColor.red){
      
      return "redBlueBack"
    }
    if(backColor.yellow){
      return "violetYellowBack"
    }
    if(backColor.green){
      return "orangeGreenBack"
    }
    
  }
 useEffect(() => {
  getBackColor()
 }, [backColor])


 const handleClick = () => {
   if (intervalId) {
     clearInterval(intervalId);
     setIntervalId(0);
     return;
   }
   const removeInterval = () => {
     clearInterval(newIntervalId);
     setIntervalId(0);
  }
   let sec = countSec 
   let min = countMin 
   let sessionCount = session
   let flag = false
   const newIntervalId = setInterval(() => {
     if(sessionCount > Breack){
       removeInterval()
      return
     }
    if(min === 0 && sec === 0){
      if(flag){
        min = 25
        sec = 0
        sessionCount++
        if(sessionCount <= Breack){
          setSession(sessionCount)
        }
        setCountMin(min)
        setcountSec(sec)
        flag = false
        return
      }
      min = 4
     sec = 59
      setCountMin(min)
      setcountSec(sec)
      flag = true
     return
    }  

     if(!sec){
     min--
     sec = 59
      setCountMin(min)
      setcountSec(sec)
     }else {
      sec--
      setcountSec(sec )
     }
     
  }, 1000)
   setIntervalId(newIntervalId);

 };


 
  return (
    <div  className= {getBackColor()}    >
      <div className="Pomodoro" >
      <h2 className="session">Session {session} </h2> 

<div className="clock">
  <div className='boxClock' >
  <h1 className='time' >{countMin >= 10 ? countMin : '0' + countMin }:{countSec >= 10 ? countSec : '0' + countSec } </h1>
  <h3 onClick={ handleClick} className='start' > {intervalId ? <div> PAUSE</div> : <div>  START</div>} </h3>

  </div>
  </div>


<img src="./img/cogwheel.png" alt=""  className="cogwheel" onClick={() => setModalWindow(!modalWindow)}  />

<ChooseTime   Breack = {Breack} countMin={countMin} backColor= {backColor} setBackColor={setBackColor} color={color} setColor={setColor} modalWindow ={modalWindow} setCountMin={setCountMin} setBreack={setBreack} setModalWindow={setModalWindow} />
 
      </div>
     </div> 
  );
}
export default Pomodoro;
