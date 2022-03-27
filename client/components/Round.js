import * as S from '../styled/Round'
import Link from 'next/link'

const Round = (i, index, plus) => {
    return(
        <Link key={index} href={`/viewer/${i.id}`}>
        <S.Round notice={i.type == "notice"}>
            <S.RoundDiv>
                <S.RLeft>
                    <S.TittleDiv>
                        <S.Episode>EP.{i.episode}</S.Episode>
                        {plus && index >= 15 ?
                        <S.Price color={"#5232dd"}>PLUS</S.Price>
                        :
                        <S.Price color={"#166d95"}>무료</S.Price>
                        }
                        <S.RTittle>{i.title}</S.RTittle>
                    </S.TittleDiv>
                    <S.RInfo>
                    {/*
                    <span><i className="fas fa-user"></i>{i.view}</span>
                    <span><i className="fas fa-comment-alt"></i>{i.comment}</span>
                    <span><i className="fas fa-thumbs-up"></i>{i.like}</span>
                    */}
                    </S.RInfo>
                </S.RLeft>
                <S.RDate>{i.rdate}</S.RDate>
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