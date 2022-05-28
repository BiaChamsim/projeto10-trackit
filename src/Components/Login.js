import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import Group8 from "../Assets/imagens/Group8.png";
import styled from "styled-components";
import ContextImage from './../Context/ContextImage';
import { useContext } from 'react';



export default function Login(){

    const {setImage} = useContext(ContextImage);

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    function enter(){

        setIsLoading(true);
        
        
        const body = {
            email,
            password:senha
        }

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', body)

        promise.then(response => {
            navigate("/hoje")
            setIsLoading(false);
            setImage(response.data.image)
            console.log(response)
        })

        promise.catch(error => {
            const erros = []
            if (error.response.data.datails){
                error.response.data.details.map(erro => erros.push(erro))
            }else{
                erros.push(error.response.data.message)
            }
            const errorText = erros.join("\n")
            alert(errorText)
            setIsLoading(false);
        })

    }

    function disable(action){
        if(isLoading){
            return () => "";

        }else{
            return action;

        }
    }


    return(
        <Content>
            <img src={Group8} />
            <Input isLoading={isLoading} type="email" placeholder="email" value={email} onChange={disable((e) => setEmail(e.target.value))}></Input>
            <Input isLoading={isLoading} type="password" placeholder="senha" value={senha} onChange={disable((e) => setSenha(e.target.value))}></Input>
            <Button isLoading={isLoading} onClick={disable(enter)}> {isLoading ? <ThreeDots color="#FFFFFF" height={14} width={52} /> : "Entrar"} </Button>
            <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
        </Content>
    )
}

const Content = styled.div`

height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

img{
    width: 180px;
}

`

const Input = styled.input `

    color: ${props => props.isLoading ? "#AFAFAF" : "black"};
    background-color: ${props => props.isLoading ? "#D4D4D4" : "#FFFFFF"};
    width: 302px;
    height: 44px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-bottom: 6px;
    font-size: 20px;   
    padding: 10px;

    Input::placeholder {
      color: #DBDBDB;
    }

`
    

const Button = styled.button`

    display: flex;
    justify-content: center;
    align-items: center;
    width: 302px;
    height: 44px;
    background: #52B6FF;
    opacity: ${props => props.isLoading ? "0.7" : "1"};
    border-radius: 4px;
    border: none;
    margin-bottom: 24px;
    font-size: 20px;
    color: #FFFFFF;

`





