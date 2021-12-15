import { useParams } from 'react-router-dom'
import * as S from '../styled/Search'

const SearchPage = () => {

    const params = useParams();

    const lists = [{title: "123", image: "https://image.novelpia.com/img/layout/readycover4.png", author: "", explane: "설명"}]

    return(
        <S.Body>
            <S.Search placeholder="소설제목, 태그, 검색어, 작가를 입력해주세요."/>
            <S.ResultSpan>'' 검색결과 입니다.</S.ResultSpan>
            <S.SearchTypeDiv>
                <S.SearchType>소설검색</S.SearchType>
                <S.SearchType>해시태그</S.SearchType>
                <S.SearchType>작가검색</S.SearchType>
            </S.SearchTypeDiv>
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
                                <S.BookCover src={i.image}/>
                                <S.BookInfo>    
                                    <b>{i.title}</b>
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
        </S.Body>
    )
}

export default SearchPage