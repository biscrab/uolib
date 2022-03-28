import * as S from '../styled/Round'
import Link from 'next/link'

const Round = (i, index, plus) => {

    return(
        <Link key={i.index} href={`/viewer/${i.i.id}`}>
        <S.Round notice={i.i.type == "notice"}>
            <S.RoundDiv>
                <S.RLeft>
                    <S.TittleDiv>
                        <S.Episode>EP.{i.i.episode}</S.Episode>
                        {plus && index >= 15 ?
                        <S.Price color={"#5232dd"}>PLUS</S.Price>
                        :
                        <S.Price color={"#166d95"}>무료</S.Price>
                        }
                        <S.RTittle>{i.i.title}</S.RTittle>
                    </S.TittleDiv>
                </S.RLeft>
                <S.RDate>{i.i.rdate}</S.RDate>
            </S.RoundDiv>
        </S.Round>
        </Link>
    )
}

const List = ({props}) => {
    const itemList = props.lists.map((i, index) => { 
        return <Round i={i} plus={props.plus} index={index}/>
    })
    return itemList
}

export default List