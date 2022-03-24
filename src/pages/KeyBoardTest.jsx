import React, { useEffect, useState } from 'react';
import { Interv, speed } from '../components/interval';
const KeyBoardTest = () => {
    const [text, setText] = useState('The Window object in JavaScript allows us to execute code at specified intervals. It provides us with two keys methods setTimeout and setInterval. In this article we are going to learn about the setInterval method. Using setInterval inside React components allows us to execute a function or some code at specific intervals. Lets explore how to use setInterval in React.')
    const [difference, setDifference] = useState(null)
    const [accuracy, setAccuracy] = useState(100)
    const [count, setCount] = useState(0)
    const [first, setFirst] = useState(<h2 style={{display: 'inline'}} >{  text.slice( 0, count ) }</h2>)
    const [two, setTwo] = useState( <h2 style={{display: 'inline', background: '#30a330', color: 'white'}}>{text[count]}</h2>)
    const [three, setThree] = useState(<h2 style={{display: 'inline'}}>{text.slice( count + 1, text.length )}</h2>)

  
    useEffect(() => {
        
        const onKeypress = (e) => {
            Interv()
            let arr = []
            arr = text.split('')
            if(e.key !== arr[count]){
            setTwo( <h2 style={{display: 'inline', background: 'red', color: 'white'}}>{arr[count]}</h2>)
            setAccuracy(prevState => prevState - (100 / text.length))
            return 
        }
           
            setCount(prevState => prevState + 1)
            setFirst(<h2 style={{display: 'inline'}} >{  text.slice( 0, count + 1 )}</h2>) 
            setTwo(  <h2  style={{display: 'inline', background: '#30a330', color: 'white'}}>{ arr[count + 1]}</h2>)
            setThree(<h2 style={{display: 'inline'}}>{text.slice( count + 2, text.length )}</h2>) 
           
           
            
        }
        document.addEventListener('keypress', onKeypress)

        return () => {
            document.removeEventListener('keypress', onKeypress)

        }
    }, [count]) 
 
    
    useEffect(() => {
        const interval = setInterval(() => {
            setDifference(speed)
        }, 1000);
        return () => clearInterval(interval);
      }, []);
    

    return (
        <div className='container' >
            <h2 className='text'  style={{width: '1000px'}} >
                {first && <div>  {first}{two}{three}</div> }
            </h2>
            <div className='box' >
            <h1 className='speed' >Cкорость печати {difference} знаков/мин </h1>
                <h1 className='accuracy' >Точность печати {String(accuracy).slice( 0, 4 )}%</h1>
            </div>
     
        </div>
    );
};

export default KeyBoardTest;