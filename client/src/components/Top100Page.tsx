import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import * as S from '../styled/Top100'

type BookType = {
    id: number,
    title: string,
    author: string,
    image: string
}

const Top100Page = () => {

    const params = useParams();
    const lists : BookType[] = [
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
    ];

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
                            <div>{index + 1}</div>
                            <NavLink to="/novel/1">
                            <img src={i.image}/>
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