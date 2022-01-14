import styled from 'styled-components'

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
        margin-right: 10px;
    }
    img{
        width: 12px;
        height: 12px;
        margin-right: 5px;
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

export const BookCover = styled.img`
    border-radius: 10px;
    width: 100px;
    height: 150px;
`

export const Title = styled.div`
    display: flex;
    align-items: center;
    b{
        font-size: 20px;
    }
    span{
        color: dimgray;
        font-size: 13px;
        margin-left: 5px;
    }
`