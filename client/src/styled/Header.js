import styled from 'styled-components'

export const Header = styled.header`
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #eee;
    position: fixed;
    top: 0;
    z-index: 999;
    background-color: white;
    display: flex;
    justify-content: center;
` 

export const HeaderDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 1240px;
`

export const LogoDiv = styled.div`
    width:200px;
`

export const Logo = styled.img`
    width: 130px;
`

export const PathDiv = styled.div`
    font-size: 18px;
    color: #333;
    display: flex;
    justify-content: space-around;
    width: 500px;
    b{
        cursor: pointer;
    }
`

export const MenuDiv = styled.div`
    display: flex;
    width: 200px;
    justify-content: space-around;

    img{
        height: 50px;
        cursor: pointer;
    }
`

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
`

export const MenuModal = styled.div`
    position: absolute;
`