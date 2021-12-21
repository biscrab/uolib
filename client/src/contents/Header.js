import * as S from '../styled/Header'
import logo from '../images/logo.png'
import { NavLink, useLocation } from 'react-router-dom'
import $ from 'jquery'
import { useEffect, useState } from 'react'

const Header = () => {

    const location = useLocation();

    const [onMenu, setOnMenu] = useState(false);

    useEffect(()=>{
        $("html").click(function(e){
            if(!$(".menu").has(e.target).length){
                if(onMenu){
                    $(".menumodal").animate({opacity: 0, height: 0}, 1000);
                    setTimeout(() => {setOnMenu(false)}, 1000)
                }
                else{
                    setOnMenu(true);
                    $(".menumodal").animate(from{opacity: 0, height: 0}, 1000);
                }
            }
        })
    })

    return(
        <S.Header>
            <S.HeaderDiv>
                <S.LogoDiv>
                <NavLink to="/">
                    <S.Logo src={logo}/>
                </NavLink>
                </S.LogoDiv>
                <S.PathDiv>
                    <NavLink to="/readers">
                        <S.Path path={location.pathname.includes("/readers")}>독자마당</S.Path>
                    </NavLink>
                    <NavLink to="/free">
                        <S.Path path={location.pathname.includes("/free")}>자유연재</S.Path>
                    </NavLink>
                    <NavLink to="/plus">
                        <S.Path path={location.pathname.includes("/plus")}>플러스</S.Path>
                    </NavLink>
                    <NavLink to="/top100">
                        <S.Path path={location.pathname.includes("/top100")}>TOP100</S.Path>
                    </NavLink>
                    <NavLink to="/mybook">
                        <S.Path path={location.pathname.includes("/mybook")}>내서재</S.Path>
                    </NavLink>
                </S.PathDiv>
                <S.MenuDiv>
                    <NavLink to="/alarm">
                    <img src="https://image.novelpia.com/img/new/menu/alarm.png"/>
                    </NavLink>
                    <NavLink to="/search">
                        <img src="https://image.novelpia.com/img/new/menu/search.png"/>
                    </NavLink>
                    <S.Menu className='menu'>
                        <img onClick={()=>setOnMenu(true)} src="https://image.novelpia.com/img/new/menu/list.png"/>
                        {onMenu ?
                        <S.MenuModal className='menumodal'>
                            <S.MenuLi>
                                <img src="https://phinf.pstatic.net/contact/20210430_217/1619765233604XypyT_PNG/avatar_profile.png"/>
                            </S.MenuLi>
                            <S.MenuLi>신규 소설등록</S.MenuLi>
                            <S.MenuLi>내 작품 관리</S.MenuLi>
                            <S.MenuLi>유저 정보 설정/수정</S.MenuLi>
                            <S.MenuLi>이모티콘 뽑기</S.MenuLi>
                        </S.MenuModal>
                        :
                        <></>
                        }
                    </S.Menu>
                </S.MenuDiv>
            </S.HeaderDiv>
        </S.Header>
    )
}

export default Header