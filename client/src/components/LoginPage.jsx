import * as S from '../styled/Login'
import logo from '../images/logo.png'

const LoginPage = () => {
    return(
        <S.Body>
            <S.Logo src={logo}/>
            <S.Input />
            <S.Input />
            <S.LButton>로그인</S.LButton>
            <S.SButton>회원가입</S.SButton>
        </S.Body>
    )
}

export default LoginPage