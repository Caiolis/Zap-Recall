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
  height: ${(props) => (props.showQuestion ? "131px" : "65px")};
  border-radius: 5px;
  padding: 25px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 5px 0px #00000026;
  margin-top: 25px;
  img {
    cursor: pointer;
    align-self: ${(props) => (props.showQuestion ? "flex-end;" : "none")};
  }
  h2 {
    font-family: Recursive, sans-serif;
    font-weight: ${(props) => (props.showQuestion ? "400" : "700")};
    font-size: 16px;
    color: #333;
    align-self: ${(props) => (props.showQuestion ? "flex-start;" : "none")};
  }
  &:last-child {
    margin-bottom: 120px;
  }
`;
