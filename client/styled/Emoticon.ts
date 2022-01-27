import styled from 'styled-components'

export const Header = styled.div`
    width: 100%;
    background-color: white;
    border-bottom: 1px solid #ddd;
    display: flex;
    align-items: center;
    height: 280px;
    img{
        height: 180px;
        width: 180px;
    }
    h2{
        font-weight: bold;
    }
`

export const HeaderDiv = styled.div`
    margin: auto;
    min-width: 1000px;
    max-width: 1200px;
    height: 180px;
    display: flex;
`

export const HeaderInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 30px;
`

export const Coin = styled.p`
    background: url(https://novelpia.com/img/new/openstore/v2/icon_coin.png) no-repeat 10px center #f1eeff;
    border: 1px solid #dae0f1;
    background-size: 22px;
    width: 90px;
    height: 32px;
    line-height: 32px;
    border-radius: 20px;
    color: #000;
    text-align: center;
    padding-left: 20px;
    font-weight: bold;
    font-size: 14px;
`

export const ButtonDiv = styled.div`
    display: flex;
    button{
        display: inline-block;
        width: 160px;
        height: 45px;
        line-height: 45px;
        text-align: center;
        margin-right: 5px;
        color: #fff;
        font-size: 16px;
        background-color: #704bfa;
        border: 0;
    }
`

export const Body = styled.div`
    background-color: #efefef;
    width: 100%;
    display: flex;
    justify-content: center;
`

export const Border = styled.div`
    background-color: white;
    border: 1px solid #ddd;
    width: 1200px;
    height: 700px;
    margin: 30px 0px;
    display: flex;
    flex-wrap: wrap;
    padding: 40px 45px;
    border-radius: 3px;

    img{
        margin: 30px 35px;
        width: 150px;
        height: 150px;
    }
`
