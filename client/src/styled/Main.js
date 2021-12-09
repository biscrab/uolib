import styled from 'styled-components'

export const Body = styled.div`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    max-width: 1200px;
`

export const Title = styled.h2`

`

export const Border = styled.div`
    display: flex;
    flex-wrap: wrap;
`

//책
export const Book = styled.div`
    display: flex;
`

export const BookCover = styled.img`
    height: 190px;
    width: 130px;
    border-radius: 5px;
`

export const BookInfo = styled.div`
    padding: 0px 20px;
    width: 200px;
`

export const BookInfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #aaa;
    width: 100%;
`

export const BookTittle = styled.b`
    font-size: 23px;
`

export const BookAuthor = styled.span`
    color: dimgray;
    font-size: 12px;
    padding: 5px 0px;
`

export const BookTagDiv = styled.div`
    word-spacing: 5px;
`

export const Tag = styled.span`
    color: #5232dd;
    font-size: 15px;
`