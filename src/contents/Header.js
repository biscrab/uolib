import * as S from '../styled/Header'
import logo from '../images/logo.png'
import { NavLink, useLocation } from 'react-router-dom'
import $ from 'jquery'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

const Header = (prop) => {

    const isMobile = useMediaQuery({ maxWidth: 1240 })

    const location = useLocation();

    const [onMenu, setOnMenu] = useState(false);

    const [isAlarm, setIsAlarm] = useState(false);

    const logout = () => {

    }

    useEffect(()=>{
        console.log(location);
    },[])

    useEffect(()=>{
        $("html").click(function(e){
            if(!$(".menu").has(e.target).length){
                $(".menumodal").animate({opacity: 0, height: 0}, 1000);
                setTimeout(() => {setOnMenu(false)}, 1000)
            }
        })

        $(".menuicon").click(function(e){
            if(!onMenu){
                setOnMenu(true);
            }
            else{
                setOnMenu(false);
            }
        })
    })

    const Path = () => {
        return(
            <S.PathDiv>
                <NavLink to="/free">
                    <S.Path path={location.pathname.includes("/free")}>자유연재</S.Path>
                </NavLink>
                <NavLink to="/plus">
                    <S.Path path={location.pathname.includes("/plus") && location.pathname !== "/plus_shop" && location.pathname !== "/plus_agree"}>플러스</S.Path>
                </NavLink>
                <NavLink to="/top100">
                    <S.Path path={location.pathname.includes("/top100")}>TOP100</S.Path>
                </NavLink>
                <NavLink to="/readers/comunity/1">
                    <S.Path path={location.pathname.includes("/readers")}>독자마당</S.Path>
                </NavLink>
                <NavLink to="/mybook">
                    <S.Path path={location.pathname.includes("/mybook")}>내서재</S.Path>
                </NavLink>
            </S.PathDiv>
        )
    }

    return(
        <S.Header>
            <S.HeaderDiv>
                <S.LogoDiv>
                    <NavLink to="/">
                        <S.Logo src={logo}/>
                    </NavLink>
                </S.LogoDiv>
                {!isMobile ?
                <Path />
                :
                <></>
                }
                <S.MenuDiv>
                    <NavLink to="/plus_shop">
                    <img src="https://image.novelpia.com/img/new/menu/point.png?ver=3" />
                    </NavLink>
                    <NavLink to="/alarm">
                    <img src="https://image.novelpia.com/img/new/menu/alarm.png"/>
                    </NavLink>
                    {isAlarm ?
                        <S.IsAlarm />
                        :
                        <></>
                    }
                    <NavLink to="/search">
                        <img src="https://image.novelpia.com/img/new/menu/search.png"/>
                    </NavLink>
                    <S.Menu className='menu'>
                        <img className='menuicon' src="https://image.novelpia.com/img/new/menu/list.png"/>
                        {onMenu ?
                        <>
                        <S.MenuModal className='menumodal'>
                            {0 ?
                            <>
                            <S.MenuWrap>
                                <S.MenuLi>
                                    <img src="https://phinf.pstatic.net/contact/20210430_217/1619765233604XypyT_PNG/avatar_profile.png"/>
                                    <NavLink to={`/user/${1}`}>
                                        <b>이름</b>
                                    </NavLink>
                                </S.MenuLi>
                            </S.MenuWrap>
                            <S.MenuWrap>
                                <S.MenuLi>
                                <i class="fas fa-coins"></i>코인 0
                                    <NavLink to="/coin_shop">
                                        <button>충전</button>
                                    </NavLink>
                                </S.MenuLi>
                            </S.MenuWrap>
                            <S.MenuWrap>
                                <NavLink to="/new">
                                    <S.MenuLi><i class="far fa-edit"></i>신규 소설등록</S.MenuLi>
                                </NavLink>
                                <NavLink to="/mybook">
                                    <S.MenuLi><i class="far fa-folder-open"></i>내 작품 관리</S.MenuLi>
                                </NavLink>
                            </S.MenuWrap>
                            <S.MenuWrap>
                                <NavLink to="/useredit">
                                    <S.MenuLi><i class="far fa-user-circle"></i>유저 정보 설정/수정</S.MenuLi>
                                </NavLink>
                            </S.MenuWrap>
                            <S.MenuWrap>
                                <NavLink to="/plus_shop">
                                    <S.MenuLi><i class="far fa-plus-square"></i>플러스 샵</S.MenuLi>
                                </NavLink>
                                <NavLink to="/coin_shop">
                                    <S.MenuLi><i class="fas fa-coins"></i>코인 샵</S.MenuLi>
                                </NavLink>
                                <NavLink to="/emoticon_shop">
                                    <S.MenuLi><i class="far fa-smile-wink"></i>이모티콘 샵</S.MenuLi>
                                </NavLink>
                            </S.MenuWrap>
                            <S.MenuWrap>
                                <NavLink to="/readers">
                                    <S.MenuLi><i class="fas fa-bullhorn"></i>공지사항</S.MenuLi>
                                </NavLink>
                            </S.MenuWrap>
                            <S.Logout>
                                <button><i class="fas fa-sign-out-alt"></i>로그아웃</button>
                            </S.Logout>
                            </>
                            :
                            <S.MenuWrap>
                                <S.MenuLi><i class="fas fa-bullhorn"></i>로그인</S.MenuLi>
                                <S.MenuLi><i class="fas fa-bullhorn"></i>회원가입</S.MenuLi>
                            </S.MenuWrap>
                            }
                        </S.MenuModal>
                        </>
                        :
                        <></>
                        }
                    </S.Menu>
                </S.MenuDiv>
            </S.HeaderDiv>
            {isMobile ?
                <S.MobilePathDiv>
                    <Path />
                </S.MobilePathDiv>
                :
                <></>
                }
        </S.Header>
    )
}

export default Header