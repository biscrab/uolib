import * as S from '../styled/Readers'

type RowType = {
    number: number,
    title: string,
    author: string,
    view: number,
    like: number
}

const ReadersPage = () => {

    const list : RowType[] = [
    {number: 1, title: "123", author: "123", view: 1, like: 1},
    {number: 1, title: "123", author: "123", view: 1, like: 1},
    {number: 1, title: "123", author: "123", view: 1, like: 1},
    {number: 1, title: "123", author: "123", view: 1, like: 1},
    {number: 1, title: "123", author: "123", view: 1, like: 1},
    {number: 1, title: "123", author: "123", view: 1, like: 1},
    {number: 1, title: "123", author: "123", view: 1, like: 1},
    {number: 1, title: "123", author: "123", view: 1, like: 1},
    {number: 1, title: "123", author: "123", view: 1, like: 1},
    ];

    const clist = [

    ]

    return(
        <S.Body>
            <S.SelectDiv>
                <S.Select selected={false}>전체</S.Select>
                <S.Select selected={false}>리뷰</S.Select>
                <S.Select selected={false}>팬아트</S.Select>
                <S.Select selected={false}>명예의전당</S.Select>
            </S.SelectDiv>
            <S.List>
            <S.Row>
                <S.Number id={1}></S.Number>
                <S.Title id={1}></S.Title>
                <S.Author id={1}></S.Author>
                <S.View id={1}></S.View>
                <S.Like id={1}></S.Like>
            </S.Row>
                {list.map(
                    (i, index) => {
                        return(
                            <S.Row>
                                <S.Number id={index%2}>{i.number}</S.Number>
                                <S.Title id={index%2}>{i.title}</S.Title>
                                <S.Author id={index%2}>{i.author}</S.Author>
                                <S.View id={index%2}>{i.view}</S.View>
                                <S.Like id={index%2}>{i.like}</S.Like>
                            </S.Row>
                        )
                    }
                )}
            </S.List>
        </S.Body>
    )
}

export default ReadersPage

/*            <S.List>
            <S.Row>
                <S.Number id={1}></S.Number>
                <S.Title id={1}></S.Title>
                <S.Author id={1}></S.Author>
                <S.View id={1}></S.View>
                <S.Like id={1}></S.Like>
            </S.Row>
                {list.map(
                    (i, index) => {
                        return(
                            <S.Row>
                                <S.Number id={index%2}>{i.number}</S.Number>
                                <S.Title id={index%2}>{i.title}</S.Title>
                                <S.Author id={index%2}>{i.author}</S.Author>
                                <S.View id={index%2}>{i.view}</S.View>
                                <S.Like id={index%2}>{i.like}</S.Like>
                            </S.Row>
                        )
                    }
                )}
            </S.List> */