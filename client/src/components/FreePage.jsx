import * as  S from '../styled/Search'
import { NavLink } from 'react-router-dom';

const FreePage = () => {

    const lists = [{title: "123", image: "https://image.novelpia.com/img/layout/readycover4.png", author: "", explane: "설명"}];

    return(
        <S.Body>
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
                {lists.map(
                    i => {
                        return(
                        <S.Book>
                            <NavLink to="/novel">
                                <S.BookCover src={i.image}/>
                            </NavLink>
                            <S.BookInfo>    
                                <NavLink to="/novel">
                                    <b>{i.title}</b>
                                </NavLink>
                                <S.Explane>{i.explane}</S.Explane>
                                <S.Info>
                                    <img src="https://novelpia.com/img/new/icon/count_view.png"/>
                                    <span>104.3K명</span>
                                    <img src="https://novelpia.com/img/new/icon/count_book.png"/>
                                    <span>515회차</span>
                                    <img src="https://novelpia.com/img/new/icon/count_like.png"/>
                                    <span>8.0K회</span>
                                </S.Info>
                            </S.BookInfo>
                        </S.Book>
                    )
                }
            )}
        </S.List>
    </S.Body>
    )
}

export default FreePage