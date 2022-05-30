import styled from "styled-components";
import Header from '../Components/Header.js';
import Menu from '../Components/Menu.js';
import TodayBox from "./TodayBox.js";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br'
import updateLocale from 'dayjs/plugin/updateLocale'
import { useContext, useEffect } from "react";
import ContextToken from "../Context/ContextToken.js";
import axios from "axios";


export default function Today(props){

    const {setTodaysHabits, token, percentage, setPercentage} = useContext(ContextToken)

    dayjs.extend(updateLocale)
    dayjs.updateLocale('pt-br', {
        weekdays: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    })

    useEffect(() => getTodaysHabits() ,[])

    function getTodaysHabits() {

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
        promise.then(({ data }) => {
            const todaysHabitsDone = data.filter(todayHabit => todayHabit.done === true)
            const percentageDone = 100 * (todaysHabitsDone.length) / (data.length);
            setTodaysHabits(data);
            setPercentage(Math.round(percentageDone));
                
        })
    }

    return(
        <div>
            <Header />
            <CurrentDay>
                {dayjs().locale('pt-br').format('dddd, DD/MM')}
            </CurrentDay>
            <h1 style={{fontSize: "18px" , fontWeight:"400" , color: "#8FC549"}}>{percentage}% dos hábitos concluídos</h1>
            <TodayBox getTodaysHabits={getTodaysHabits} /> 
            <Menu />
        </div>
    )
}

const CurrentDay = styled.div`
    font-size: 22px;
    color: #126BA5;
    margin-top: 90px;
`
