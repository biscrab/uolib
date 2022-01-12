import * as S from '../styled/PlusAgree'
import Book from '../contents/Book'

const PlusAgreePage = () => {

    const book = [{title: "123", image: "https://image.novelpia.com/img/layout/readycover4.png", author: "", explane: "설명", tag:["1"]}];

    return(
        <S.Body>
            <h5>플러스 전환 신청</h5>
            <S.BookDiv>
                <Book lists={book}/>
            </S.BookDiv>
        </S.Body>
    )
}

export default PlusAgreePage