import React, { useState } from 'react';

const ChooseTime = ({ color, countMin, Breack, setCountMin, setBreack, modalWindow, setModalWindow, setBackColor, backColor }) => {

  

  const upClickMin = () => {
    setCountMin(prev => prev + 1)
   }
   const downClickMin = () => {
    if(countMin === 1)return
  
    setCountMin(prev => prev - 1)
  }
  const upClickSec = () => {
    setBreack(prev => prev + 1)
   }
   const downClickSec = () => {
    if(Breack === 1 )return
  
    setBreack(prev => prev - 1)
  }

  const handleClickColor = (e) => {
    const colorEllips = e.target.closest('#colorEllips')
    if(colorEllips){
      if(colorEllips.className === 'violetYellow'){
        setBackColor( {red: false, yellow: true, green: false})

        return
      }
      if( colorEllips.className === 'orangeGreen' ){
        setBackColor({red: false, yellow: false, green: true})

        return
      }
      if(colorEllips.className === 'redBlue'){
        setBackColor({red: true, yellow: false, green: false})

        return
      }
       
     
    
    }
  }
    return (
      modalWindow && <div   className='boxFon'>
<div className="boxTabl" >
  <div className='head' >
  <h1>Settings</h1>
  <button type="button" onClick={() => setModalWindow(!modalWindow)} className="btn-close" aria-label="Close"></button>
  </div>
  <div className='firstBlock ' >
    <h4>TIME (MINUTES)</h4> 
<div className="hstack gap-3 ">

<h5> <span className="scale">pomodoro</span></h5>
<h5> <span className="scale">BREAK</span></h5>
  
</div>
   
    <div className="hstack gap-3 "> 
    
    <h2  className="count">{countMin}</h2>
    <h2 className="count">{Breack}</h2>

     </div>

  </div>
  
        <img onClick={upClickMin} className="UpLeft" src={require("../img/upload.png")} alt="up.img" style={{width: '22px', height: '24px'}}  />  <img  onClick={upClickSec} className="UpRight" src={require("../img/upload.png")} alt="" style={{width: '22px', height: '24px'}} /> 
       
       <img onClick={downClickMin}  className="DownLeft" src={require("../img/upload.png")} style={{width: '22px', height: '24px', transform: "rotate(180deg)" }} alt="down.img" />  <img onClick={downClickSec} className="DownRight" src={require("../img/upload.png")} alt="" style={{width: '22px', height: '24px', transform: "rotate(180deg)"}} /> 
     

      <div className='threeBlock' >
        <h4>COLOR</h4>
        <div className='colorBox' onClick={e => handleClickColor(e)} >
        {color.map(i => (
          <div className={i} key={i} id='colorEllips' >

          </div>
        ))}
        </div>
      
      </div>
      </div>

      </div>  
    );
};

export default ChooseTime;