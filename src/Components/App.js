import GlobalStyle from '../theme/globalStyle.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { useState } from "react";
import ContextImage from './../Context/ContextImage';
import ContextToken from './../Context/ContextToken';
import ContextUserHabits from './../Context/ContextUserHabits';
import Login from '../Components/Login.js';
import SignUp from '../Components/SignUp.js';
import Today from '../Components/Today.js';
import Habits from '../Components/Habits.js';
import History from '../Components/History.js';


export default function App (){

    const [image, setImage] = useState("");
    const [token, setToken] = useState("");
    const [userHabits, setUserHabits] = useState([]);
    
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
            <ContextImage.Provider value={{image, setImage}}>
                <ContextToken.Provider value={{token, setToken}}>
                    <ContextUserHabits.Provider value={{userHabits, setUserHabits}}>
                        <Routes>
                            <Route path="/" element={<Login />} />
                            <Route path="/cadastro" element={<SignUp />} />
                            <Route path="/hoje" element={<Today />} />
                            <Route path="/habitos" element={<Habits />} />
                            <Route path="/historico" element={<History />} />

                        </Routes>
                    </ContextUserHabits.Provider>
                </ContextToken.Provider>
            </ContextImage.Provider>
            
            </BrowserRouter>      
        
        </>
    )
}