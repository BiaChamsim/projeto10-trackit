import styled from "styled-components";
import ContextToken from './../Context/ContextToken';
import { useContext } from 'react';

export default function Header(){

    const {image} = useContext(ContextToken);

    return(
        <Top>
            <h1>TrackIt</h1>
            <Image src={image} />
        </Top>
    )
}


const Top = styled.div`
    position: fixed;
    width: 100vw;
    left: 0;
    top: 0;
    height: 70px;
    background-color: #126BA5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px;
    

    h1{
        font-family: 'Playball';
        font-size: 40px;
        color: #FFFFFF;
        font-weight: 400;        
    }
`

const Image = styled.img`

width: 52px;
height: 52px;
border-radius: 98.5px;

`