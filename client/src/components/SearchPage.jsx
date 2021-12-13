import * as S from '../styled/Search'

const SearchPage = () => {

    return(
        <S.Body>
            <S.Search placeholder="소설제목, 태그, 검색어, 작가를 입력해주세요."/>
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

            </S.List>
        </S.Body>
    )
}

export default SearchPage