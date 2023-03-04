import { Container, Card, QuestionTitle } from "./styled";
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

  return (
    <Card showQuestion={showQuestion}>
      <h2>
        {showQuestion ? questionItem.question : `Pergunta ${questionIndex + 1}`}
      </h2>
      <img
        src={showQuestion ? turnButton : playButton}
        alt="Play Button or Turn Button"
        onClick={() => {
          setShowQuestion(true);
        }}
      />
    </Card>
  );
}
