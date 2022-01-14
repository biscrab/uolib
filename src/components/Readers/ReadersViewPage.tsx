import * as S from '../../styled/Readers'

const ReadersViewPage = () => {
    return(
        <S.Body>
            <S.ViewTitle>제목</S.ViewTitle>
            <S.TypeDiv>
                1.2
            </S.TypeDiv>
            <S.Write>
                <S.WriterDiv color='#7258ce'>
                    출처
                </S.WriterDiv>
                <S.WriterDiv>
                    이름
                </S.WriterDiv>
            </S.Write>
            <S.ViewBody>
                <S.NovelDiv>
                    <img src="https://novelpia.com/imagebox/cover/7ad0832dde9ad51cff4c5ece918416f2_27396_ori.file"/>
                </S.NovelDiv>
            </S.ViewBody>
            <S.ContentsTitle>게시물 댓글 (0)</S.ContentsTitle>
            <S.CommentList>
                
            </S.CommentList>
            <S.EmoticonDiv>
                
            </S.EmoticonDiv>
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