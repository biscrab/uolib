import { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import * as S from '../styled/MyBook'

type BookInterface = {
    id: number,
    title: string,
    author: string,
    image: string,
    explane: string,
    tag: string[];
}

const MyBookPage = () => {

    const params = useParams();
    const lists : BookInterface[] = [{id: 1, title: "test", author: "이상운", explane: "", image: "https://image.novelpia.com/imagebox/cover/18fc3444c07e1ecadd65072b4bd08e28_47837_ori.thumb",tag: ["1", "2"]}];

    const [selected, setSelected] = useState(1);

    return(
        <S.Body>
            <S.SelectDiv>
                <NavLink to="/mybook/like">
                    <S.Select selected={params.type==="like" || !params.type}>선호작</S.Select>
                </NavLink>
                <NavLink to="/mybook/my">
                    <S.Select selected={params.type==="my"}>내작품</S.Select>
                </NavLink>
                <NavLink to="/mybook/donation">
                    <S.Select selected={params.type==="donation"}>후원목록</S.Select>
                </NavLink>
                <NavLink to="/mybook/last_view">
                    <S.Select selected={params.type==="last_view"}>최근 본 작품</S.Select>
                </NavLink>
            </S.SelectDiv>
            <S.CountOfBook>
                총 0개의 작품
            </S.CountOfBook>
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

export default MyBookPage