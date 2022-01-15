import * as S from '../styled/PlusAgree'
import Book from '../contents/Book'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { NextPage } from 'next';

const PlusAgreePage: NextPage<{}> = () => {

    const params = useParams();

    const book = [{title: "123", image: "https://image.novelpia.com/img/layout/readycover4.png", author: "", explane: "설명", tag:["1"]}];

    const requestPlus = () => {
        axios.post(`/requestPlus/${params.id}`)
            .then(res => alert("플러스 신청이 완료되었습니다."))
    }

    useEffect(()=>{
        axios.get(`/requestPlus/${params.id}`)
    },[])

    return(
        <S.Body>
            <h5>플러스 전환 신청</h5>
            <S.BookDiv>
                <Book lists={book}/>
            </S.BookDiv>
            <S.StandardDiv>
                <div>
                    <h1>0</h1>
                    <span>연재회차 수</span>
                </div>
                <div>
                    <h1>0</h1>
                    <span>3000자 여부</span>
                </div>
                <div>
                    <h1>0</h1>
                    <span>정산정보 등록</span>
                </div>
            </S.StandardDiv>
            <S.ButtonDiv>
                <button onClick={()=>requestPlus()}>플러스 신청</button>
            </S.ButtonDiv>
        </S.Body>
    )
}

export default PlusAgreePage