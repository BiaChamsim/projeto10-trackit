import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";

import GlobalStyle from '../theme/globalStyle.js';
import Login from '../Components/Login.js';
import SignUp from '../Components/SignUp.js';
import Habits from '../Components/Habits.js';
import Today from '../Components/Today.js';
import History from '../Components/History.js';

import React from 'react';

import ContextImage from './../Context/ContextImage';
import ContextToken from './../Context/ContextToken';
import ContextUserHabits from './../Context/ContextUserHabits';
import ContextTodaysHabits from './../Context/ContextTodaysHabits';
import ContextHabitsStatus from './../Context/ContextHabitsStatus';



export default function App() {

    const [image, setImage] = useState("");
    const [token, setToken] = useState("");
    const [userHabits, setUserHabits] = useState([]);
    const [todaysHabits, setTodaysHabits] = useState([]);
    const [habitsStatus, setHabitsStatus] = useState([]);
    const [percentage, setPercentage] = useState(0);
    

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <ContextToken.Provider value={{ token, setToken, image, setImage, userHabits, setUserHabits, todaysHabits, setTodaysHabits, habitsStatus, setHabitsStatus, percentage, setPercentage }}>

                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/cadastro" element={<SignUp />} />
                        <Route path="/hoje" element={<Today />} />
                        <Route path="/habitos" element={<Habits />} />
                        <Route path="/historico" element={<History />} />

                    </Routes>

                </ContextToken.Provider>
            </BrowserRouter>

        </>
    )
}