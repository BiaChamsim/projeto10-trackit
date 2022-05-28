import { Link } from "react-router-dom";
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from "styled-components";


export default function (){
    return (
        <Content>
            <Link to="/habitos"><p>Hábitos</p></Link>
            <Link to= "/hoje"><p>Hoje</p></Link>
            <Link to="/historico"><p>Histórico</p></Link>
        </Content>
    )
}

const Content = styled.div`
    width: 100vw;
    height: 70px;
    position: absolute;
    background-color: #FFFFFF;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-family: 'Lexend Deca';
    font-size: 30px;
    font-weight: 400;
    color: black;
    text-decoration: none;
`

const p = styled.p`


`