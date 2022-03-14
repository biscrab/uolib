import * as S from '../styled/Account'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SignUpPage = () => {

    const router = useRouter();

    const [info, setInfo] = useState({email: "", password: ""});
    const [check, setCheck] = useState({number: "", password: ""});
    const [edit, setEdit] = useState(true);
    const [time, setTime] = useState(0);

    useEffect(()=>{
        if(localStorage.getItem("uolib_email")){
            axios.post("/certification/check", {email: localStorage.getItem("uolib_emil")})
                .then(res => {
                    setTime(res.data)
                    setEdit(false);
                })
        }
    },[])

    useEffect(()=>{
        if(time){
            setInterval(()=>{
                setTime(time-1);
                if(time <= 0)
                    setEdit(true);
            },1000)
        }
    },[edit])
    
    const requestCertification = () => {
        const checkEmail = CheckEmail(info.email);

        if(checkEmail){
            axios.post("/certification/request", {email: info.email})
                .then(res => {
                    setTime(res.data)
                    setEdit(false);
                    localStorage.setItem("uolib_email", info.email)
                })
        }
        else{
            alert("잘못된 형식의 메일입니다.")
        }
    }

    const checkCertification = () => {
        if(edit){
            axios.post("/certification/request", {email: info.email, number: check.number})
                .then(res => {
                    axios.post("/user", info)
                        .then(res => {
                            alert("환영합니다.")
                        })
                })
        }
    }

    function CheckEmail(str: string){                                                 

        var reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    
        if(!reg_email.test(str)) {                            
            return false;         
        }                            
        else {                       
            return true;         
        }                            
    }   

    const signup = () => {
        axios.post('/signup')
            .then(res => {
                alert("환영합니다.");
                router.push("/");
            })
    }

    return(
        <S.Background src="https://i.ytimg.com/vi/_Zm5cUqE7hg/maxresdefault.jpg">
            <S.BackgroundFilter>
                <S.Body>
                    <S.Tittle>회원가입</S.Tittle>
                    <S.EmailDiv>
                    <S.Input placeholder='이메일' onChange={(e)=>{if(edit)setInfo({...info, email: e.target.value})}} value={info.email}/>
                    {time ?
                    <span>{Math.floor(time/60)}:{time%60}</span>
                    :
                    <button onClick={()=>requestCertification()}>인증</button>
                    }
                    </S.EmailDiv>
                    <S.EmailDiv>
                    <S.Input placeholder='인증번호' onChange={(e)=>setCheck({...check, number: e.target.value})} value={check.number}/>
                    <button onClick={()=>checkCertification()}>인증</button>
                    </S.EmailDiv>
                    <S.Input placeholder='비밀번호 (7~25)' type="password" onChange={(e)=>setInfo({...info, password: e.target.value})} value={info.password}/>
                    <S.Input placeholder='비밀번호 확인' type="password" onChange={(e)=>setCheck({...check, password: e.target.value})} value={check.password}/>
                    <S.LButton onClick={() => signup()}>회원가입</S.LButton>
                    <Link href="/login">
                        <S.SButton>로그인</S.SButton>
                    </Link>
                </S.Body>
            </S.BackgroundFilter>
        </S.Background>
    )
}

export default SignUpPage