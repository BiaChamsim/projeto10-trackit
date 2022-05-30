import styled from "styled-components";
import { BsTrash } from "react-icons/bs";
import axios from "axios";
import ContextToken from './../Context/ContextToken';
import { useContext } from "react";

export default function HabitBox(props){

    const weekdays = [
        {id: 0, name:"D", isSelected: false}, 
        {id: 1, name:"S", isSelected: false}, 
        {id: 2, name:"T", isSelected: false}, 
        {id: 3, name:"Q", isSelected: false}, 
        {id: 4, name:"Q", isSelected: false}, 
        {id: 5, name:"S", isSelected: false}, 
        {id: 6, name:"S", isSelected: false}
    ];

    const {token} = useContext(ContextToken);

    function renderDay(day){
        if (props.habits.days.includes(day.id)){
            return <DayButton selected={true}>{day.name}</DayButton>
        }else{
            return <DayButton selected={false}>{day.name}</DayButton>
        }
    }

    function deleteHabit(){

        window.confirm("Tem certeza que deseja excluir ?")

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
       
        const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.habits.id}`, config)
        promise.then(response => (props.getHabits()))

    }

    return(
        <Box>
            <HabitAndDay>
                <h1>{props.habits.name}</h1>
                <div>{weekdays.map(day => renderDay(day))}</div>
            </HabitAndDay>
            <BsTrash onClick={deleteHabit}/>
        </Box>
    )
}

const DayButton = styled.button`
    border: none;
    color: ${props => props.selected ? "#FFFFFF" : "#DBDBDB"};
    background-color: ${props => props.selected ? "#DBDBDB" : "#FFFFFF"};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-right: 4px;
`

const Box = styled.div`
    width: 340px;
    height: 92px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    margin-top: 20px;
`

const HabitAndDay = styled.div`

h1{
    font-size: 20px;
    margin-left: 16px;
}

div{
    margin-left: 16px;
}

`

