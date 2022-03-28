import * as S from '../styled/Book'
import Link from 'next/link'
import TagDiv from './TagDiv'

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
                <S.Author>{i.author}</S.Author>
                </S.Title>
                <S.Explane>{i.explane}</S.Explane>
                <S.Info>
                    <img src="https://novelpia.com/img/new/icon/count_view.png"/>
                    <span>{i.view}명</span>
                    <img src="https://novelpia.com/img/new/icon/count_book.png"/>
                    <span>회차</span>
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
                <S.ButtonDiv>
                    <Link href={"/write"}>
                        <button style={{backgroundColor: "black"}}>작품 연재</button>
                    </Link>
                    <button onClick={()=>deleteNovel()} style={{backgroundColor: "crimson"}}>작품 삭제</button>
                </S.ButtonDiv>
            </S.BookInfo>
        </S.Book>
    )
}

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
