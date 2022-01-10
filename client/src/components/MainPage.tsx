import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import * as S from '../styled/Main'

type BookType = {
    id: number,
    title: string,
    author: string,
    tag: string[];
}

type BannerType = {
    image: string,
    color: string
}

const List: React.FC<{lists: BookType[]}> = ({lists}) => {
    return(
        <>
        {lists.map(
            item => {
                return(
            <S.Book>
                <NavLink to={`/novel/${item.id}`}>
                    <S.BookCover src={"//image.novelpia.com/imagebox/cover/148f406a052dae41bfd628929b897e56_453275_ori.thumb"}/>
                </NavLink>
                <S.BookInfo>
                    <S.BookInfoDiv>
                        <NavLink to={`/novel/${item.id}`}>
                            <S.BookTittle>{item.title}</S.BookTittle>
                        </NavLink>
                        <S.BookAuthor>{item.author}</S.BookAuthor>
                    </S.BookInfoDiv>
                    <S.BookTagDiv>
                        {item.tag.map(
                            i => {
                                return(
                                    <S.Tag>#{i}</S.Tag>
                                     
                                )
                            }
                        )}    
                    </S.BookTagDiv>
                </S.BookInfo>
            </S.Book>
            )
            })}
        </>
    )
}

const MainPage = () => {

    const contestList: BookType[] = [
                        {id: 1, title: "모르는 만화에 빙의했다", author: "이상운", tag: ["1", "2"]},
                        {id: 1, title: "모르는 만화에 빙의했다", author: "이상운", tag: ["1", "2"]},
                        {id: 1, title: "모르는 만화에 빙의했다", author: "이상운", tag: ["1", "2"]},
                        {id: 1, title: "모르는 만화에 빙의했다", author: "이상운", tag: ["1", "2"]},
                        {id: 1, title: "모르는 만화에 빙의했다", author: "이상운", tag: ["1", "2"]},
                        {id: 1, title: "모르는 만화에 빙의했다", author: "이상운", tag: ["1", "2"]},];

    const bestList: BookType[] = [
                        {id: 1, title: "모르는 만화에 빙의했다", author: "이상운", tag: ["1", "2"]},
                        {id: 1, title: "모르는 만화에 빙의했다", author: "이상운", tag: ["1", "2"]},
                        {id: 1, title: "모르는 만화에 빙의했다", author: "이상운", tag: ["1", "2"]},
                        {id: 1, title: "모르는 만화에 빙의했다", author: "이상운", tag: ["1", "2"]},
                        {id: 1, title: "모르는 만화에 빙의했다", author: "이상운", tag: ["1", "2"]},
                        {id: 1, title: "모르는 만화에 빙의했다", author: "이상운", tag: ["1", "2"]},];

    const BannerList: BannerType[] = [
        {image: "https://novelpia.com/img/new/banner/main_banner_pc_20220104.jpg", color: "#1c0426"},
    ]

    const PrevBanner = () => {

    }

    const NextBanner = () => {

    }

    useEffect(()=>{

    },[])
//#1c0426
//https://novelpia.com/img/new/banner/main_banner_pc_20220104.jpg
    return(
        <>
        <S.BannerDiv>
            <S.NavWrap>
                <div onClick={()=>PrevBanner()}><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#000"><path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/><path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"/></svg></div>
                <div onClick={()=>NextBanner()}><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="30px" viewBox="0 0 24 24" width="30px" fill="#000"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"/></g></svg></div>
            </S.NavWrap>
            {BannerList.map(
                i => {
                    return(
                        <S.Banner color={"#1c0426"}>
                            <img src={"https://novelpia.com/img/new/banner/main_banner_pc_20220104.jpg"}/>
                        </S.Banner> 
                    )
                }
            )}
        </S.BannerDiv>
        <S.Body>
            <S.Title>공모전 Best</S.Title>
            <S.Border>
                <List lists={contestList}/>
            </S.Border>
            <S.Title>Best 인기</S.Title>
            <S.Border>
                <List lists={bestList}/>
            </S.Border>
        </S.Body>
        </>
    )
}

export default MainPage