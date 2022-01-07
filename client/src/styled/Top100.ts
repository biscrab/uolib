import styled from 'styled-components'

export const Body = styled.div`
    margin-top: 50px;
    width: 1200px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
`

export const SelectDiv = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 30px;
    a{
        width: 100%;
    }
`

interface SelectProps{
    selected: boolean,
}

export const Select = styled.div<SelectProps>`
    width: 100%;
    height: 50px;
    border: 1px solid #eee;
    border-bottom: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: ${props => props.selected ? "1px solid black" : ""};
    border-bottom: ${props => props.selected ? "none" : "1px solid black"};
`

export const List = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const Book = styled.div`
    width: 19%;
    margin: 0.5%;
    margin-top: 2%;
    border-bottom: 1px solid #eee;
    padding-bottom: 20px;
    b{
        margin-top: 6px;
    }
    a{
        display: flex;
        flex-direction: column;
    }
    img{
        width: 100%;
        border-radius: 0px 10px 10px 10px;
    }
    span{
        font-size: 13px;
        color: dimgray;
    }
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        position: absolute;
        width: 30px;
        height: 30px;
        background-color: rgba(0, 0, 0, 0.5);
        font-size: 13px;
    }
`