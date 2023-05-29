import styled from "styled-components"
import { textColor } from "../../constants/colors"

export const SessionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Roboto';
    font-size: 20px;
    color: ${textColor};
    padding: 0 20px;
`
export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    button {
		font-family: 'Roboto', sans-serif;
		margin-right: 8px;
		width: 83px;
		height: 43px;
		background-color: #e8833a;
		border: none;
		border-radius: 3px;
		color: #ffffff;
		font-size: 18px;
	}
    a {
        text-decoration: none;
    }
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