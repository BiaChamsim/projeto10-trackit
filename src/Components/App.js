import GlobalStyle from '../theme/globalStyle.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { useState } from "react";
import ContextImage from './../Context/ContextImage';
import Login from '../Components/Login.js';
import SignUp from '../Components/SignUp.js';
import Today from '../Components/Today.js';
import Habits from '../Components/Habits.js';
import History from '../Components/History.js';


export default function App (){

    const [image, setImage] = useState("");
    
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
            <ContextImage.Provider value={{image, setImage}}>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<SignUp />} />
                    <Route path="/hoje" element={<Today />} />
                    <Route path="/habitos" element={<Habits />} />
                    <Route path="/historico" element={<History />} />

                </Routes>
            </ContextImage.Provider>
            
            </BrowserRouter>      
        
        </>
    )
}