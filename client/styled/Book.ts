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
    padding-top: 10px;
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
    margin-right: 5px;
`

export const Write = styled.button`
    background-color: black;
`

export const Author = styled.span`
    font-size: 13px;
    line-height: 16px;
    color: dimgray;
    margin-left: 10px;
    font-weight: bold;
    cursor: pointer;
`

export const Explane = styled.span`
    color: dimgray;
    height: 100%;
    width: 100%;
    font-size: 13px;
    margin-top: 5px;
    min-height: 50px;
`

export const Info = styled.div`
    display: flex;
    align-items: center;
    font-size: 15px;
    width: 100%;
    padding-top: 10px;
    span{
        margin-right: 10px;
        font-weight: bold;
        line-height: 15px;
    }
    img{
        width: 12px;
        height: 12px;
        margin-top: 2px;
        margin-right: 5px;
    }
`

export const TagDiv = styled.div`
    padding-top: 10px;
    display: flex;
    span{
        color: #5032df;
        border: 2px solid #5032df;
        border-radius: 20px;
        padding: 2px 10px;
        line-height: 20px;
        user-select: none;
        font-size: 14px;
        font-weight: 600;
        margin-right: 5px;
        cursor: pointer;
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
    align-items: end;
    margin-top: 10px;
    b{
        font-size: 22px;
        line-height: 22px;
        letter-spacing: -2px;
        cursor: pointer;
    }
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