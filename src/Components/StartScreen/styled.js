import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 9999999;
    background-color: #FB6B6B;
    position: absolute;
`

export const Title = styled.h1`
    font-family: Righteous, 'sans-serif';
    font-weight: 400;
    font-size: 36px;
    text-align: center;
    color: #FFF;
    margin: 20px 0px 40px 0px;
`

export const StartButton = styled.button`
    outline: none;
    border: 1px solid #D70900;
    border-radius: 5px;
    cursor: pointer;
    background-color: #FFF;
    width: 246px;
    height: 54px;
    color: #D70900;
    font-family: Recursive, 'sans-serif';
    font-weight: 400;
    font-size: 18px;
    box-shadow: 0px 4px 4px 0px #00000026;
    &:hover {
        background-color: #FAFAFA;
    }
`