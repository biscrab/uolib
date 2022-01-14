import * as S from '../styled/Book'
import { NavLink } from 'react-router-dom'

const Book = ({i}) => {
    return(
        <S.Book>
        <NavLink to="/novel/1">
            <S.BookCover src={i.image}/>
        </NavLink>
        <S.BookInfo> 
            <S.Title>   
            <NavLink to="/novel/1">
                <b>{i.title}</b>
            </NavLink>
            <NavLink to="/user/1">
                <span>작가</span>
            </NavLink>
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
                        <NavLink to="/">
                        <span>#{tag}</span>
                        </NavLink>
                    )
                }
            )}
            </S.TagDiv> */

const List = ({lists}) => {
    const itemList = lists.map(
        i => {
            return(
                <Book i={i}/>
            )
        }
    )
    return itemList;
}

export default List