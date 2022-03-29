import styled from 'styled-components'

export const Body = styled.div`
    margin-top: 50px;
    width: 1100px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
`

export const SelectDiv = styled.div`
    width: 100%;
    display: flex;
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
    font-weight: bold;
`

export const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 60px;
    margin-bottom: 50px;
    width: 100%;
`

export const Null = styled.div`
    color: #999;
    display: flex;
    width: 100%;
    height: 600px;
    font-size: 18px;
    font-weight: bold;
    align-items: center;
    justify-content: center;
`

interface BookProps{
    key: number
}

export const Book = styled.div<BookProps>`
    width: 210px;
    border-bottom: 1px solid #eee;
    margin: 0px 5px;
    padding-bottom: 10px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    b{
        margin-top: 6px;
    }
    a{
        display: flex;
        flex-direction: column;
    }
`

export const Author = styled.span`
    font-size: 12px;
    font-weight: bold;
    color: #999;
`

type colorType = {
    color: string
}

export const Type = styled.span<colorType>`
    font-weight: 400;
    background-color: ${props => props.color};
    padding: 0.5px 4px;
    border-radius: 3px;
    font-size: 11px;
    color: #fff;
    text-shadow: 0.5px 0.5px black;
    line-height: 17px;
    text-indent: initial;
    border-spacing: 2px;
    margin-right: 5px;
`

export const TypeDiv = styled.div`
    margin-top: 5px;
    display: flex;
`

export const Rank = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: rgba(0, 0, 0, 0.5);
    font-size: 13px;
    z-index: 1;
    cursor: pointer;
`

export const BookImgDiv = styled.div`
    overflow: hidden;
    width: 100%;
    height: 310px;
    border-radius: 0px 10px 10px 10px;
    img{
        width: 100%;
        height: 310px;
        :hover {
            transform: scale(1.1);
            -webkit-transform: scale(1.1);
        }
        transition: all 0.3s ease-in-out;
        vertical-align: middle;
        border-style: none;
    }
    cursor: pointer;
`