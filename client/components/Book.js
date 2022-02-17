import * as S from '../styled/Book'
import Link from 'next/link'

const Book = ({i}) => {
    return(
        <S.Book>
            <Link href="/novel/1">
                <S.BookCover src={i.image}/>
            </Link>
            <S.BookInfo> 
                <S.Title>
                {i.plus ?
                    <S.Type color='#5232dd'>PLUS</S.Type>
                    :
                    <S.Type color='#166d95'>자유</S.Type> 
                }
                {i.monopoly ?
                    <S.Type color='#0d60d1'>독점</S.Type>
                    :
                    <></>
                }
                {i.complete ?
                    <S.Type color='black'>완결</S.Type>  
                    :
                    <></>
                }
                <Link href="/novel/1">
                    <b>{i.title}</b>
                </Link>
                <Link href="/user/1">
                    <S.Author>{i.author}</S.Author>
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
                <S.TagDiv>
                    {/*`
                    {JSON.parse(i.tag).map(
                        (tag, index) => {
                            return(
                                <Link href={/search/tag/date/1/tag} key={index}>
                                <span>#{tag}</span>
                                </Link>
                            )
                        }
                    )}`*/
                    }
                </S.TagDiv>
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