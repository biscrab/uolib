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

export const CountOfBook = styled.div`
    border-bottom: 2px solid #333;
    margin-top: 30px;
    margin-bottom: 5px;
    padding-bottom: 5px;
`

interface Props {
    selected: boolean;
}

export const Select = styled.div<Props>`
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
    margin: 0;
    height: 1000px;
`

export const Book = styled.li`
    border-bottom: 1px solid #eee;
    display: flex;
    padding: 10px 0px;
`

export const BookInfo = styled.div`
    margin-left: 30px;
    display: flex;
    flex-direction: column;
`

export const Explane = styled.span`
    color: dimgray;
    padding: 10px 0px;
    height: 100%;
`

export const Info = styled.div`
    display: flex;
    align-items: center;
    font-size: 13px;
    width: 100%;
    span{
        margin-right: 5px;
    }
    img{
        width: 10px;
        height: 10px;
        margin-right: 5px;
    }
`

export const BookCover = styled.img`
    border-radius: 10px;
    width: 100px;
    height: 150px;
`

export const Tittle = styled.b`

`
