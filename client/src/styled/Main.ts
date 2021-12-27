import styled from 'styled-components'

export const Body = styled.div`
    position: relative;
    margin-top: 80px;
    left: 50%;
    transform: translateX(-50%);
    max-width: 1200px;
`

export const Banner = styled.div`
    height: 550px;
    width: 100%;
    background-color: ${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Title = styled.h2`
    margin-bottom: 30px;
`

export const Border = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 80px;
`

//책
export const Book = styled.div`
    display: flex;
    margin-bottom: 50px;
`

export const BookCover = styled.img`
    height: 200px;
    width: 140px;
    border-radius: 5px;
`

export const BookInfo = styled.div`
    padding-left: 15px;
    padding-right: 20px;
    width: 220px;
`

export const BookInfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-bottom: 1px solid rgba(0,0,0,0.1);
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
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    line-height: 1.3;
    height: 5em;
    text-align: left;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
`

export const Tag = styled.span`
    color: #5232dd;
    font-size: 12px;
    white-space: nowrap;
    cursor: pointer;
`