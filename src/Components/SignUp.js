import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Group8 from "../Assets/imagens/Group8.png"
import styled from "styled-components";
import axios from "axios";


export default function SignUp (){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState ("");
    const [name, setName] = useState ("");
    const [image, setImage] = useState ("");
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate()

    function register(){

        setIsLoading(true);

        const body = {
            email,
            name,
            image,
            password:senha
        }

    
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', body)
    
        promise.then(response => {
            navigate("/")
            setIsLoading(false);
        })
        promise.catch(error => {
            const erros = []
            if(error.response.data.details){
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
            <Input isLoading={isLoading} placeholder="email" type="email" value={email} onChange={disable((e) => setEmail(e.target.value))}></Input>
            <Input isLoading={isLoading} placeholder="senha" type="password" value={senha} onChange={disable((e) => setSenha(e.target.value))}></Input>
            <Input isLoading={isLoading} placeholder="nome" type="text" value={name} onChange={disable ((e) => setName(e.target.value))}></Input>
            <Input isLoading={isLoading} placeholder="foto" type="url" value={image} onChange={disable ((e) => setImage(e.target.value))}></Input>
            <Button isLoading={isLoading} onClick={disable(register)}>Cadastrar</Button>
            <Link to="/">Já tem uma conta? Faça login!</Link>
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

    width: 302px;
    height: 44px;
    background: #52B6FF;
    border-radius: 4px;
    border: none;
    margin-bottom: 24px;
    font-size: 20px;
    opacity: ${props => props.isLoading ? "0.7" : "1"};
    color: #FFFFFF;

`





