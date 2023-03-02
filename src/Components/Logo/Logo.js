import { Container, Title} from "./styled";
import logo from "../../assets/imgs/logo.png";


export default function Logo() {
    return (
        <Container>
            <img src={logo} alt="logo"/>
            <Title>ZapRecall</Title>
        </Container>
    )
}