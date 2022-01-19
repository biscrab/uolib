import styled from 'styled-components'

export const ShopDiv = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: center;
    background-color: #704bfa;
    color: white;
    padding: 10px 0px;
    font-size: 18px;
    div{
        width: 500px;
        display: flex;
        justify-content: space-between;
    }
    span{
        cursor: pointer;
    }
`

export const Banner = styled.div`
    background-color: #C0C0BD;
    box-sizing: border-box;
    display: block;
    justify-content: center;
    width: 100%;
    img{
        width: 100%;
        margin: auto;
        max-width: 3000px;
    }
`

export const Body = styled.div`
    position: relative;
    margin-top: 80px;
    left: 50%;
    transform: translateX(-50%);
    width: 1150px;
`

export const Tittle = styled.h3`
    font-weight: bold;
    font-size: 28px;
    margin-bottom: 30px;
`

export const MemberShipDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 100px;
`

export const MemberShip = styled.div`
    border: 3px solid #704bfa;
    width: 30%;
    height: 260px;
    display: flex;
    box-sizing: border-box;
    padding: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    h4{
        font-weight: bold;
    }
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        font-size: 15px;
        color: #333;
        cursor: pointer;
    }
    input{
        margin-right: 5px;
    }
    button{
        border: 0;
        background: #704bfa;
        color: white;
        width: 100%;
        padding: 5px 0px;
        font-size: 18px;
        border-radius: 3px;
    }
`

export const MemeberShipExplane = styled.span`
    color: #666;
    font-size: 14px;
    text-align: center;
    padding: 0px 30px;
`

export const GuidanceTitle = styled.h3`
    margin-bottom: 20px;
    font-weight: bold;
`

export const Guidance = styled.div`
    width: 100%;
    margin-bottom: 100px;
    border: 1px solid #ddd;
    padding: 30px 50px;
    background: #f8f8f8;
    box-sizing: border-box;
    list-style: inside;
    h4{
        margin-bottom: 20px;
        font-weight: bold;
        color: #333;
    }
    li{
        font-size: 14px;
        padding: 3px 0px;
        color: #666;
    }
`

export const Background = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    z-index: 9999;
`

export const Payment = styled.div`
    background-color: white;
    padding: 20px;
    width: 500px;
    height: 400px;
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
`

export const PaymentHead = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #333;
    svg{
        cursor: pointer;
    }
    h3{
        font-weight: bold;
        font-size: 25px;
        color: #333;
    }
`

export const PriceDiv = styled.div`
    border: 1px solid #f1f1f1;
    background: #f9f9f9;
    width: 100%;
    padding: 15px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
`

export const MethodDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    div{
        cursor: pointer;
        width: 33.3%;
        height: 80px;
        border: 1px solid #ddd;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: bold;
    }

    span{
        margin-top: 5px;
    }
`

export const CoinDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 100px;
`

export const Coin = styled.div`
    border: 2px solid #333;
    width: 49%;
    margin-bottom: 20px;
    height: 100px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    font-size: 15px;
    img{
        margin-right: 10px;
    }
`

export const NewEmoticon = styled.div`
    margin-bottom: 50px;
`

export const EmoticonDiv = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 20px;

`

export const Emoticon = styled.div`
    width: 170px;
    text-align: center;
    margin-bottom: 20px;
    span{
       width: 100%;
       font-weight: bold;
       text-align: center;
    }
    div{
        border-radius: 10px;
        width: 170px;
        height: 170px;
        background-color: white;
        box-shadow: 0 2px 10px 0 rgb(0 0 0 / 6%);
        padding: 20px;
        margin-bottom: 10px;
        img{
            height: 130px;
            width: 130px;
        }
    }
`

export const BestEmoticonDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 650px;
    margin-bottom: 70px;
    width: 100%;
    div{
        height: 130px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        width: 48%;
        padding: 5px 0px;
        border-bottom: 1px solid #ddd;
        margin-right: 4%;
    }
    span{
        font-weight: bold;
        color: #333;
        font-size: 22px;
    }
    img{
        width: 100px;
        height: 100px;
        margin-right: 20px;
    }
    h3{
        color: #de4f4f;
        width: 80px;
        text-align: center;
        font-weight: bold;
        margin: 0;
        font-size: 30px;
    }
`

export const EmoticonList = styled.ul`
    list-style: none;
    border-top: 1px solid black;
    li{
        border-bottom: 1px solid #eee;
    }
`