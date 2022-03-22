import * as S from '../Emoticon'
import axios from 'axios'
import { useState } from 'react'

const EmoticonPage = (props: any) => {

    const [buy, setBuy] = useState(false);

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
        {buy ?
            <S.BuyBackground>
                <S.BuyBorder>
                    <S.BuyHeader>
                        
                    </S.BuyHeader>
                </S.BuyBorder>
            </S.BuyBackground>
            :
            <></>
        }
        </>
    )
}

EmoticonPage.getInitialProps = async function(context: any){
    const res = await axios.get(`https://uolib.herokuapp.com/novel/0`)
    const data = await res.data;
    return {
        props : {data}
    }
}


export default EmoticonPage