import styled from 'styled-components'

export const Header = styled.header`
    width: 100%;
    min-height: 70px;
    position: fixed;
    top: 0;
    z-index: 999;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1240px){
       flex-direction: column;
    }
    border-bottom: 1px solid #eee;
` 

export const HeaderDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 1240px;
    @media screen and (max-width: 1240px){
        width: 100%;
        padding: 5px 20px;
    }
`

export const LogoDiv = styled.div`
    width: 150px;
`

export const Logo = styled.img`
    width: 130px;
    cursor: pointer;
`

export const MobilePathDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 10px 0px;
`

export const PathDiv = styled.div`
    color: #333;
    display: flex;
    justify-content: space-around;
    width: 400px;
    @media screen and (max-width: 400px){
        width: 100%;
    }
`

export const IsAlarm = styled.em`
    background-color: #7632ff;
    width: 9 px;
    height: 9px;
    border-radius: 9px;
    position: absolute;
    margin-top: 13px;
    margin-left: 86px;
`

export const Path = styled.b<{path: boolean}>`
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    color: ${props => props.path ? "#5a35cd" : ""};
`

export const MenuDiv = styled.div`
    display: flex;
    width: 150px;
    justify-content: space-between;

    img{
        width: 45px;
        cursor: pointer;
    }
`

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

export const MenuModal = styled.ul`
    position: absolute;
    background-color: white;
    border: 1px solid #aaa;
    list-style: none;
    z-index: 999;
    width: 250px;
    margin-top: 60px;
    padding: 0px 0px;
    max-height: 350px;
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.2);
    overflow-y: auto;
    ::-webkit-scrollbar {
        width: 6px;
        position: absolute;
    }

    ::-webkit-scrollbar-track {
      background: #eee;
    }

    ::-webkit-scrollbar-thumb {
      background: #ddd;
      border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #bbb;
    }
`

export const MenuWrap = styled.div`
    border-bottom: 1px solid #f1f1f1;
`

export const MenuLi = styled.li`
    width: 100%;
    padding: 8px 15px;
    box-sizing: border-box;
    font-size: 14px;
    color: #333;
    display: flex;
    align-items: center;
    cursor: pointer;
    :hover{
        background-color: #fafafa;
    }
    img{
        vertical-align: middle;
        border-radius: 50%;
        height: 40px;
        width: 40px;
    }
    b{
        margin-left: 10px;
    }
    button{
        height: 22px;
        padding: 0px 12px;
        border-radius: 12.5px;
        border: 1px solid #aaa;
        color: #222;
        background-color: white;
        font-size: 13px;
        margin-left: 10px;
    }
    i{
        margin-right: 5px;
    }
`

export const Logout = styled.div`
    padding: 10px;
    background-color: #eee;
    display: flex;
    justify-content: end;
    button{
        height: 25px;
        padding: 0px 15px;
        border-radius: 12.5px;
        border: 1px solid #aaa;
        color: #222;
        background-color: white;
        font-size: 13px;
    }
    i{
        margin-right: 3px;
    }
`