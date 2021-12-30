import styled from 'styled-components'

export const Banner = styled.div`
    height: 250px;
    background: #eee;
`

export const Body = styled.div`
    position: relative;
    margin-top: 80px;
    left: 50%;
    transform: translateX(-50%);
    width: 1200px;
`

export const Tittle = styled.h2`
    font-weight: bold;
    margin-bottom: 30px;
`

export const MemberShipDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`

export const MemberShip = styled.div`
    border: 2px solid #704bfa;
    width: 30%;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    div{
        display: flex;
    }
    input{
        margin-right: 10px;
    }
    button{
        border: 0;
        background: #704bfa;
        color: white;
    }
`

export const Guidance = styled.div`
    width: 100%;
    border: 1px solid #ddd;
    padding: 30px 50px;
    background: #f6f6f6;
    box-sizing: border-box;
    list-style: inside;
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
    padding: 30px;
    width: 400px;
    height: 500px;
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
`

export const PaymentHead = styled.div`
    display: flex;
    justify-content: space-between;
`

export const PriceDiv = styled.div`
    border: 2px solid #5a35cd;
    width: 100%;
    padding: 0px 10px;
`

export const MethodDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    div{
        border: 2px solid black;
    }
`