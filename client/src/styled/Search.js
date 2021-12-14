import styled from 'styled-components'

export const Body = styled.div`
    width: 1200px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
`

export const Search = styled.input`
    width: 100%;
    border: 0;
    outline: 0;
    border-bottom: 2px solid darkgray;
    height: 50px;
    padding: 0px 10px;
    box-sizing: border-box;
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 17px;
    font-weight: bold;
`

export const SearchTypeDiv = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
`

export const SearchType = styled.div`
    width: 33.3%;
    border: 1px solid #eee;
    border-bottom: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const ResultSpan = styled.div`
    margin: 20px 0px;
    font-weight: bold;
`

export const Result = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    color: #333;
    div{
        display: flex;
        b{
            margin-right: 15px;
            cursor: pointer;
        }
    }
`

export const List  = styled.ul`
    padding: 0;
    margin: 0;
    margin-top: 10px;
    border-top: 2px solid #333;
    height: 1000px;
    list-style: none;
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
    img{
        width: 15px;
        height: 15px;
    }
`

export const BookCover = styled.img`
    border-radius: 10px;
    width: 100px;
    height: 150px;
`

export const Tittle = styled.b`

`