import styled from 'styled-components'

export const Body = styled.div`
    margin-top: 50px;
    width: 1150px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
`

export const BookCover = styled.img`
    border-radius: 10px;
    height: 250px;
    width: 180px;
`

export const Info = styled.div`
    display: flex;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 30px;
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
    line-height: 1.5;
    color: #333;
    font-size: .875rem;
    font-size: 14px;
`

export const TagDiv = styled.div`
    display: flex;
    align-items: center;
    b{
        margin-right: 10px;
        color: #333;
    }
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
        cursor: pointer;
    }
`

export const TopInfo = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

export const BottomInfo = styled.div`
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
    font-size: 15px;
    padding-right: 5px;
`

export const Tittle = styled.h1`
    margin: 0;
    font-weight: bold;
    font-size: 28px;
`

export const AuthorDiv = styled.div`
    display: flex;
    align-items: end;
    margin-top: 5px;
    margin-bottom: 10px;
    font-weight: 600;
`

export const Author = styled.div`
    color: #999;
    font-size: 13px;
    height: 21px;
`

export const Name = styled.span`
    //color: royalblue;
    color: #555;
    margin-left: 5px;
    font-size: 15px;
    cursor: pointer;
    /*
    :hover{
        color: blue;
    }*/
`

export const ListTittle = styled.h1`
    width: 100%;
    margin-top: 30px;
    margin-bottom: 0;
    padding-bottom: 8px;
    font-size: 25px;
    color: #333;
    font-weight: bold;
    border-bottom: 3px solid black;
`

export const ListDiv = styled.div`
    width: 100%;
`

export const List = styled.div`
    width: 100%;
`

export const ListBorder = styled.ul`
    height: 1000px;
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
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
    background-color: #fbfbfb;
    border: 1px solid #e1e1e1;
    padding: 20px;
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
    margin: 15px;
    display: flex;
    justify-content: space-between;
    color: #333;
    border-bottom: 2px solid #555;
    h5{
        font-weight: bold;
    }
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
    font-size: 12px;
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