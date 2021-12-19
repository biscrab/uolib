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
                    <NavLink to="/contest">
                        <b>공모전</b>
                    </NavLink>
                    <NavLink to="/free">
                        <b>자유연재</b>
                    </NavLink>
                    <NavLink to="/top100">
                        <b>TOP100</b>
                    </NavLink>
                    <NavLink to="/mybook">
                        <b>내서재</b>
                    </NavLink>
                </S.PathDiv>
                <S.MenuDiv>
                    <NavLink to="/alarm">
                    <img src="https://image.novelpia.com/img/new/menu/alarm.png"/>
                    </NavLink>
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