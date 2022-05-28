import styled from "styled-components";
import ContextImage from './../Context/ContextImage';
import { useContext } from 'react';

export default function Header(){

    const {image} = useContext(ContextImage);

    return(
        <Top>
            <h1>TrackIt</h1>
            <Image src={image} />
        </Top>
    )
}


const Top = styled.div`
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