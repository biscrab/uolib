import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import * as S from '../styled/Top100'
import { NextPage } from 'next';

type BookType = {
    id: number,
    title: string,
    author: string,
    image: string
}

const Top100Page: NextPage<{}> = () => {

    const location = useLocation();
    const params = useParams();

    useEffect(()=>{
        axios.get(location.pathname)

    },[])

    const [lists, setLists] = useState([
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
        {id: 1, title: "1", author: "1", image: "https://image.novelpia.com/img/layout/readycover4.png"},
    ]);

    return(
        <S.Body>
            <S.SelectDiv>
                <NavLink to={"/top100/all"}>
                    <S.Select selected={params.type === "all" || !params.type}>전체</S.Select>
                </NavLink>
                <NavLink to={"/top100/monopoly"}>
                    <S.Select selected={params.type === "monopoly"}>독점</S.Select>
                </NavLink>
                <NavLink to={"/top100/new"}>
                    <S.Select selected={params.type === "new"}>신작</S.Select>
                </NavLink>
                <NavLink to={"/top100/complete"}>
                    <S.Select selected={params.type === "complete"}>완결</S.Select>
                </NavLink>
            </S.SelectDiv>
            <S.List>
                {lists.map(
                (i, index) => {
                    return(
                        <S.Book>
                            <S.Rank>{index + 1}</S.Rank>
                            <NavLink to="/novel/1">
                            <S.BookImgDiv>
                                <img src={i.image}/>  
                            </S.BookImgDiv>
                            <b>{i.title}</b>
                                <NavLink to="/user/1">
                                    <span>{i.author}</span>
                                </NavLink>
                            </NavLink>
                        </S.Book>
                    )
                })}
            </S.List>
        </S.Body>
    )
}

export default Top100Page