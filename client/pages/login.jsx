import * as S from '../styled/Account'
import { useEffect, useState } from 'react'
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

const LoginPage = () => {

    const router = useRouter();

    const [info, setInfo] = useState({email: "", password: ""});

    const clientId = "236232072754-81f153ainje620b38lonfi9u4r6qv3cc.apps.googleusercontent.com";

    const onSuccess = (res) => {
    	console.log(res.accessToken);
        localStorage.setItem("uolib_token = " + `{"token": "${res.accessToken}", "type": "google"}`);
        const { googleId, profileObj : { email, name } } = response;
        /*
        await onSocial({
            socialId : googleId,
            socialType : 'google',
            email,
            nickname : name
        });*/
    }

    const onFailure = (error) => {
        console.log(error);
    }

    const login = () => {
        if(!info.email || !info.password){
            alert("로그인 정보를 모두 입력해주세요.");
        }
        else{
            axios.post('/login', info)
                .then(res => {
                    localStorage.setItem("uolib_token", `{"token": "${res.data.token}", "type": "uolib"}`);
                    alert("로그인 완료");
                    router.push("/")
                })
                .catch(err => alert("잘못된 정보 입니다. " + err.status))
        }
    }

    return(
        <S.Background src="https://t1.daumcdn.net/cfile/tistory/99FEFF455E2112E632">
        <S.BackgroundFilter>
        <S.Body>
            <S.Tittle>로그인</S.Tittle>
            <S.Input placeholder="이메일" onChange={(e)=>setInfo({...info, email: e.target.value})} value={info.email}/>
            <S.Input placeholder="비밀번호" onChange={(e)=>setInfo({...info, password: e.target.value})} value={info.password} type="password"/>
            <S.LButton onClick={()=>login()}>로그인</S.LButton>
            <Link href="/signup">
            <S.SButton>회원가입</S.SButton>
            </Link>
            <S.GoogleLoginButton
                clientId={clientId}
                responseType={"id_token"}
                onSuccess={onSuccess}
                onFailure={onFailure}
                buttonText="구글계정으로 로그인"
            />
        </S.Body>
        </S.BackgroundFilter>
        </S.Background>
    )
}

export default LoginPage

/*            <GoogleLogin
            className='google'
            clientId={clientId}
            onSuccess={responseGoogle}
            //onFailure={responseGoogle}
            //cookiePolicy={'single_host_origin'}
            >
            <span>구글 로그인</span>
            </GoogleLogin> */