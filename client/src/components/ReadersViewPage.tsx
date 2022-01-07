import * as S from '../styled/Readers'

const ReadersViewPage = () => {
    return(
        <S.Body>
            <S.ViewTitle>제목</S.ViewTitle>
            <S.TypeDiv>
                1.2
            </S.TypeDiv>
            <S.ViewBody>
                게시물에 댓글이 없습니다.
            </S.ViewBody>
            <S.ContentsTitle>게시물 댓글 (0)</S.ContentsTitle>
            <S.CommentList>
                
            </S.CommentList>
            <S.CommentInputDiv>
                <textarea />
                <button>등록</button>
            </S.CommentInputDiv>
            <S.ContentsTitle>다른 게시물</S.ContentsTitle>
            <S.OtherList>

            </S.OtherList>
        </S.Body>
    )
}

export default ReadersViewPage