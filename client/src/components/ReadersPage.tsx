import { NavLink, useParams } from 'react-router-dom';
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

    const params = useParams();

    return(
        <S.Body>
            <S.SelectDiv>
                <NavLink to="/readers/comunity">
                <S.Select selected={params.type === "comunity" || !params.type}>커뮤니티</S.Select>
                </NavLink>
                <NavLink to="/readers/fanart">
                    <S.Select selected={params.type === "fanart"}>팬아트</S.Select>
                </NavLink>
                <NavLink to="/readers/hall_of_fame">
                    <S.Select selected={params.type === "hall_of_fame"}>명예의전당</S.Select>
                </NavLink>
           </S.SelectDiv>
           {params.type === "comunity" || !params.type ?
            <S.List>
            <S.TRow idx={1}>
                <S.TNumber idx={1}>번호</S.TNumber>
                <S.TTitle idx={1}>제목</S.TTitle>
                <S.TAuthor idx={1}>작가</S.TAuthor>
                <S.TView idx={1}>조회수</S.TView>
                <S.TLike idx={1}>좋아요</S.TLike>
            </S.TRow>
                {list.map(
                    (i, index) => {
                        return(
                            <S.Row idx={index%2}>
                                <S.Number idx={index%2}>{i.number}</S.Number>
                                <S.Title idx={index%2}>{i.title}</S.Title>
                                <S.Author idx={index%2}>{i.author}</S.Author>
                                <S.View idx={index%2}>{i.view}</S.View>
                                <S.Like idx={index%2}>{i.like}</S.Like>
                            </S.Row>
                        )
                    }
                )}
            </S.List>
            :
            <></>
            }
            {params.type === "fanart" ?
            <S.FanArtList>

            </S.FanArtList>    
            :
            <></>
            }
            {params.type === "hall_of_fame" ?
            <>
            <S.HallOfFame>
            <h2>명예의 전당</h2>
            <S.HallOfFameList>
                <S.HallOfFameDiv>
                    <div>

                    </div>
                </S.HallOfFameDiv>
                <S.HallOfFameDiv>
                    <div>

                    </div>
                </S.HallOfFameDiv>
                <S.HallOfFameDiv>
                    <div>
                        
                    </div>                    
                </S.HallOfFameDiv>
            </S.HallOfFameList>
            </S.HallOfFame>
            </>
            :
            <></>
            }
        </S.Body>
    )
}

export default ReadersPage