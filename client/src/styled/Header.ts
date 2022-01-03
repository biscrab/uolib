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
    @media screen and (max-width: 1240px){
        width: 100%;
        padding: 0px 20px;
    }
`

export const LogoDiv = styled.div`
    width:200px;
`

export const Logo = styled.img`
    width: 160px;
    padding-right: 30px;
`

export const PathDiv = styled.div`
    color: #333;
    display: flex;
    justify-content: space-around;
    width: 500px;
`

export const Path = styled.b<{path: boolean}>`
    font-size: 18px;
    cursor: pointer;
    color: ${props => props.path ? "#5a35cd" : ""};
`

export const MenuDiv = styled.div`
    display: flex;
    width: 200px;
    justify-content: space-between;

    img{
        height: 50px;
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
    border: 1px solid #333;
    list-style: none;
    z-index: 999;
    width: 250px;
    margin-top: 60px;
    padding: 10px 0px;
    height: 350px;
    overflow-y: auto;
`

export const MenuLi = styled.li`
    width: 100%;
    padding: 5px 15px;
    box-sizing: border-box;
    font-size: 14px;
    color: #333;
    display: flex;
    align-items: center;
    cursor: pointer;
    img{
        vertical-align: middle;
        border-radius: 50%;
        height: 40px;
        width: 40px;
    }
    animation-duration: 1s;
    animation-name: slide;

    @keyframes slide{
        from{
            opacity: 0;
        }to{
            opacity: 1;
        }
    }
`