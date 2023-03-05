import GlobalStyle from "./GlobalStyles";
import Logo from "./Components/Logo/Logo";
import Cards from "./Components/Cards/Cards";
import ProgressBar from "./Components/ProgressBar/ProgressBar";
import StartScreen from "./Components/StartScreen/StartScreen";
import { useState } from "react";

export default function App() {
  const [progress, setProgress] = useState(0);
  const [startGame, setStartGame] = useState(false);

  return (
    <>
      <GlobalStyle />

      {/* Verify if the startGame Hook is true if it's not displays the start screen */}
      {startGame ? (
        <>
          <Logo />
          <Cards progress={progress} setProgress={setProgress} />
          <ProgressBar progress={progress} />
        </>
      ) : (
        <StartScreen  setStartGame={setStartGame}/>
      )}
    </>
  );
}
