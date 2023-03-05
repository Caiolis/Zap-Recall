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

// Images for the cards
import playButton from "../../assets/imgs/seta_play.png";
import defaultDeck from "../../defaultDeck";
import turnButton from "../../assets/imgs/seta_virar.png";
import rightAnswer from "../../assets/imgs/icone_certo.png";
import middleAnswer from "../../assets/imgs/icone_quase.png";
import wrongAnswer from "../../assets/imgs/icone_erro.png";

export default function Cards({ progress, setProgress }) {
  return (
    <Container>
      {defaultDeck.map((item, index) => (
        <DeckFront
          questionIndex={index}
          questionItem={item}
          progress={progress}
          setProgress={setProgress}
        />
      ))}
    </Container>
  );
}

function DeckFront({ questionIndex, questionItem, progress, setProgress }) {
  const [showQuestion, setShowQuestion] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [result, setResult] = useState();

  // Handles the click on the answer buttons, if right progress++
  function handleAnswer(answer) {
    setShowAnswer(false);
    setShowQuestion(false);
    setProgress(progress + 1);
    setAnswered(true);
    setResult(answer);
  }

  return (
    <Card showQuestion={showQuestion} data-test="flashcard">
      <FrontCard
        showQuestion={showQuestion}
        showAnswer={showAnswer}
        answered={answered}
        result={result}
      >
        <h2 data-test="flashcard-text">
          {showQuestion
            ? questionItem.question
            : `Pergunta ${questionIndex + 1}`}
        </h2>
        {answered ? (
          <img
            src={
              result == "right"
                ? rightAnswer
                : result == "wrong"
                ? wrongAnswer
                : middleAnswer
            }
            alt="Answered button"
            data-test={result == "right" ? "zap-icon" : result == "wrong" ? "no-icon" : "partial-icon"}
          />
        ) : (
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
            data-test={showQuestion ? "turn-btn" : "play-btn"}
          />
        )}
      </FrontCard>

      <BackCard showAnswer={showAnswer}>
        <h2 data-test="flashcard-text">{questionItem.answer}</h2>
        <ButtonsContainer>
          <FailButton
            onClick={() => {
              handleAnswer("wrong");
            }}
            data-test="no-btn"
          >
            Não lembrei
          </FailButton>
          <AlmostFailButton
            onClick={() => {
              handleAnswer("middle");
            }}
            data-test="partial-btn"
          >
            Quase não lembrei
          </AlmostFailButton>
          <ZapButton
            onClick={() => {
              handleAnswer("right");
            }}
            data-test="zap-btn"
          >
            Zap!
          </ZapButton>
        </ButtonsContainer>
      </BackCard>
    </Card>
  );
}
