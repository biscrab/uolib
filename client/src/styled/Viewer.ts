import styled from 'styled-components'

export const Header = styled.div`
    width: 100%;
    padding: 20px 0px;
    box-shadow: rgb(0 0 0 / 16%) 0px 1px 4px 0px;
    position: fixed;
    top: 0;
    z-index: 9999;
    background: white;
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
    align-items: center;
`

export const Body = styled.div`
    margin-top: 50px;
    width: 1000px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
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

export const Bottom = styled.div`
    position: fixed;
    background: white;
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
`