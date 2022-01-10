import styled from 'styled-components'

export const Body = styled.div`
    margin-top: 50px;
    width: 1250px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
`

export const BookCover = styled.img`
    border-radius: 10px;
    height: 300px;
`

export const Info = styled.div`
    display: flex;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

export const Border = styled.div`
    display: flex;
`

export const InfoDiv = styled.div`
    padding-left: 40px;
    width: 100%;
    box-sizing: border-box;
`

export const Explane = styled.div`

`

export const TagDiv = styled.div`

`

export const Tag = styled.div`
    border-radius
`

export const TopInfo = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

export const BottomInfo = styled.div`
    min-height: 300px;
`

export const BottomInfoDiv = styled.div`
    display: flex;
    margin: 15px 0px;
    height: 35px;
`

export const InfoBorder = styled.div`
    background-color: #eee;
    padding: 15px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    font-weight: 600;
    text-indent: initial;
    border-spacing: 2px;
    font-size: 14px;

    span{
        margin-right: 15px;
    }

    span:last-child{
        margin: 0;
    }

    img{
        vertical-align: middle;
        border-style: none;
        margin-right: 5px;
        height: 14px;
        width: 14px;
        transform: translateY(10%);
    }
`
export const Day = styled.span`
    color: #5232dd;
    padding-right: 5px;
`

export const Tittle = styled.h1`
    margin: 0;
    font-weight: bold;
    font-size: 28px;
`

export const AuthorDiv = styled.div`
    font-size: 16px;
    display: flex;
    margin-top: 5px;
    margin-bottom: 15px;
`

export const Author = styled.div`
    color: dimgray;
`

export const Name = styled.span`
    color: royalblue;
    margin-left: 5px;
    cursor: pointer;

    :hover{
        color: blue;
    }
`

export const ListTittle = styled.h1`
    margin-top: 40px;
    margin-bottom: 10px;
    font-size: 25px;
    color: #333;
`

export const ListDiv = styled.div`
    width: 100%;
`

export const List = styled.div`
    width: 100%;
`

export const ListBorder = styled.ul`
    border-top: 2px solid #666;
    height: 1000px;
    margin: 0;
    padding: 0;
    list-style: none;
`

interface NoticeProps{
    notice: boolean
}

export const Round = styled.li<NoticeProps>`
    background-color: ${props => props.notice ? "#feffe5" : "white"}
    width: 100%;
    cursor: pointer;
    border-bottom: 1px solid #eee;
    /*:hover{
        background: #fafafa
    }*/
`

export const RoundDiv = styled.div`
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const RLeft = styled.div`
    display: flex;
    flex-direction: column;
`

export const TittleDiv = styled.div`
    display: flex;
    align-items: flex-end;
`

export const Price = styled.div`
    font-size: 11px;
    background: ${props => props.color};
    color: white;
    padding: 2px 5px;
    border-radius: 5px;
    text-shadow: 0.5px 0.5px black;
    margin-right: 5px;
`

export const RDate = styled.span`
    font-size: 13px;
    font-weight: bold;
`

export const RInfo = styled.div`
    margin-top: 5px;
    color: #888;
    font-size: 11px;
    i{
        margin-right: 3px;
    }
    span{
        margin-right: 5px;
    }
`

export const RTittle = styled.b`
    font-size: 18px;
`

export const AuthorBorder = styled.div`
    display: flex;
    flex-direction: column;
    width: 550px;
    margin-left: 50px;
`

export const Support = styled.div`
    display: flex;
    flex-direction: column;
`

export const OtherBookList = styled.ul`

`

export const OtherBook = styled.li`
    display: flex;
`

export const SupportDiv = styled.div`
    background-color: #fbfbfb;
    border: 1px solid #e1e1e1;
    padding: 20px;
`

export const SupportButton = styled.button`
    background-color: #291c58;
    color: white;
    height: 45px;
    font-size: 16px;
    font-weight: bold;
    width: 100%;
    border: 0;
    cursor: pointer;
`

export const SupporterList = styled.ul`
    margin: 0;
`

export const Surpporter = styled.li

export const PDiv = styled.div`
    display: flex;
    justify-content: center;
`

interface PageProps{
    bgcolor: string,
    color: string
}

export const Page = styled.button<PageProps>`
    background-color: ${props => props.bgcolor};
    color: ${props => props.color};
`

export const Notice = styled.li`
    background-color: #feffe5;
`

export const CommentList = styled.ul`
    height: 1000px;
`

export const CommentTittle = styled.h2`
    border-bottom: 2px solid black;
    padding-bottom: 15px;
    font-size: 22px;
`

export const Comment = styled.li`

`

export const Background = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
`

export const SupportModal = styled.div`
    background-color: white;
    width: 400px;
`

export const SupportModalHeader = styled.div`
    padding-bottom: 5px;
    margin: 20px 15px;
    display: flex;
    justify-content: space-between;
    color: #333;
    border-bottom: 2px solid #555;

    svg{
        cursor: pointer;
    }
`

export const SupportModalBody = styled.div`
    background-color: #eee;
    padding: 20px;
    display: flex;
    flex-direction: column;
    div{
        margin-top: 15px;
        display: flex;
        align-items: center;
    }
    span{
        font-size: 18px;
    }
    input{
        padding-left: 10px;
        outline: 0;
        margin-right: 10px;
        font-size: 15px;
    }
`

export const SupportModalWarning = styled.div`
    padding: 20px;
    font-size: 14px;
    color: crimson;
`

export const SupportModalButtonDiv = styled.div`
    display: flex;
    justify-content: end;
    padding: 20px;
    button{
        outline: 0;
        border: 0;
        background: royalblue;
        color: white;
        padding: 5px 10px;
        border-radius: 3px;
    }
`