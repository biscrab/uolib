import { NavLink, useParams } from 'react-router-dom';
import * as S from '../styled/Readers'

type RowType = {
    number: number,
    title: string,
    author: string,
    view: number,
    like: number
}

type FanArtType = {
    image: string,
    title: string,
    author: string,
    id: number
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

    const flist : FanArtType[] = [
        {id: 1, title: "123", author: "123", image: "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/guest/image/jqwKm3b-S9Qulej18EjjvCeVI9s.JPG"},
        {id: 1, title: "123", author: "123", image: "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/guest/image/jqwKm3b-S9Qulej18EjjvCeVI9s.JPG"},
        {id: 1, title: "123", author: "123", image: "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/guest/image/jqwKm3b-S9Qulej18EjjvCeVI9s.JPG"},
        {id: 1, title: "123", author: "123", image: "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/guest/image/jqwKm3b-S9Qulej18EjjvCeVI9s.JPG"},
        {id: 1, title: "123", author: "123", image: "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/guest/image/jqwKm3b-S9Qulej18EjjvCeVI9s.JPG"},
        {id: 1, title: "123", author: "123", image: "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/guest/image/jqwKm3b-S9Qulej18EjjvCeVI9s.JPG"},
        {id: 1, title: "123", author: "123", image: "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/guest/image/jqwKm3b-S9Qulej18EjjvCeVI9s.JPG"},
        {id: 1, title: "123", author: "123", image: "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/guest/image/jqwKm3b-S9Qulej18EjjvCeVI9s.JPG"},
        {id: 1, title: "123", author: "123", image: "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/guest/image/jqwKm3b-S9Qulej18EjjvCeVI9s.JPG"},
    ]

    const clist = [

    ]

    const rlist : any[] = [
        {name: "1", amount: 1}
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
            <S.CommunityPathDiv>
                <S.CommunityPath>전체</S.CommunityPath>
                <S.CommunityPath>공모전리뷰</S.CommunityPath>
                <S.CommunityPath>작품리뷰</S.CommunityPath>
                <S.CommunityPath>작품홍보</S.CommunityPath>
            </S.CommunityPathDiv>
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
                            <NavLink to={`/readers/view/${i.number}`}>
                            <S.Row idx={index%2}>
                                <S.Number idx={index%2}>{i.number}</S.Number>
                                <S.Title idx={index%2}>{i.title}</S.Title>
                                <S.Author idx={index%2}>{i.author}</S.Author>
                                <S.View idx={index%2}>{i.view}</S.View>
                                <S.Like idx={index%2}>{i.like}</S.Like>
                            </S.Row>
                            </NavLink>
                        )
                    }
                )}
            </S.List>
            :
            <></>
            }
            {params.type === "fanart" ?
            <S.FanArtList>
                {flist.map(
                    i => {
                        return(
                            <S.FanArt>
                                <div>
                                    <img src={i.image}/>
                                </div>
                                <b>제목</b>
                                <span>저자</span>
                            </S.FanArt>
                        )
                    }
                )}
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
                    <div>소장랭킹</div>
                    <table>
                       {rlist.map(
                           (i, index) => {
                               return(
                                   <S.Ranking>
                                       <S.Rank>{index+1}위</S.Rank>
                                       <NavLink to={`/user/${i.id}`}>
                                            <S.Name>{i.name}</S.Name>
                                       </NavLink>
                                       <S.Amount>{i.amount}</S.Amount>
                                   </S.Ranking>
                               )
                           }
                       )} 
                    </table>
                </S.HallOfFameDiv>
                <S.HallOfFameDiv>
                    <div>후원랭킹</div>
                    <ul>
                        
                    </ul>
                </S.HallOfFameDiv>
                <S.HallOfFameDiv>
                    <div>이모티콘 보유 랭킹</div>  
                    <ul>
                        
                    </ul>                 
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