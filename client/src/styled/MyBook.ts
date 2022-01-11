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

export const Support = styled.div`
    width: 100%;
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    margin-bottom: 10px;
    div{
        width: 100%;
        color: white;
        padding: 8px 16px;
        background-color: #343a40;
        box-sizing: border-box;
        border-radius: 8px 8px 0px 0px;
        font-size: 13px;
    }
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
    b{
        font-size: 20px;
    }
`

export const TagDiv = styled.div`
    display: flex;
    span{
        color: #5032df;
        border: 2px solid #5032df;
        border-radius: 20px;
        padding: 3px 10px;
        line-height: 20px;
        user-select: none;
        font-size: 14px;
        font-weight: 600;
        margin-right: 5px;
    }
`

export const Explane = styled.span`
    color: dimgray;
    height: 100%;
    width: 100%;
    font-size: 13px;
`

export const Info = styled.div`
    display: flex;
    align-items: center;
    font-size: 15px;
    width: 100%;
    padding: 15px 0px;
    font-weight: bold;
    span{
        margin-right: 5px;
    }
    img{
        width: 12px;
        height: 12px;
        margin-right: 5px;
    }
`

export const BookCover = styled.img`
    border-radius: 10px;
    width: 100px;
    height: 150px;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.3);
`

export const Tittle = styled.b`

`
