import styled from "styled-components"
import { textColor } from "../../constants/colors"

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    color: ${textColor};
    margin: 30px 20px;
    padding-bottom: 120px;
    padding-top: 70px;
    button {
        margin-top: 38px;
        margin-bottom: 137px;
        width: 225px;
        height: 42px;
        border: none;
        border-radius: 3px;
        background-color: #e8833a;
        color: #ffffff;
        font-size: 18px;
    }
`
export const Title = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #247A6B;
    margin-bottom: 50px;
`
export const TextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    p {
        margin-top: 10px
        font-weight: 400;
    }
    strong {
        font-weight: bold;
    }
`