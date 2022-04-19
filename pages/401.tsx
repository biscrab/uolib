import { useRouter } from 'next/router'
import { useEffect } from 'react'
import * as S from '../styled/Error'

const ErrorPage = () => {
    
    const router = useRouter();

    useEffect(()=>{
        router.push("/");
    },[])

    return(
        <S.Body>
            <h1>Error 401 - 로그인을 먼저 해주세요.</h1>
        </S.Body>
    )
}

export default ErrorPage