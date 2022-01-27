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
    margin-top: 10px;
`

export const ButtonDiv = styled.div`
    display: flex;
    justify-content: end;
`

export const BodyInput = styled.div`
    width: 100%;
    margin-left: 50px;
`

export const BodyDiv = styled.div`
    display: flex;
    flex-direction: column;
    span{
        margin-bottom: 5px;
    }
`

export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    input, textarea{
        padding: 8px 10px;
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
    span{
        margin-bottom: 5px;
    }
`

export const TagDiv = styled.div`

`

export const TagList = styled.ul`
    margin-top: 70px;
    position: absolute;
    height: 200px;
    background-color: white;
    border: 1px solid #ddd;
    overflow-y: scroll;
    width: 720px;
    list-style: none;

    li{
        font-size: 14px;
        font-weight: bold;
        padding: 7px 12px;
        cursor: pointer;
        :hover{
            background-color: #5897fb;
            color: white;
        }
    }
`

export const ImgInputDiv = styled.div`
    span{
        margin-bottom: 5px;
    }
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`

export const SelectDiv = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`

export const Select = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;
    font-size: 5px;
    cursor: pointer;
    input{
        margin-right: 2.5px;
    }
    span{
        margin-bottom: 2.5px;
    }
`

export const SampleBookCover = styled.div`

`

export const SampleList = styled.div`

`

export const SampleImg = styled.div`
    display: flex;
`

export const BookCover = styled.img`
    width: 270px;
    height: 420px;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 0px rgb(0 0 0 / 30%);
`

export const CancleButton = styled.button`
    color: white;
    background-color: #727b84;
    height: 45px;
    border: 0;
    font-size: 17px;
    font-weight: bold;
    width: 80px;
    margin-right: 10px;
    border-radius: 3px;
`

export const RegistButton = styled.button`
    color: white;
    border: 0;
    background-color: royalblue;
    height: 45px;
    width: 200px;
    font-size: 17px;
    font-weight: bold;
    border-radius: 3px;
`