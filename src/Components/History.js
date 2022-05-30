import Header from '../Components/Header.js';
import Menu from '../Components/Menu.js';

export default function (){
    return(
        <div>
            <Header />
            <h1 style={{fontSize: "22px" , fontWeight: "400" , color: "#126BA5", marginTop: "100px"}}>Histórico</h1>
            <p style={{fontSize:"18px" , color:"#666666"}}>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            <Menu />
        </div>

    )
}