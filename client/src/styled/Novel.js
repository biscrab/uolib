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
    font-size: 16px;

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
        height: 16px;
        width: 16px;
    }
`

export const Tittle = styled.h1`
    margin: 0;
    font-size: 32px;
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
    margin-top: 50px;
    margin-bottom: 30px;
    color: #333;
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

export const Round = styled.li`
    width: 100%;
    cursor: pointer;
    border-bottom: 1px solid #eee;
    :hover{
        background: #fafafa
    }
`

export const RoundDiv = styled.div`
    width: 100%;
    padding: 10px 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const RLeft = styled.div`
    display: flex;
    flex-direction: column;
`

export const RDate = styled.span`
    font-size: 13px;
    font-weight: bold;
`

export const RInfo = styled.div`
    color: darkgray;
    font-size: 11px;
`

export const RTittle = styled.b`
    font-size: 20px;
`

export const Support = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    margin-left: 50px;
`

export const SupportDiv = styled.div`
    background-color: #fbfbfb;
    border: 1px solid #e1e1e1;
    padding: 20px;
`

export const SupportButton = styled.button`
    background-color: #291c58;
    color: white;
    height: 50px;
    font-size: 18px;
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

export const Page = styled.button`
    background-color: ${props => props.bgcolor};
    color: ${props => props.color};
`

export const Notice = styled.li`
    background-color: #feffe5;
`