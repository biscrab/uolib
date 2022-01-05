import styled from 'styled-components'

type BackgroundProps = {
    src: string
}

export const Background = styled.div<BackgroundProps>`
    background: url(${props => props.src});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #363b3e;
    background-blend-mode: multiply;
    position: absolute;
    width: 100%;
    height: 100%;
`

export const BackgroundFilter = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
`

export const Body = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 5px;
    margin-top: 100px;
    @media screen and (max-width: 400px) {
        width: 100%;
    }
    a{
        width: 100%;
    }
    button{
        width: 100%;
        border: 0;
        height: 40px;
        border-radius: 2px;
        font-weight: bold;
        text-align: center;
    }

    .google{
        margin-top: 15px;
        div{
            height: 40px;
            position: absolute;
        }
        span{
            padding-left: 10px;
            font-weight: bold;
            width: 100%;
            font-size: 14px;
        }
    }
`

export const Tittle = styled.h2`
    color: white;
    margin: 30px 0px;
    font-weight: bold;
`

export const Border = styled.div`

`

export const Input = styled.input`
    width: 100%;
    background: 0;
    height: 40px;
    padding: 0px 10px;
    margin-top: 20px;
    outline: 0;
    border: 0;
    color: white;
    letter-spacing: 1px;
    ::placeholder{
        color: dimgray;
    }
    border-bottom: 2px solid gray;
    :focus{
        border-bottom: 2px solid royalblue;
    }
`

export const EmailDiv = styled.div`
    display: flex;
    margin-top: 20px;
    width: 100%;
    align-items: end;
    input{
        margin: 0;
    }
    button{
        background: #704bfa;
        border-radius: 2px;
        border: 0;
        color: white;
        width: 80px;
        height: 28px;
        margin-left: 5px;
        font-size: 15px;
    }
`

export const LButton = styled.button`
    margin-top: 60px;
    color: white;
    background-color: #5a35cd;
`

export const SButton = styled.button`
    margin-top: 15px;
    color: white;
    background: royalblue;
`