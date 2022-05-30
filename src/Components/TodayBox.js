import { useState, useContext } from "react"
import ContextToken from "../Context/ContextToken";
import styled from "styled-components"
import { AiOutlineCheck } from "react-icons/ai";
import axios from "axios";


export default function TodayBox(props){

    const {todaysHabits, token} = useContext(ContextToken);
    const [isLoading, setIsLoading] = useState(false);


    function habitDone(habitId, isDone){

        setIsLoading(true);

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const habitState = isDone ? "uncheck" : "check"
        
        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}/${habitState}`, {}, config)
        promise.then(response => {
            setIsLoading(false)
            props.getTodaysHabits()
        })

        promise.catch(error => setIsLoading(false))

    }

    return(
        <>{ 
            todaysHabits.length === 0 ? ""
            :
            todaysHabits.map(habit => { 
            return(
            <TodayHabitBox>
                <div>
                    <h1>{habit.name}</h1>
                    <p>Sequência atual: {habit.currentSequence} dias</p>
                    <p>Seu record: {habit.highestSequence} dias</p>                
                </div>
                <HabitButton done={habit.done} onClick={ isLoading ? () => "" : () => habitDone(habit.id, habit.done)}><AiOutlineCheck size="35px"  /></HabitButton>                
            </TodayHabitBox>)
        })}
        </>
    )
}

const TodayHabitBox = styled.div`
    width: 340px;
    height: 92px;
    color:#666666;
    background-color: #FFFFFF;
    margin-top: 30px;
    padding-left: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;


    h1{
        font-size: 20px;
        font-weight: 400;
    }

    p{
        font-size: 12px;
    }

`

const HabitButton = styled.button`
    width: 69px;
    height: 69px;
    background-color: ${props => props.done ? "#8FC549" : "#E7E7E7"};
    margin: 10px;
    border: none;
  

`


