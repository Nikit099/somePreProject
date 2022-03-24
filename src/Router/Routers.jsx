import React from 'react'
import {  Route, Routes, Navigate } from 'react-router-dom';
import KeyBoardTest from '../pages/KeyBoardTest';
import PasswordGenerate from '../pages/PasswordGenerate';
import Pomodoro from '../pages/Pomodoro';
import TikTacToe from '../pages/tikTacToe';
function Routers() {
    return (

            <Routes>
            <Route path='/Password' element = {<PasswordGenerate/>} />
            <Route path='/Pomodoro' element = {<Pomodoro/>} />
            <Route path='/KeyBoardTest' element = {<KeyBoardTest/>} />
            <Route path='/ticTacToe' element = {<TikTacToe/>} />
            </Routes>
     
    )
}

export default Routers
