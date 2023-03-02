import { Container, Card, QuestionTitle } from './styled';
import playButton from '../../assets/imgs/seta_play.png';
import defaultDeck from '../../defaultDeck'


export default function Cards() {
    return (
        <Container>
            {defaultDeck.map((item, index) => <DeckFront questionIndex={index}/>)}
        </Container>
    );
}

function DeckFront({ questionIndex }) {
    return (
        <Card>
            <QuestionTitle>Pergunta {questionIndex + 1}</QuestionTitle>
            <img src={playButton} alt='Play Button' />
        </Card>
    );
}
