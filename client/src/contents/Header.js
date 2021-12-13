import * as S from '../styled/Header'
import logo from '../images/logo.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return(
        <S.Header>
            <S.HeaderDiv>
                <S.LogoDiv>
                <NavLink to="/">
                    <S.Logo src={logo}/>
                </NavLink>
                </S.LogoDiv>
                <S.PathDiv>
                    <b>공모전</b>
                    <b>자유연재</b>
                    <b>TOP100</b>
                    <b>내서재</b>
                </S.PathDiv>
                <S.MenuDiv>
                    <img src="https://image.novelpia.com/img/new/menu/alarm.png"/>
                    <NavLink to="/search">
                        <img src="https://image.novelpia.com/img/new/menu/search.png"/>
                    </NavLink>
                    <img src="https://image.novelpia.com/img/new/menu/list.png"/>
                </S.MenuDiv>
            </S.HeaderDiv>
        </S.Header>
    )
}

export default Header