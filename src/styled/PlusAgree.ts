import styled from "styled-components";

export const Body = styled.div`
    margin-top: 50px;
    width: 1200px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
`

export const BookDiv = styled.div`
    border-top: 2px solid black;
`

export const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    margin: 100px 0px;
    button{
        padding: 10px 50px;
        border-radius: 3px;
        border: 0;
        font-size: 25px;
        background-color: #5232dd;
        color: white;
    }
`

export const StandardDiv = styled.div`
    margin-top: 50px;
    width: 700px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    div{
        width: 150px;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border: 7px solid #E8E8E8;
        border-radius: 26px;
        background-color: #FAF9F8;
    }
    h1{
        color: #CF2523;
        font-size: 60px;
        font-weight: bold;
    }
    span{
        margin: 0px;
        white-space: nowrap;
        background-color: #eee;
        color: #333;
        padding: 5px 20px;
        border-radius: 16px;
        font-size: 14px;
    }
`

