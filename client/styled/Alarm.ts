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
    a{
        width: 100%;
    }
`

interface SelectProps{
    selected?: boolean,
}

export const Select = styled.div<SelectProps>`
    cursor: pointer;
    font-weight: bold;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${props => props.selected ? "1px solid #555" : "1px solid #eee"};
    border-bottom: ${props => props.selected ? "none" : "1px solid #555"};
`

export const List = styled.ul`
    padding-top: 15px;
    height: 1000px;
    margin: 0;
    margin-top: 20px;
`

export const PageDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
`

export const Page = styled.a<SelectProps>`
    background-color: ${props => props.selected ? "#17a2b8" : "#eee"};
    color: ${props => props.selected ? "white" : ""};
    padding: 7px 12px;
    font-size: 15px;
    margin: 5px;
    font-weight: bold;
`

export const Alarm = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    width: 100%;
    border: 2px solid #ccc;
    cursor: pointer;
    div{
        width: 100%;
    }
    b{
        font-size: 15px;
        margin-bottom: 10px;
    }
`

export const AlarmContents = styled.div`
    background: #eee;
    margin-top: 5px;
    padding: 6px 12px;
    border-radius: 3px;
    width: 100%;
    box-sizing: border-box;
    font-size: 14px;
`

export const Delete = styled.div`
    border: 2px solid #eee;
`