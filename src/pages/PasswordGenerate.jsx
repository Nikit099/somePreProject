import { useEffect, useState } from 'react';
import '../App.scss';


function PasswordGenerate() {
    const [value, setValue] = useState(4)
    const [password, setPassword] = useState('')
    const [checkboxBig, setCheckboxBig] = useState(false)
    const [checkboxCount, setCheckboxCount] = useState(false)
    const [checkboxSmall, setCheckboxSmall] = useState(true)
    const [checkboxFigur, setCheckboxFigur] = useState(false)
    const [restart, setRestart] = useState(false)

    useEffect(() => {

                let simbols = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']

                if(checkboxBig){
                    simbols.forEach(i =>{
                         simbols.push(  i.toUpperCase()) 
                    })
                }
                if(!checkboxSmall){
                    simbols = simbols.filter(i => i !== i.toLowerCase())
                }
                if(checkboxCount){
                    const count = [1, 2,3,4,5,6,7,8,9,0]
                    count.forEach(i => {
                        simbols.push(i) 
                    })
                }
                if(checkboxFigur){
                    const figurs = ['!', '#', '$', '%', '^', "&", '*', '_', '?']
                    figurs.forEach(i => {
                        simbols.push(i) 
                    })
                }
                if(!simbols.length){
                    setPassword('select the password configuration')
                    return
                }
            setPassword('')
            
            for(let i = 0; i < value; i++){
            const randomCount = Math.floor(Math.random() * simbols.length)
            setPassword(prev => prev + simbols[randomCount])
            }
            
    }, [value, checkboxBig, checkboxCount, checkboxFigur, checkboxSmall, restart])
    

    return ( 
        <div className = "PasswordGenerate" style={{position: 'relative', top: '200px', left: '700px'}} >
            <div className='string_password'  >
                <h1 className='password'>{password}</h1>
                <button className='btn btn-outline-dark btn-lg' onClick = {() => setRestart(prev => !prev )} > Reset </button>
                
            </div>

            <div className='range'  style={{margin: '40px -40px', width: '500px'}}  >
            <button className='btn btn-info' onClick={() => value > 4 && setValue(Number(value) - 1)} >-</button>

            <input  className="form-range" id="customRange1" type="range"   style={{width: '400px', padding: '0 20px'}}  min={4} max = {20} value = {value} onChange= {(e) => setValue(e.target.value)} />
            <button className="btn btn-danger" style={{display: 'inline'}} onClick={  () => value < 20 &&  setValue(Number(value) + 1)} >+</button>
           
            <h1 className='length_range' >Password length {value}</h1>
            </div>
          
                <h1><span  className='badge  rounded-pill bg-primary'>Characters used</span></h1>

                <div style={{margin: '20px 50px'}} >
                <h2>
            <div   className="form-check">
            <input className='form-check-input' type="checkbox" checked = {checkboxBig} onChange={e => setCheckboxBig(e.target.checked)} />
            <label className="form-check-label" htmlFor="">ABC</label>
            </div>
            </h2>
           
            <h2>
            <div className="form-check">
            <input className='form-check-input' type="checkbox" checked = {checkboxSmall} onChange={e =>  setCheckboxSmall(e.target.checked)} />
            <label className="form-check-label" htmlFor="">abc</label>
            </div>
            </h2>
            
            <h2>
            <div className="form-check">
            <input className='form-check-input' type="checkbox"  checked = {checkboxCount} onChange={e =>  setCheckboxCount(e.target.checked)} />
            <label className="form-check-label" htmlFor="">123</label>
            </div>
            </h2>
            
            <h2>
            <div className="form-check">
         <input  className='form-check-input' type="checkbox"  checked = {checkboxFigur} onChange={e =>  setCheckboxFigur(e.target.checked)} />  
            <label className="form-check-label" htmlFor="">#&$</label>
            </div>
            </h2>
            
                </div>
            
         

        
        </div>
    );
}

export default PasswordGenerate;
