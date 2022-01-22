import styled from 'styled-components'

export const Book = styled.li`
    border-bottom: 1px solid #eee;
    display: flex;
    padding: 10px 0px;
    padding-bottom: 15px;
`

export const BookInfo = styled.div`
    margin-left: 30px;
    display: flex;
    flex-direction: column;
`

export const ButtonDiv = styled.div`
    display: flex;
    align-items: end;
    button{
        border: 1px solid #ddd;
        padding: 5px 12px;
        color: #fff;
        width: 120px;
        font-size: 13px;
        cursor: pointer;
    }
`

export const Continue = styled.button`
    background-color: #856ede;
    margin-right: 5px;
`

export const Next = styled.button`
    background-color: #6143d1;
`

export const Author = styled.span`
    margin-top: 7px;
    font-size: 11px;
    color: #666;
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
    padding: 10px 0px;
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
    cursor: pointer;
    box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.2);
`

export const Title = styled.div`
    display: flex;
    align-items: center;
    b{
        font-size: 20px;
        cursor: pointer;
    }
    span{
        color: dimgray;
        font-size: 13px;
        margin-left: 5px;
        cursor: pointer;
    }
`