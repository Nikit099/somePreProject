import React, { useState } from 'react';

const TikTacToe = () => {

const [cell, setCell] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
const [flag, setFlag] = useState(false)



const sizesCell = {
    width: '180px',
    height: '200px',
    border: '2px solid black',
    margin: '4px',
    borderRadius: '25px',
    sizesBoard: {
        width: '650px',
        height: '690px',
        position: 'relative',
        left: '500px',
        top: '100px',
        display: 'flex',
        flexWrap: 'wrap'
    }
}

const handleClick = e =>{
    const block = e.target.closest('.block')
    if(block){
        if( block.innerHTML === '') {
          flag ? e.target.innerHTML = '<img src="./img/close.png" alt="Close" />' :  e.target.innerHTML = '<img src="./img/zero.png" alt="Close" />';
          setFlag(!flag)
        } 
    }
}

    return (
        <div>
          
            <div className='board' style={sizesCell.sizesBoard}  onClick={e => handleClick(e)}>
                {cell.map((i) => (
                    <div key={i} className='block' style={sizesCell} >

                    </div>
                ))}
            </div>
            <h2 className='chooseWindow'>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={flag} onChange={(e)=> setFlag(e.target.checked)} />
            <label className="form-check-label" for="flexSwitchCheckChecked">PICK PLAYER 1`S MARK</label>
            </div>
            </h2>
         


        </div>
    );
};



export default TikTacToe;