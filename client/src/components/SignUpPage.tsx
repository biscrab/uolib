import { NavLink } from 'react-router-dom'
import * as S from '../styled/Account'

const SignUpPage = () => {
    return(
        <S.Background src="https://i.ytimg.com/vi/_Zm5cUqE7hg/maxresdefault.jpg">
            <S.BackgroundFilter>
                <S.Body>
                    <S.Tittle>회원가입</S.Tittle>
                    <S.EmailDiv>
                    <S.Input placeholder='이메일'/>
                    <button>인증</button>
                    </S.EmailDiv>
                    <S.EmailDiv>
                    <S.Input placeholder='인증번호'/>
                    <button>인증</button>
                    </S.EmailDiv>
                    <S.Input placeholder='비밀번호 (7~25)' type="password"/>
                    <S.Input placeholder='비밀번호 확인' type="password"/>
                    <S.LButton>회원가입</S.LButton>
                    <NavLink to="/login">
                        <S.SButton>로그인</S.SButton>
                    </NavLink>
                </S.Body>
            </S.BackgroundFilter>
        </S.Background>
    )
}

export default SignUpPage