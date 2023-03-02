import GlobalStyle from "./GlobalStyles";
import Logo from "./Components/Logo/Logo"
import Cards from "./Components/Cards/Cards";
import ProgressBar from "./Components/ProgressBar/ProgressBar";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Cards />
      <ProgressBar />
    </>
  );
}