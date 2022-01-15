import { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom'
import * as S from '../styled/Search'
import Book from '../contents/Book'
import { NextPage } from 'next';

const SearchPage: NextPage<{}> = () => {

    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const plus = location.pathname.includes("/plus");
    const [keyword, setKeyword] = useState(params.keyword);

    const lists = [{title: "123", image: "https://image.novelpia.com/img/layout/readycover4.png", author: "", explane: "설명", tag: ["1"]}]

    return(
        <S.Body>
            <S.Search placeholder="소설제목, 태그, 검색어, 작가를 입력해주세요." onChange={(e)=>setKeyword(e.target.value)} value={keyword} onKeyPress={(e)=>{
                if(e.key === "Enter" && keyword){
                    if(params.type){
                        navigate(`/search/${params.type}/${keyword}`)
                    }
                    else{
                        navigate(`/search/keyword/date/1/${keyword}`)
                    }
                }
            }}/>
            {params.keyword ?
            <S.ResultSpan>'{params.keyword}' 검색결과 입니다.</S.ResultSpan>
            :
            <></>
            }
            {params.keyword ?
            <>
            <S.SelectDiv>
                <NavLink to={`/search/keyword/date/1/${params.keyword}`}>
                <S.Select selected={params.type === "keyword"}>소설검색</S.Select>
                </NavLink>
                <NavLink to={`/search/tag/date/1/${params.keyword}`}>
                <S.Select selected={params.type === "tag"}>해시태그</S.Select>
                </NavLink>
                <NavLink to={`/search/author/date/1/${params.keyword}`}>
                <S.Select selected={params.type === "author"}>작가검색</S.Select>
                </NavLink>
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