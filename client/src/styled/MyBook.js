import styled from 'styled-components'

export const Body = styled.div`
    position: relative;
    margin-top: 80px;
    left: 50%;
    transform: translateX(-50%);
    width: 1100px;
`

export const SelectDiv = styled.div`
    width: 100%;
    display: flex;
`

export const Select = styled.div`
    cursor: pointer;
    font-weight: bold;
    width: calc(1100px/4);
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${props => props.selected ? "1px solid #555" : "1px solid #eee"};
    border-bottom: ${props => props.selected ? "none" : "1px solid #555"};
`

export const List = styled.ul`
    padding: 0;
    height: 1000px;
`