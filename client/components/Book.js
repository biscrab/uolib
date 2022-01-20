import * as S from '../styled/Book'
import Link from 'next/link'

const Book = ({i}) => {
    return(
        <S.Book>
            <Link href="/novel/a">
                <S.BookCover src={i.image}/>
            </Link>
            <S.BookInfo> 
                <S.Title>   
                <Link href="/novel/a">
                    <b>{i.title}</b>
                </Link>
                <Link href="/user/1">
                    <S.Author>작가</S.Author>
                </Link>
                </S.Title>
                <S.Explane>{i.explane}</S.Explane>
                <S.Info>
                    <img src="https://novelpia.com/img/new/icon/count_view.png"/>
                    <span>104.3K명</span>
                    <img src="https://novelpia.com/img/new/icon/count_book.png"/>
                    <span>515회차</span>
                    <img src="	https://image.novelpia.com/img/new/icon/count_good.png"/>
                    <span>8.0K회</span>
                </S.Info>
            </S.BookInfo>
        </S.Book>
    )
}

/*           <S.TagDiv>
            {i.tag.map(
                tag => {
                    return(
                        <Link href="/">
                        <span>#{tag}</span>
                        </Link>
                    )
                }
            )}
            </S.TagDiv> */

const List = ({lists}) => {
    const itemList = lists.map(
        (i, index) => {
            return(
                <Book i={i} key={index}/>
            )
        }
    )
    return itemList;
}

export default List