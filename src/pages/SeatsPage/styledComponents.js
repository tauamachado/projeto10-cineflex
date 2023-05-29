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
    margin-top: 33px;
    width: 327px;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    p {
    font-size: 18px;
    color: #293845;
    margin-top: 12px;
    }
    button {
        margin-top: 50px;
        margin-bottom: 137px;
	    width: 225px;
	    height: 42px;
	    border: none;
	    border-radius: 3px;
	    background-color: #e8833a;
	    color: #ffffff;
	    font-size: 18px;
    }
    input {
        height: 51px;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        padding-left: 18px;
        font-size: 18px;
        &::placeholder {
          font-style: italic;
          color: #AFAFAF;
        }
    }
    label {
        margin-top: 33px;
        width: 327px;
        display: flex;
        flex-direction: column;
        font-family: 'Roboto', sans-serif;
    }


`

  
