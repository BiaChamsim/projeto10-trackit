import styled from "styled-components";
import Header from '../Components/Header.js';
import Menu from '../Components/Menu.js';
import dayjs from "dayjs";
import 'dayjs/locale/pt-br'
import updateLocale from 'dayjs/plugin/updateLocale'

export default function Today(){

    dayjs.extend(updateLocale)
    dayjs.updateLocale('pt-br', {
        weekdays: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    })

    return(
        <div>
            <Header />
            <CurrentDay>
                {dayjs().locale('pt-br').format('dddd, DD/MM')}
            </CurrentDay>
            <Menu />
        </div>
    )
}

const CurrentDay = styled.div`
    font-size: 22px;
    color: #126BA5;
    margin-top: 90px;
`