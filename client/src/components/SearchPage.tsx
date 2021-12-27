import { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom'
import * as S from '../styled/Search'

const SearchPage = () => {

    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const plus = location.pathname.includes("/plus");
    const [keyword, setKeyword] = useState("");

    const lists = [{title: "123", image: "https://image.novelpia.com/img/layout/readycover4.png", author: "", explane: "설명"}]

    return(
        <S.Body>
            <S.Search placeholder="소설제목, 태그, 검색어, 작가를 입력해주세요." onChange={(e)=>setKeyword(e.target.value)} value={keyword} onKeyPress={(e)=>{
                if(e.key === "Enter" && keyword){
                    if(params.type){
                        navigate(`/search/${params.type}/${keyword}`)
                    }
                    else{
                        navigate(`/search/novel/${keyword}`)
                    }
                }
            }}/>
            {params.keyword ?
            <S.ResultSpan>'{params.keyword}' 검색결과 입니다.</S.ResultSpan>
            :
            <></>
            }
            <S.SearchTypeDiv>
                <NavLink to={`/search/novel`}>
                <S.SearchType selected={params.type === "novel" || !params.type}>소설검색</S.SearchType>
                </NavLink>
                <NavLink to={`/search/tag`}>
                <S.SearchType selected={params.type === "tag"}>해시태그</S.SearchType>
                </NavLink>
                <NavLink to={`/search/author`}>
                <S.SearchType selected={params.type === "author"}>작가검색</S.SearchType>
                </NavLink>
            </S.SearchTypeDiv>
            {params.keyword ?
            <>
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
                {lists.map(
                    i => {
                        return(
                            <S.Book>
                                <NavLink to="/novel">
                                    <S.BookCover src={i.image}/>
                                </NavLink>
                                <S.BookInfo>    
                                    <NavLink to="/novel">
                                        <b>{i.title}</b>
                                    </NavLink>
                                    <S.Explane>{i.explane}</S.Explane>
                                    <S.Info>
                                        <img src="https://novelpia.com/img/new/icon/count_view.png"/>
                                        <span>104.3K명</span>
                                        <img src="https://novelpia.com/img/new/icon/count_book.png"/>
                                        <span>515회차</span>
                                        <img src="https://novelpia.com/img/new/icon/count_like.png"/>
                                        <span>8.0K회</span>
                                    </S.Info>
                                </S.BookInfo>
                            </S.Book>
                        )
                    }
                )}
            </S.List>
            </>
            :
            <></>
            }
        </S.Body>
    )
}

export default SearchPage