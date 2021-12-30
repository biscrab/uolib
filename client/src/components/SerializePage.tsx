import * as S from '../styled/Search'
import { NavLink, useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const SerializePage = () => {

    const lists = [{title: "123", image: "https://image.novelpia.com/img/layout/readycover4.png", author: "", explane: "설명"}];
    const clist = ["공모전", "판타지", "현대", "라이트노벨", "하렘", "일상", "중세", "TS", "전생", "로맨스", "먼치킨", "아카데미", "SF", "드라마", "코미디", "이세계", "순애", "빙의", "남성향", "몸으로하는스포츠"]
    const params = useParams();
    const location = useLocation();
    const plus = location.pathname.includes("/plus")

    useEffect(()=>{
        console.log("공모전" === params.category);
    })

    const Category = () => {
        return(
            <>
            {clist.map(
                i => {
                    return(
                        <NavLink to={`/${plus ? "plus" : "free"}/${params.type? params.type : "all"}/${i}`}>
                            <S.Category selected={i === params.category}>{i}</S.Category>
                        </NavLink>
                    )
                }
            )}
            </>
        )
    }

    return(
        <>
        <S.Banner background="#eee"/>
        <S.Body>
            <S.SelectDiv>
                <NavLink to={`/${plus ? "plus" : "free"}/all`}>
                <S.Select selected={params.type === "all" || !params.type}>전체</S.Select>
                </NavLink>
                <NavLink to={`/${plus ? "plus" : "free"}/monopoly`}>
                <S.Select selected={params.type === "monopoly"}>독점</S.Select>
                </NavLink>
                <NavLink to={`/${plus ? "plus" : "free"}/new`}>
                <S.Select selected={params.type === "new"}>신작</S.Select>
                </NavLink>
                <NavLink to={`/${plus ? "plus" : "free"}/compleate`}>
                <S.Select selected={params.type === "compleate"}>완결</S.Select>
                </NavLink>
            </S.SelectDiv>
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
            <S.CategoryDiv>
                <S.Category selected={!params.category}>전체</S.Category>
                <Category />
            </S.CategoryDiv>
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
    </>
    )
}

export default SerializePage