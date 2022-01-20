import * as S from '../styled/Header'
import logo from '../images/logo.png'
import Link from 'next/link'
//import $ from 'jquery'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useRouter } from 'next/router'

const Header = (prop) => {

    //const isMobile = useMediaQuery('( maxWidth: 1240 )')
    const isMobile = 0;
    const [onMenu, setOnMenu] = useState(false);

    const [isAlarm, setIsAlarm] = useState(false);

    const rotuer = useRouter();
    const pathname = rotuer.pathname

    const logout = () => {

    }

    useEffect(()=>{
        console.log(logo);
    },[])

    useEffect(()=>{
        /*
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
        })*/
    })

    const Path = () => {
        return(
            <S.PathDiv>
                <Link href="/free">
                    <S.Path path={pathname.includes("/free")}>자유연재</S.Path>
                </Link>
                <Link href="/plus">
                    <S.Path path={pathname.includes("/plus") && 1 !== "/plus_shop" && 1 !== "/plus_agree"}>플러스</S.Path>
                </Link>
                <Link href="/top100">
                    <S.Path path={pathname.includes("/top100")}>TOP100</S.Path>
                </Link>
                <Link href="/readers/comunity/all/1">
                    <S.Path path={pathname.includes("/readers")}>독자마당</S.Path>
                </Link>
                <Link href="/mybook">
                    <S.Path path={pathname.includes("/mybook")}>내서재</S.Path>
                </Link>
            </S.PathDiv>
        )
    }

    return(
        <S.Header>
            <S.HeaderDiv>
                <S.LogoDiv>
                    <Link href="/">
                        <S.Logo src={logo.src}/>
                    </Link>
                </S.LogoDiv>
                {!isMobile ?
                <Path />
                :
                <></>
                }
                <S.MenuDiv>
                    <Link href="/shop/plus">
                    <img src="https://image.novelpia.com/img/new/menu/point.png?ver=3" />
                    </Link>
                    <Link href="/alarm">
                    <img src="https://image.novelpia.com/img/new/menu/alarm.png"/>
                    </Link>
                    {isAlarm ?
                        <S.IsAlarm />
                        :
                        <></>
                    }
                    <Link href="/search">
                        <img src="https://image.novelpia.com/img/new/menu/search.png"/>
                    </Link>
                    <S.Menu classNameName='menu'>
                        <img classNameName='menuicon' src="https://image.novelpia.com/img/new/menu/list.png"/>
                        {onMenu ?
                        <>
                        <S.MenuModal classNameName='menumodal'>
                            {0 ?
                            <>
                            <S.MenuWrap>
                                <S.MenuLi>
                                    <img src="https://phinf.pstatic.net/contact/20210430_217/1619765233604XypyT_PNG/avatar_profile.png"/>
                                    <Link href={`/user/${1}`}>
                                        <b>이름</b>
                                    </Link>
                                </S.MenuLi>
                            </S.MenuWrap>
                            <S.MenuWrap>
                                <S.MenuLi>
                                <i className="fas fa-coins"></i>코인 0
                                    <Link href="/coin_shop">
                                        <button>충전</button>
                                    </Link>
                                </S.MenuLi>
                            </S.MenuWrap>
                            <S.MenuWrap>
                                <Link href="/new">
                                    <S.MenuLi><i className="far fa-edit"></i>신규 소설등록</S.MenuLi>
                                </Link>
                                <Link href="/mybook">
                                    <S.MenuLi><i className="far fa-folder-open"></i>내 작품 관리</S.MenuLi>
                                </Link>
                            </S.MenuWrap>
                            <S.MenuWrap>
                                <Link href="/useredit">
                                    <S.MenuLi><i className="far fa-user-circle"></i>유저 정보 설정/수정</S.MenuLi>
                                </Link>
                            </S.MenuWrap>
                            <S.MenuWrap>
                                <Link href="/shop/plus">
                                    <S.MenuLi><i className="far fa-plus-square"></i>플러스 샵</S.MenuLi>
                                </Link>
                                <Link href="/coin_shop">
                                    <S.MenuLi><i className="fas fa-coins"></i>코인 샵</S.MenuLi>
                                </Link>
                                <Link href="/emoticon_shop">
                                    <S.MenuLi><i className="far fa-smile-wink"></i>이모티콘 샵</S.MenuLi>
                                </Link>
                            </S.MenuWrap>
                            <S.MenuWrap>
                                <Link href="/readers">
                                    <S.MenuLi><i className="fas fa-bullhorn"></i>공지사항</S.MenuLi>
                                </Link>
                            </S.MenuWrap>
                            <S.Logout>
                                <button><i className="fas fa-sign-out-alt"></i>로그아웃</button>
                            </S.Logout>
                            </>
                            :
                            <S.MenuWrap>
                                <S.MenuLi><i className="fas fa-bullhorn"></i>로그인</S.MenuLi>
                                <S.MenuLi><i className="fas fa-bullhorn"></i>회원가입</S.MenuLi>
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