import * as S from '../../../styled/Readers'
import Link from 'next/link';

const ReadersViewPage = () => {

    type RowType = {
        number: number,
        title: string,
        author: string,
        view: number,
        like: number
    }

    const list : RowType[] = [
        {number: 1, title: "123", author: "123", view: 1, like: 1},
        {number: 1, title: "123", author: "123", view: 1, like: 1},
        {number: 1, title: "123", author: "123", view: 1, like: 1},
        {number: 1, title: "123", author: "123", view: 1, like: 1},
        {number: 1, title: "123", author: "123", view: 1, like: 1},
        {number: 1, title: "123", author: "123", view: 1, like: 1},
        {number: 1, title: "123", author: "123", view: 1, like: 1},
        {number: 1, title: "123", author: "123", view: 1, like: 1},
        {number: 1, title: "123", author: "123", view: 1, like: 1},
        ];

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
            <S.TRow idx={1}>
                <S.TNumber idx={1}>번호</S.TNumber>
                <S.TTitle idx={1}>제목</S.TTitle>
                <S.TAuthor idx={1}>작가</S.TAuthor>
                <S.TView idx={1}>조회수</S.TView>
                <S.TLike idx={1}>좋아요</S.TLike>
            </S.TRow>
                {list.map(
                    (i, index) => {
                        return(
                            <div key={index}>
                            <Link href={`/readers/view/${i.number}`}>
                            <S.Row idx={index%2}>
                                <S.Number idx={index%2}>{i.number}</S.Number>
                                <S.Title idx={index%2}>{i.title}</S.Title>
                                <S.Author idx={index%2}>{i.author}</S.Author>
                                <S.View idx={index%2}>{i.view}</S.View>
                                <S.Like idx={index%2}>{i.like}</S.Like>
                            </S.Row>
                            </Link>
                            </div>
                        )
                    }
                )}
            </S.OtherList>
        </S.Body>
    )
}

export default ReadersViewPage