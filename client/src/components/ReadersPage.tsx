import * as S from '../styled/Readers'

const ReadersPage = () => {

    const list = [{image: "https://miro.medium.com/max/1200/1*FSkUtK8pYPBSNeaVotU4Ug.png", title: "123", author: "123"},
    {image: "https://miro.medium.com/max/1200/1*FSkUtK8pYPBSNeaVotU4Ug.png", title: "123", author: "123"},
    {image: "https://miro.medium.com/max/1200/1*FSkUtK8pYPBSNeaVotU4Ug.png", title: "123", author: "123"},
    {image: "https://miro.medium.com/max/1200/1*FSkUtK8pYPBSNeaVotU4Ug.png", title: "123", author: "123"},
    {image: "https://miro.medium.com/max/1200/1*FSkUtK8pYPBSNeaVotU4Ug.png", title: "123", author: "123"},
    {image: "https://miro.medium.com/max/1200/1*FSkUtK8pYPBSNeaVotU4Ug.png", title: "123", author: "123"},
    {image: "https://miro.medium.com/max/1200/1*FSkUtK8pYPBSNeaVotU4Ug.png", title: "123", author: "123"},
    {image: "https://miro.medium.com/max/1200/1*FSkUtK8pYPBSNeaVotU4Ug.png", title: "123", author: "123"},
    {image: "https://miro.medium.com/max/1200/1*FSkUtK8pYPBSNeaVotU4Ug.png", title: "123", author: "123"},
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
                {list.map(
                    i => {
                        return(
                            <S.Row>

                            </S.Row>
                        )
                    }
                )}
            </S.List>
        </S.Body>
    )
}

export default ReadersPage