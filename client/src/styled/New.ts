import styled from 'styled-components'

export const Body = styled.div`
    margin: 50px 0px;
    padding: 30px;
    box-sizing: border-box;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    margin-top: 50px;
    position: relative;
    width: 1100px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    span{
        font-weight: 100;
        font-size: 13px;
        color: #333;
    }
`

export const BodyBorder = styled.div`
    display: flex;
`

export const ButtonDiv = styled.div`
    display: flex;
`

export const BodyInput = styled.div`
    width: 100%;
    margin-left: 50px;
`

export const BodyDiv = styled.div`
    display: flex;
    flex-direction: column;
`

export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    input, textarea{
        padding: 10px;
        outline: 0;
        background-color: #fafafa;
        border: 1px solid #ddd;
        :focus{
            border: 1px solid royalblue;
            background-color: white;
        }
    }
    textarea{
        height: 200px;
        resize: none;
    }
`

export const SelectDiv = styled.div`

`

export const SampleBookCover = styled.div`

`

export const SampleList = styled.div`

`

export const SampleImg = styled.div`
    display: flex;
`

export const BookCover = styled.img`
    width: 330px;
    height: 480px;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 0px rgb(0 0 0 / 30%);
`

export const CancleButton = styled.button`
    color: white;
    background-color: #727b84;
    height: 40px;
    border: 0;
    font-size: 17px;
    font-weight: bold;
    width: 80px;
    margin-right: 5px;
`

export const RegistButton = styled.button`
    color: white;
    border: 0;
    background-color: royalblue;
    height: 40px;
    width: 200px;
    font-size: 17px;
    font-weight: bold;
`