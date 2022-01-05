import * as S from '../styled/Account'
import logo from '../images/logo.png'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import GoogleLogin from 'react-google-login';

const LoginPage = () => {

    const clientId = "236232072754-81f153ainje620b38lonfi9u4r6qv3cc.apps.googleusercontent.com";

    const responseGoogle = async(response: any) => {
        const { googleId, profileObj : { email, name } } = response;
        console.log(response);
    }

    return(
        <S.Background src="https://t1.daumcdn.net/cfile/tistory/99FEFF455E2112E632">
        <S.BackgroundFilter>
        <S.Body>
            <S.Tittle>로그인</S.Tittle>
            <S.Input placeholder="이메일"/>
            <S.Input placeholder="비밀번호" type="password"/>
            <S.LButton>로그인</S.LButton>
            <NavLink to="/signup">
            <S.SButton>회원가입</S.SButton>
            </NavLink>
            <GoogleLogin
            className='google'
            clientId={clientId}
            onSuccess={responseGoogle}
            //onFailure={responseGoogle}
            //cookiePolicy={'single_host_origin'}
            >
            <span>구글 로그인</span>
            </GoogleLogin>
        </S.Body>
        </S.BackgroundFilter>
        </S.Background>
    )
}

export default LoginPage