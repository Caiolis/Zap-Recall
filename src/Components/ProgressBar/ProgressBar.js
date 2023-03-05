import { Container, Title } from './styled';
import defaultDeck from '../../defaultDeck';

export default function ProgressBar({ progress }) {
    return (
        <Container data-test="footer">
            <Title>{progress}/{defaultDeck.length} Concluidos</Title>
        </Container>
    );
}
