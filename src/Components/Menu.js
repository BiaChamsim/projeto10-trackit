import { Link } from "react-router-dom";
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from "styled-components";


export default function (){
    return (
        <Content>
            <Link to="/habitos"><p>Hábitos</p></Link>
            <Link to= "/hoje">
                <CircularProgressbar styles={buildStyles({
                    textColor: "#FFFFFF",
                    pathColor: "#FFFFFF",
                    trailColor: "transparent"
                })}
        
                value={50} text={"Hoje"} />
            </Link>
            <Link to="/historico"><p>Histórico</p></Link>
        </Content>
    )
}

const Content = styled.div`
    position: fixed;
    width: 100vw;
    left: 0;
    bottom: 0;
    max-height: 70px;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-around;

    a{

        font-size: 18px;
        font-weight: 400;
        color: #52B6FF;
        text-decoration: none;

    }

    a:nth-child(2){
        width: 92px;
        height: 92px;
        margin-bottom: 30px;
        border-radius: 50%;
        background-color: #52B6FF;
        padding: 6px;

    }

`




