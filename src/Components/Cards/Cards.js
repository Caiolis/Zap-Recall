import {
  Container,
  Card,
  FrontCard,
  BackCard,
  ButtonsContainer,
  ZapButton,
  FailButton,
  AlmostFailButton,
} from "./styled";
import { useState } from "react";

import playButton from "../../assets/imgs/seta_play.png";
import defaultDeck from "../../defaultDeck";
import turnButton from "../../assets/imgs/seta_virar.png";

export default function Cards() {
  return (
    <Container>
      {defaultDeck.map((item, index) => (
        <DeckFront questionIndex={index} questionItem={item} />
      ))}
    </Container>
  );
}

function DeckFront({ questionIndex, questionItem }) {
  const [showQuestion, setShowQuestion] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <Card showQuestion={showQuestion}>
      <FrontCard showQuestion={showQuestion} showAnswer={showAnswer}>
        <h2>
          {showQuestion
            ? questionItem.question
            : `Pergunta ${questionIndex + 1}`}
        </h2>
        <img
          src={showQuestion ? turnButton : playButton}
          alt="Play Button or Turn Button"
          onClick={
            showQuestion
              ? () => {
                  setShowAnswer(true);
                }
              : () => {
                  setShowQuestion(true);
                }
          }
        />
      </FrontCard>

      <BackCard showAnswer={showAnswer}>
        <h2>{questionItem.answer}</h2>
        <ButtonsContainer>
          <FailButton>Não lembrei</FailButton>
          <AlmostFailButton>Quase não lembrei</AlmostFailButton>
          <ZapButton>Zap!</ZapButton>
        </ButtonsContainer>
      </BackCard>
    </Card>
  );
}
