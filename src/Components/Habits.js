import Header from '../Components/Header.js';
import Menu from '../Components/Menu.js';
import HabitBox from '../Components/HabitBox.js';
import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import ContextToken from './../Context/ContextToken';
import { is } from '@babel/types';


export default function Habits(){
    const [newHabits, setNewHabits] = useState(false);
    const [habit, setHabit] = useState("");
    const [day, setDay] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const {token, userHabits, setUserHabits} = useContext(ContextToken);
    
    useEffect(getHabits, []); 

    const weekdays = [
        {id: 0, name:"D", isSelected: false}, 
        {id: 1, name:"S", isSelected: false}, 
        {id: 2, name:"T", isSelected: false}, 
        {id: 3, name:"Q", isSelected: false}, 
        {id: 4, name:"Q", isSelected: false}, 
        {id: 5, name:"S", isSelected: false}, 
        {id: 6, name:"S", isSelected: false}
    ];

    const [selectedDay, setSelectedDay] = useState(weekdays);

    function selectDay(id){
        console.log("entrei na fun")
        const selectedDays = selectedDay.map((day) => {
            if(day.id === id){
                day.isSelected = !day.isSelected
            } 
            return day
        })

        setSelectedDay([...selectedDays])

        const daysTrue = selectedDay.filter((day) => day.isSelected === true);
        const daysId = daysTrue.map((day) => day.id);

        setDay([...daysId])

        console.log(daysId)
        console.log(day)
    }


    function sendHabits(){

        setIsLoading(true);

        const body = {
            name:habit,  
            days:day
        }

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', body, config)

            promise.then(response => {
                setHabit("");
                setDay([]);
                setSelectedDay(weekdays);
                setNewHabits(false);
                setIsLoading(false);
                getHabits();
                console.log("foi");
            })
            

        promise.catch(error => console.log(error))
    }


    function getHabits(){

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config)
        promise.then(response => {
            setUserHabits(response.data);
            console.log(userHabits);
        });
        

    }

    function disable(action){
        if(isLoading){
            return () => "";

        }else{
            return action;

        }
    }

    return(
        <div>
            <Header />
            <Top>
                <h2>Meus hábitos</h2>
                <Button onClick={() => setNewHabits(!newHabits)}>+</Button>
            </Top>
            <Container>
                {newHabits ? <NewHabitsContainer>
                    <Input isLoading={isLoading} placeholder="nome do hábito" value={habit} type="text" onChange={disable((e) => setHabit(e.target.value))}></Input>
                    <Days>
                        {selectedDay.map((day, index) => {return <DayButton onClick={() => selectDay(day.id)} selected={day.isSelected} key={index}>{day.name}</DayButton>})}
                    </Days>
                    <Buttons>
                        <CancelButton onClick={() => setNewHabits(!newHabits)} >Cancelar</CancelButton>
                        <SaveButton type="submit" onClick={sendHabits}>Salvar</SaveButton>
                    </Buttons>
                </NewHabitsContainer>
                :
                ""
                }
                {(userHabits.length > 0) ? userHabits.map(habit => <HabitBox getHabits={getHabits} habits={habit} />) : <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p> }
            </Container>
            <Menu />
        </div>

    )
}

const Top = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;

h2{
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    color: #126BA5;
}

`

const Container = styled.div`
    font-size: 18px;
    color: #666666;
`

const NewHabitsContainer = styled.div`
        width: 340px;
        height: 180px;
        background-color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

`

const Button = styled.button`

    width: 40px;
    height: 35px;
    font-size: 18px;
    background-color: #52B6FF;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    color: #FFFFFF;     

`

const Input = styled.input`
    width: 302px;
    height: 42px;
    color: #D4D4D4;
    margin-bottom: 8px;

`

const Days = styled.div`
    display: flex;  
    margin-bottom: 20px;
    align-self: start;
    margin-left: 20px;
`

const DayButton = styled.button`
    border: none;
    color: ${props => props.selected ? "#FFFFFF" : "#DBDBDB"};
    background-color: ${props => props.selected ? "#DBDBDB" : "#FFFFFF"};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-right: 4px;
`

const CancelButton = styled.button`
    width: 84px;
    height: 34px;
    color:#52B6FF;
    background-color: #FFFFFF;
    border: none;
    font-size: 18px;
    margin-right: 18px;

`

const SaveButton = styled.button`
    width: 84px;
    height: 34px;
    background-color:#52B6FF;
    border: none;
    border-radius: 4px;
    font-size: 18px;
    color: #FFFFFF;
`

const Buttons = styled.div`
    border:none;
    background-color: #FFFFFF;
    
`