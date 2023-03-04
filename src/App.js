import GlobalStyle from "./GlobalStyles";
import Logo from "./Components/Logo/Logo"
import Cards from "./Components/Cards/Cards";
import ProgressBar from "./Components/ProgressBar/ProgressBar";
import { useState } from "react";

export default function App() {
  const [progress, setProgress] = useState(0);

  return (
    <>
      <GlobalStyle />
      <Logo />
      <Cards />
      <ProgressBar 
        progress={progress}
      />
    </>
  );
}