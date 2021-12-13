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
    margin-bottom: 50px;
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
`

export const Book = styled.li`

`

export const BookCover = styled.img`

`

export const Tittle = styled.b`

`