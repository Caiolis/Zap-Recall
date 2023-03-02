import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0px auto;
    width: 100%;
`

export const Card = styled.div`
    background-color: #FFF;
    max-width: 300px;
    width: 100%;
    border-radius: 5px;
    padding: 25px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 4px 5px 0px #00000026;
    margin-top: 25px;
`

export const QuestionTitle = styled.h2`
    font-family: Recursive, sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: #333;
`
