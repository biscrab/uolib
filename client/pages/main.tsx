import { useEffect } from 'react';
import Link from 'next/link';
import * as S from '../styled/Main'
import { NextPage } from 'next';

type BookType = {
    id: number,
    title: string,
    author: string,
    tag: string[],
}

type BannerType = {
    image: string,
    color: string
}

const List: React.FC<{lists: BookType[]}> = ({lists}) => {
    return(
        <>
        {lists.map(
            (i, index) => {
                return(
                    <Book i={i} key={index}/>
                )
            })}
        </>
    )
}

const Book = (i: any) => {
    return(
        <S.Book>
            <Link href={`/novel/${i.id}`}>
                <S.BookCover src={"//image.novelpia.com/imagebox/cover/148f406a052dae41bfd628929b897e56_453275_ori.thumb"}/>
            </Link>
            <S.BookInfo>
                <S.BookInfoDiv>
                    <Link href={`/novel/${i.id}`}>
                        <S.BookTittle>{i.title}</S.BookTittle>
                    </Link>
                    <S.BookAuthor>{i.author}</S.BookAuthor>
                </S.BookInfoDiv>
                <S.BookTagDiv> 
                </S.BookTagDiv>
            </S.BookInfo>
        </S.Book>
        /*                    {i.tag.map(
                        (item: string) => {
                            return(
                                <div key={item}>
                                    <S.Tag>#{item}</S.Tag>
                                </div>

                            )
                        }
                    )}    */
)

}

const MainPage: NextPage<{}> = () => {

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
                <div onClick={()=>NextBanner()}><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="30px" viewBox="0 0 24 24" width="30px" fill="#000"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"/></g></svg></div>
            </S.NavWrap>
            {BannerList.map(
                (i, index) => {
                    return(
                        <S.Banner color={"#1c0426"} key={index}>
                            <img src={"https://novelpia.com/img/new/banner/main_banner_pc_20220104.jpg"}/>
                        </S.Banner> 
                    )
                }
            )}
        </S.BannerDiv>
        <S.Body>
            <S.Title>플러스 Best</S.Title>
            <S.Border>
                <List lists={contestList}/>
            </S.Border>
            <S.Title>자유연재 Best</S.Title>
            <S.Border>
                <List lists={bestList}/>
            </S.Border>
        </S.Body>
        </>
    )
}

export default MainPage