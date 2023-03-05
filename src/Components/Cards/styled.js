import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px auto;
  width: 100%;
`;

export const Card = styled.div`
  background-color: ${(props) => (props.showQuestion ? "#FFFFD4" : "#FFF")};
  max-width: 300px;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 4px 5px 0px #00000026;
  margin-top: 25px;
  &:last-child {
    margin-bottom: 120px;
  }
`;

export const FrontCard = styled.div`
  width: 100%;
  height: ${(props) => (props.showQuestion ? "131px" : "65px")};
  padding: 25px 15px;
  display: ${(props) => (props.showAnswer ? "none" : "flex")};
  align-items: center;
  justify-content: space-between;
  img {
    cursor: pointer;
    align-self: ${(props) => (props.showQuestion ? "flex-end;" : "none")};
  }
  h2 {
    font-family: Recursive, sans-serif;
    font-weight: ${(props) => (props.showQuestion ? "400" : "700")};
    font-size: 16px;

    // Changes the color of the font based if the question has been answered or not
    // If the question has been answered checks if the answer is correct or not to set the color
    color: ${(props) => {
      if (!props.answered) return "#333";
      if (props.result == "wrong") return "#FF3030";
      if (props.result == "right") return "#2FBE34";
      if (props.result == "middle") return "#FF922E";
    }};
    text-decoration: ${(props) => (props.answered ? "line-through;" : "none")};
    align-self: ${(props) => (props.showQuestion ? "flex-start;" : "none")};
  }
`;

export const BackCard = styled.div`
  width: 100%;
  min-height: 131px;
  padding: 25px 15px;
  display: ${(props) => (props.showAnswer ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-between;
  h2 {
    font-family: Recursive, sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: #333;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  margin-top: 20px;
  button {
    width: 100%;
    height: 38px;
    outline: none;
    border: none;
    border-radius: 5px;
    font-family: Recursive;
    font-weight: 400;
    font-size: 12px;
    color: #fff;
    padding: 0px 10px;
  }
`;

export const ZapButton = styled.button`
  background: #2fbe34;
  &:hover {
    background-color: #3ddb43;
  }
`;

export const AlmostFailButton = styled.button`
  background: #ff922e;
  &:hover {
    background-color: #ffa24d;
  }
`;
export const FailButton = styled.button`
  background: #ff3030;
  &:hover {
    background-color: #ff5c5c;
  }
`;
