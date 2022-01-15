import * as S from '../../styled/Search'
import { NavLink, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Book from '../../src/contents/Book'
import axios from 'axios';
import { NextPage } from 'next';

const SerializePage: NextPage<{}> = () => {

    const [max, setMax] = useState(0);
    const [list, setList] = useState([{title: "123", image: "https://image.novelpia.com/img/layout/readycover4.png", author: "", explane: "설명", tag:["1"]}]);
    const tlist = ["공모전", "판타지", "현대", "라이트노벨", "하렘", "일상", "중세", "TS", "전생", "로맨스", "먼치킨", "아카데미", "SF", "드라마", "코미디", "이세계", "순애", "빙의", "남성향"]
    const params = useParams();
    const location = useLocation();
    const plus = location.pathname.includes("/plus")

    useEffect(()=>{
        console.log("공모전" === params.tag);
    })

    const Category = () => {
        return(
            <>
            {tlist.map(
                i => {
                    return(
                        <NavLink to={`/${plus ? "plus" : "free"}/${params.type? params.type : "all"}/${params.order ? params.order : "date"}/1/${i}`}>
                            <S.Category selected={i === params.tag}>{i}</S.Category>
                        </NavLink>
                    )
                }
            )}
            </>
        )
    }

    const Check = () => {
        return(
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#5a35cd"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
        )
    }

    useEffect(()=>{
        axios.get(location.pathname)
            .then(res => {
                setMax(res.data.max);
                setList(res.data.list);
            });
    },[])

    return(
        <>
        <S.Banner background="#eee"/>
        <S.Body>
            <S.SelectDiv>
                <NavLink to={`/${plus ? "plus" : "free"}/all/${params.order ? params.order : "date"}/1`}>
                <S.Select selected={params.type === "all" || !params.type}>전체</S.Select>
                </NavLink>
                <NavLink to={`/${plus ? "plus" : "free"}/monopoly/${params.order ? params.order : "date"}/1`}>
                <S.Select selected={params.type === "monopoly"}>독점</S.Select>
                </NavLink>
                <NavLink to={`/${plus ? "plus" : "free"}/new/${params.order ? params.order : "date"}/1`}>
                <S.Select selected={params.type === "new"}>신작</S.Select>
                </NavLink>
                <NavLink to={`/${plus ? "plus" : "free"}/compleate/${params.order ? params.order : "date"}/1`}>
                <S.Select selected={params.type === "compleate"}>완결</S.Select>
                </NavLink>
            </S.SelectDiv>
            <S.Result>
                <b>총 {max}개의 작품</b>
                <div>
                    <NavLink to={`/${plus ? "plus" : "free"}/${params.type ? params.type : "all"}/date/1${params.tag ? `/${params.tag}` : ""}`}>
                    <div>
                        {params.order === "date" || !params.order ?
                        <Check />
                        :
                        <i className="fas fa-circle"></i>
                        }
                        <b>공개일자 순</b>
                    </div>
                    </NavLink>
                    <NavLink to={`/${plus ? "plus" : "free"}/${params.type ? params.type : "all"}/view/1${params.tag ? `/${params.tag}` : ""}`}>
                    <div>
                        {params.order === "view" ?
                            <Check />
                            :
                            <i className="fas fa-circle"></i>
                        }
                        <b>조회순</b>
                    </div>
                    </NavLink>
                    <NavLink to={`/${plus ? "plus" : "free"}/${params.type ? params.type : "all"}/like/1${params.tag ? `/${params.tag}` : ""}`}>
                    <div>
                        {params.order === "like" ?
                            <Check />
                            :
                            <i className="fas fa-circle"></i>
                        }
                        <b>추천순</b>
                    </div>
                    </NavLink>
                </div>
            </S.Result>
            <S.CategoryDiv>
                <NavLink to={`/${plus ? "plus" : "free"}/${params.type? params.type : "all"}/${params.order ? params.order : "date"}/1`}>
                    <S.Category selected={!params.tag}>전체</S.Category>
                </NavLink>
                <Category />
            </S.CategoryDiv>
            <S.List>
                <Book lists={list}/>
            </S.List>
    </S.Body>
    </>
    )
}

export default SerializePage