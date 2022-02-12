import * as S from '../../styled/Emoticon'

const EmoticonPage = () => {
    return(
        <>
        <S.Header>
            <S.HeaderDiv>
                <img src="https://image.novelpia.com/img/emoticon/d89jg198x/1.jpg"/>
                <S.HeaderInfo>
                    <S.TitleDiv>
                        <h1>제목</h1>
                        <S.Coin></S.Coin>
                    </S.TitleDiv>
                    <S.ButtonDiv>
                        <button>구매하기</button>
                    </S.ButtonDiv>
                </S.HeaderInfo>
            </S.HeaderDiv>
        </S.Header>
        <S.Body>
            <S.Border>
                <img src="https://image.novelpia.com/img/emoticon/fond8lwgcv/01.png"/>
                <img src="https://image.novelpia.com/img/emoticon/fond8lwgcv/02.png"/>
                <img src="https://image.novelpia.com/img/emoticon/fond8lwgcv/03.png"/>
                <img src="https://image.novelpia.com/img/emoticon/fond8lwgcv/04.png"/>
                <img src="https://image.novelpia.com/img/emoticon/fond8lwgcv/05.png"/>
            </S.Border>
        </S.Body>
        </>
    )
}

export default EmoticonPage