import { NavLink } from 'react-router-dom';
import * as S from '../styled/Main'

type BookInterface = {
    id: number,
    title: string,
    author: string,
    tag: string[];
}

const List: React.FC<{lists: BookInterface[]}> = ({lists}) => {
    return(
        <>
        {lists.map(
            item => {
                return(
            <S.Book>
                <NavLink to={`/novel/${item.id}`}>
                    <S.BookCover src={"https://image.novelpia.com/imagebox/cover/c1139a1358f8c808ab9ba0ce30d2eed5_17876_ori.thumb"}/>
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

    const contestList: BookInterface[] = [
                        {id: 1, title: "test", author: "이상운", tag: ["1", "2"]},
                        {id: 1, title: "test", author: "이상운", tag: ["1", "2"]},
                        {id: 1, title: "test", author: "이상운", tag: ["1", "2"]},
                        {id: 1, title: "test", author: "이상운", tag: ["1", "2"]},
                        {id: 1, title: "test", author: "이상운", tag: ["1", "2"]},
                        {id: 1, title: "test", author: "이상운", tag: ["1", "2"]},];

    const bestList: BookInterface[] = [
                        {id: 1, title: "test", author: "이상운", tag: ["1", "2"]},
                        {id: 1, title: "test", author: "이상운", tag: ["1", "2"]},
                        {id: 1, title: "test", author: "이상운", tag: ["1", "2"]},
                        {id: 1, title: "test", author: "이상운", tag: ["1", "2"]},
                        {id: 1, title: "test", author: "이상운", tag: ["1", "2"]},
                        {id: 1, title: "test", author: "이상운", tag: ["1", "2"]},];

    return(
        <>
        <S.BannerDiv>
                <S.NavWrap>
                    <div>test</div>
                    <div>test</div>
                </S.NavWrap>
            <S.Banner color="#1c0426">
                <img src="https://novelpia.com/img/new/banner/main_banner_pc_20220104.jpg"/>
            </S.Banner> 
            <S.Banner color="#1c0426">
                <img src="https://novelpia.com/img/new/banner/main_banner_pc_20220104.jpg"/>
            </S.Banner> 
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