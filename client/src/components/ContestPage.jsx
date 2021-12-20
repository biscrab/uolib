import * as S from '../styled/Contest'

const ContestPage = () => {

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
    return(
        <>
        <S.Banner />
        <S.Body>
            {list.map(
                i => {
                    return(
                        <S.Book>
                            <img src={i.image}/>
                            <S.Rank>1</S.Rank>
                            <b>{i.title}</b>
                            <span>{i.author}</span>
                            <S.InfoDiv>
                                
                            </S.InfoDiv>
                        </S.Book>
                    )
                }
            )}
        </S.Body>
        </>
    )
}

export default ContestPage