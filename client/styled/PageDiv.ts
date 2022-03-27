import styled from "styled-components"

export const PageDiv = styled.div`
    display: flex;
    justify-content: center;
`

interface SelectProps{
    selected?: boolean,
}

export const Page = styled.a<SelectProps>`
    background-color: ${props => props.selected ? "#17a2b8" : "#eee"};
    color: ${props => props.selected ? "white" : ""};
    padding: 7px 12px;
    font-size: 15px;
    margin: 5px;
    font-weight: bold;
`