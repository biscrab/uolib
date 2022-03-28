import * as S from '../styled/Book'
import Link from 'next/link'

const Book = ({i}) => {
    return(
        <S.Book>
            <Link href={`/novel/${i.id}`}>
                <S.BookCover src={i.image ? i.image : "https://image.novelpia.com/img/layout/readycover4.png"}/>
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
                <Link href={`/novel/${i.id}`}>
                    <b>{i.title}</b>
                </Link>
                <Link href="/user/1">
                    <S.Author>{i.author}</S.Author>
                </Link>
                </S.Title>
                <S.Explane>{i.explane}</S.Explane>
                <S.Info>
                    <img src="https://novelpia.com/img/new/icon/count_view.png"/>
                    <span>{i.view}명</span>
                    <img src="https://novelpia.com/img/new/icon/count_book.png"/>
                    <span>{i.round}회차</span>
                    <img src="	https://image.novelpia.com/img/new/icon/count_good.png"/>
                    <span>{i.like}회</span>
                </S.Info>
                <S.TagDiv>
                    {i.tag.length ?
                        <>
                        {i.tag.map(
                            (tag, index) => {
                                return(
                                    <Link href={`/search/tag/date/1/${tag}`} key={index}>
                                    <span>#{tag}</span>
                                    </Link>
                                )
                            }
                        )}
                        </>
                        :
                        <></>
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