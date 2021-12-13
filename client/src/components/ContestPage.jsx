import * as S from '../styled/Contest'

const ContestPage = () => {

    const list = [{image: "https://miro.medium.com/max/1200/1*FSkUtK8pYPBSNeaVotU4Ug.png", tittle: "123", author: "123"}];
    return(
        <>
        <S.Banner />
        <S.Body>
            {list.map(
                i => {
                    return(
                        <S.Book>
                            <img src={i.image}/>
                            <b>{i.title}</b>
                            <span>{i.author}</span>
                        </S.Book>
                    )
                }
            )}
        </S.Body>
        </>
    )
}

export default ContestPage