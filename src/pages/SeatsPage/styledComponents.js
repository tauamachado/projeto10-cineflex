import styled from "styled-components"
import { textColor, seatColors } from "../../constants/colors"

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: ${textColor};
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
`
export const SeatsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`

export const CaptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 70%;
    justify-content: space-between;
    margin: 10px;
`
export const CaptionCircle = styled.div`
    border: 1px solid ${props => seatColors[props.status].border};
    background-color: ${props => seatColors[props.status].background};
    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
    cursor: ${props => props.status === "unavailable" ? "none" : "pointer"};
`
export const CaptionItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
`

export const Form = styled.form`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
    font-size: 18px;
    button {
        align-self: center;
    }
    input {
        width: calc(100vw - 60px);
    }
`