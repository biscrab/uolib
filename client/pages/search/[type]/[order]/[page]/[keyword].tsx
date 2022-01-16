import { useEffect, useState } from 'react';
import * as S from '../../../../../styled/Search'
import Book from '../../../../../components/Book'
import { NextPage } from 'next';
import { useRouter } from 'next/router'
import Link from 'next/link';

const SearchPage: NextPage<{}> = () => {

    const router = useRouter();
    const {type, order, page, keyword} = router.query;

    const [word, setWord] = useState(keyword);

    const lists = [{title: "123", image: "https://image.novelpia.com/img/layout/readycover4.png", author: "", explane: "설명", tag: ["1"]}];

    return(
        <S.Body>
            <S.Search placeholder="소설제목, 태그, 검색어, 작가를 입력해주세요." onChange={(e)=>setWord(e.target.value)} value={keyword} onKeyPress={(e)=>{
                if(e.key === "Enter" && keyword){
                    if(type){
                        //navigate(`/search/${type}/${keyword}`)
                    }
                    else{
                        //navigate(`/search/keyword/date/1/${keyword}`)
                    }
                }
            }}/>
            {keyword ?
            <S.ResultSpan>{`'${keyword}' 검색결과 입니다.`}</S.ResultSpan>
            :
            <></>
            }
            {keyword ?
            <>
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
                    <div>
                        <b>공개일자 순</b>
                    </div>
                    <div>
                        <b>조회순</b>
                    </div>
                    <div>
                        <b>추천순</b>
                    </div>
                </div>
            </S.Result>
            <S.List>
                <Book lists={lists}/>
            </S.List>
            </>
            :
            <S.TagListDiv>
                <S.TagList>
                    <b>인기 태그</b>
                    <ul>
                        <S.Tag>1</S.Tag>
                    </ul>
                </S.TagList>
                <S.TagList>
                    <b>인기 태그</b>
                    <ul>
                        <S.Tag>1</S.Tag>
                    </ul>
                </S.TagList>
                <S.TagList>
                    <b>인기 태그</b>
                    <ul>
                        <S.Tag>1</S.Tag>
                    </ul>
                </S.TagList>
                <S.TagList>
                    <b>인기 태그</b>
                    <ul>
                        <S.Tag>1</S.Tag>
                    </ul>
                </S.TagList>
            </S.TagListDiv>
            }
        </S.Body>
    )
}

export default SearchPage