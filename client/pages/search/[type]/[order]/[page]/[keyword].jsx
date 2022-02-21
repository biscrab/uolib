import { useEffect, useState } from 'react';
import * as S from '../../../../../styled/Search'
import Book from '../../../../../components/Book'
import { NextPage } from 'next';
import { useRouter } from 'next/router'
import axios from 'axios';
import Link from 'next/link';

const SearchPage = ({props}) => {
    //"type", "order", "page", "keyword"

    const router = useRouter();
    const {type, order, page, keyword} = router.query;

    useEffect(()=>{
        console.log(router)
    })

    const [word, setWord] = useState(keyword);

    const lists = [{title: "123", image: "https://image.novelpia.com/img/layout/readycover4.png", author: "", explane: "설명", tag: ["1"]}];

    const Check = () => {
        return(
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#5a35cd"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
        )
    }

    const [buy, setBuy] = useState();

    return(
        <>
        <S.Body>
            <S.Search placeholder="소설제목, 태그, 검색어, 작가를 입력해주세요." onChange={(e)=>setWord(e.target.value)} value={word} onKeyPress={(e)=>{
                if(e.key === "Enter" && word){
                    if(type){
                        router.push(`/search/${type}/date/1/${word}`)
                    }
                    else{
                        router.push(`/search/keyword/date/1/${word}`)
                    }
                }
            }}/>
            <S.ResultSpan>{`'${keyword}' 검색결과 입니다.`}</S.ResultSpan>
            <S.SelectDiv>
                <Link href={`/search/keyword/date/1/${keyword}`}>
                <S.Select selected={type === "keyword"}>소설검색</S.Select>
                </Link>
                <Link href={`/search/tag/date/1/${keyword}`}>
                <S.Select selected={type === "tag"}>해시태그</S.Select>
                </Link>
                <Link href={`/search/author/date/1/${keyword}`}>
                <S.Select selected={type === "author"}>작가검색</S.Select>
                </Link>
            </S.SelectDiv>
            <S.Result>
                <b>총 0개의 작품</b>
                <div>
                    <Link href={`/search/${type}/date/1/${keyword}`}>
                    <div>
                        {order === "date" || !order ?
                        <Check />
                        :
                        <i className="fas fa-circle"></i>
                        }
                        <b>공개일자 순</b>
                    </div>
                    </Link>
                    <Link href={`/search/${type}/view/1/${keyword}`}>
                    <div>
                        {order === "view" ?
                            <Check />
                            :
                            <i className="fas fa-circle"></i>
                        }
                        <b>조회순</b>
                    </div>
                    </Link>
                    <Link href={`/search/${type}/like/1/${keyword}`}>
                    <div>
                        {order === "like" ?
                            <Check />
                            :
                            <i className="fas fa-circle"></i>
                        }
                        <b>추천순</b>
                    </div>
                    </Link>
                </div>
            </S.Result>
            <S.List>
                {props.data[0] ?
                    <Book lists={props.data}/>
                :
                    <S.Null>등록된 작품이 없습니다.</S.Null>
                }
            </S.List>
        </S.Body>
        {buy?
            <S.BuyBackground>
                <S.BuyBorder>
                    
                </S.BuyBorder>
            </S.BuyBackground>
            :
            <></>
        }
        </>
    )
}

SearchPage.getInitialProps = async function(context){
    const {type, order, page, keyword} = context.query;
    const res = await axios.get(`https://uolib.herokuapp.com/search/${type}/${order}/${page}${keyword ? `/${keyword}` : ""}`)
    const data = await res.data;
    return {
        props : {data}
    }
}

export default SearchPage