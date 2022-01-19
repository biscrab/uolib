import Link from 'next/link'
import * as S from '../styled/Footer'

const Footer = () => {
    return(
        <S.Footer>
            <S.FooterDiv>
                <S.PathDiv>
                    <Link href="/terms_of_use">이용약관</Link>
                    <Link href="/privacy_policy">개인정보처리방침</Link>
                </S.PathDiv>
                <S.CopyRight>
                주의! 본 사이트에 등록된 컨텐츠는 사이트 및 원 저작권자에 권리가 있는 컨텐츠이며, 무단 복제/전송/수정/배포는 법적 처벌을 받을 수 있습니다.
                Copyright © 유라이브 2021. All Rights Reserved.
                </S.CopyRight>
            </S.FooterDiv>
        </S.Footer>
    )
}

export default Footer