import * as S from '../styled/Main'

const MainPage = () => {

    const contestList = [{title: "test", author: "이상운", tag: [1, 2]}];
    const bestList = [];

    const Book = ({item}) => {
        return(
            <S.Book>
                <S.BookCover src={"https://image.novelpia.com/imagebox/cover/c1139a1358f8c808ab9ba0ce30d2eed5_17876_ori.thumb"}/>
                <S.BookInfo>
                    <S.BookInfoDiv>
                        <S.BookTittle>{item.title}</S.BookTittle>
                        <S.BookAuthor>{item.author}</S.BookAuthor>
                    </S.BookInfoDiv>
                    <S.BookTagDiv>
                        {item.tag.map(
                            item => {
                                return(
                                    <S.Tag>#{item}#123</S.Tag>
                                )
                            }
                        )}    
                    </S.BookTagDiv>
                </S.BookInfo>
            </S.Book>
        )
    }

    const List = ({lists}) => {
        const list = lists.map(
            item => {
                return(
                    <Book item={item}/>
                )
            }
        )
        return list
    }

    return(
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
    )
}

export default MainPage