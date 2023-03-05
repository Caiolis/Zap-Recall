import { Container, Title, StartButton } from "./styled";
import logo from "../../assets/imgs/logo.png";

export default function StartScreen({ setStartGame}) {
    return (
        <Container>
            <img src={logo} alt="Logo"/>
            <Title>ZapRecall</Title>
            <StartButton onClick={() => setStartGame(true)} data-test="start-btn">Iniciar Recall!</StartButton>
        </Container>
    );
}