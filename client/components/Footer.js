//import Link from 'next/link'
import * as S from '../styled/Footer'
import { useRouter } from 'next/router'

const Footer = () => {
    const router = useRouter();
    const pathname = router.pathname;
    return(
        <>
        {!pathname.includes("viewer") && !pathname.includes("login") && !pathname.includes("signup")?
        <S.Footer>
            <S.FooterDiv>
                <S.PathDiv>
                    <a>이용약관</a>
                    <a>개인정보처리방침</a>
                </S.PathDiv>
                <S.CopyRight>
                주의! 본 사이트에 등록된 컨텐츠는 사이트 및 원 저작권자에 권리가 있는 컨텐츠이며, 무단 복제/전송/수정/배포는 법적 처벌을 받을 수 있습니다.
                Copyright © 유라이브 2021. All Rights Reserved.
                </S.CopyRight>
            </S.FooterDiv>
        </S.Footer>
        :
        <></>
        }
        </>
    )
}

export default Footer