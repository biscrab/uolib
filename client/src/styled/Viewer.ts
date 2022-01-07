import styled from 'styled-components'

type DarkProps = {
    dark: boolean
}

export const Header = styled.div<DarkProps>`
    width: 100%;
    padding: 20px 0px;
    box-shadow: rgb(0 0 0 / 16%) 0px 1px 4px 0px;
    position: fixed;
    top: 0;
    z-index: 9999;
    background: ${props => props.dark ? "#35363a" : "white"};
    color: ${props => props.dark ? "white" : ""};
    span{
        cursor: pointer;
    }
`

export const HeaderDiv = styled.div`
    width: 1000px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const RightDiv = styled.div`
    display: flex;
`

export const Body = styled.div<DarkProps>`
    margin-top: 30px;
    margin-bottom: 100px;
    width: 1000px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    color: ${props => props.dark ? "white" : ""};
    flex-direction: column;
    user-select: none;
    img{
        width: 400px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }
    div{
        padding: 80px 0px;
    }
` 

export const AuthorsWords = styled.div<DarkProps>`
    background: ${props => props.dark ? "#35363a" : "#eee"};
`

export const NextButton = styled.button`
    margin-top: 30px;
    background-color: #eee;
    border: 0;
    padding: 10px 0px;
    font-size: 18px;
    border: 1px solid darkgray;
    border-radius: 3px;
`

export const Setting = styled.div`
    display: flex;
    flex-direction: column;
`

export const SettingModal = styled.div`
    padding: 5px 0px;
    margin-top: 30px;
    border-radius: 5px;
    position: absolute;
    background: white;
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.3);
`

export const SettingDiv = styled.div`
    padding: 5px 20px;
    display: flex;
    font-size: 15px;
    align-items: center;
    span{
        width: 80px;
        font-align: flex-end;
    }
`

interface ButtonProps{
    background? : string,
    font?: string,
    size?: string,
    weight?: string
}

export const SettingButton = styled.button<ButtonProps>`
    background-color: white;
    font-size: ${props => props.size};
    font-family: ${props => props.font};
    font-weight: ${props => props.weight};
    height: 25px;
    width: 25px;
    margin: 0px 3px;
    outline: 0;
    border: 1px solid #333;
    border-radius: 3px;
`

export const CommentInputDiv = styled.textarea`

`

export const CommentList = styled.ul`

`

export const Comment = styled.li`

`

export const Bottom = styled.div<DarkProps>`
    position: fixed;
    background: ${props => props.dark ? "#35363a" : "white"};
    color: ${props => props.dark ? "white" : ""};
    bottom: 0;
    width: 100%;
    padding: 20px 0px;
    box-shadow: rgb(0 0 0 / 16%) 0px 1px 4px 0px;
    div{
        width: 1000px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: space-between;
    }
    span{
        cursor: pointer;
    }
`

export const ListBody = styled.div<DarkProps>`

`

export const List = styled.ul`
    list-style: none;
`

export const Round = styled.li`

`

export const Background = styled.div`
    position: fixed;
    background: rgba(255, 255, 255, 0.8);
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const PlusModal = styled.div`
    background-color: white;
    padding: 10px;
    height: 300px;
    width: 350px;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    img{
        width: 100px;
    }
    button{
        width: 100%;
        padding: 8px;
        border: 0;
        border-radius: 20px;
        background-color: #5232dd;
        color: white;
    }
`