import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import * as S from '../../../../styled/Readers'

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

const max = 5;

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

    const [plist, setPlist] = useState([1]);

    const router = useRouter();
    const {type, detail, page} = router.query;
    
    useEffect(()=>{
        /*if(!type){
            router.push('/readers/comunity/all/1');
        }+*/
    })

    useEffect(()=>{
        const p = Number(page);
        var l = [];

        if(p >= 3)
            l.push(p-2);
        
        if(p >= 2)
            l.push(p-1);

        l.push(p);

        if(p <= max-1)
            l.push(p+1);

        if(p <= max-2)
            l.push(p+2);
        
        console.log(l);
        setPlist(l);
    },[page])

    return(
        <S.Body>
            <S.SelectDiv>
                <Link href="/readers/comunity/all/1">
                <S.Select selected={type === "comunity"}>커뮤니티</S.Select>
                </Link>
                <Link href="/readers/fanart/all/1">
                    <S.Select selected={type === "fanart"}>팬아트</S.Select>
                </Link>
                <Link href="/readers/hall_of_fame">
                    <S.Select selected={type === "hall_of_fame"}>명예의전당</S.Select>
                </Link>
           </S.SelectDiv>
           {type === "comunity" ?
           <>
            <S.PathDiv>
            <Link href="/readers/comunity/all/1">
                <S.Path selected={detail === "all"}>전체</S.Path>
            </Link>
            <Link href="/readers/comunity/review/1">
                <S.Path selected={detail === "review"}>작품리뷰</S.Path>
            </Link>
            <Link href="/readers/comunity/h/1">
                <S.Path selected={detail === "h"}>작품홍보</S.Path>
            </Link>
            </S.PathDiv>
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
                            <div key={index}>
                            <Link href={`/readers/view/${i.number}`}>
                            <S.Row idx={index%2}>
                                <S.Number idx={index%2}>{i.number}</S.Number>
                                <S.Title idx={index%2}>{i.title}</S.Title>
                                <S.Author idx={index%2}>{i.author}</S.Author>
                                <S.View idx={index%2}>{i.view}</S.View>
                                <S.Like idx={index%2}>{i.like}</S.Like>
                            </S.Row>
                            </Link>
                            </div>
                        )
                    }
                )}
            </S.List>
            </>
            :
            <></>
            }
            {type === "fanart" ?
            <>
            <S.PathDiv>
                <Link href="/readers/comunity/all/1">
                    <S.Path selected={detail === "all"}>전체</S.Path>
                </Link>
                <Link href="/readers/comunity/review/1">
                    <S.Path selected={detail === "review"}>작품리뷰</S.Path>
                </Link>
                <Link href="/readers/comunity/h/1">
                    <S.Path selected={detail === "h"}>작품홍보</S.Path>
                </Link>
            </S.PathDiv>
            <S.FanArtHeader>
                총 개의 팬아트
            </S.FanArtHeader>
            <S.FanArtList>
                {flist.map(
                    (i, index) => {
                        return(
                            <S.FanArt key={index}>
                                <Link href={`/readers/view/${i.id}`}>
                                <div>
                                    <img src={i.image}/>
                                </div>
                                </Link>
                                <Link href={`/readers/view/${i.id}`}>
                                <b>제목</b>
                                </Link>
                                <Link href={`user/${1}`}>
                                <span>저자</span>
                                </Link>
                            </S.FanArt>
                        )
                    }
                )}
            </S.FanArtList>   
            </> 
            :
            <></>
            }
            {type === "hall_of_fame" ?
            <>
            <S.HallOfFame>
            <h2>명예의 전당</h2>
            <S.HallOfFameList>
                <S.HallOfFameDiv>
                    <div>코인랭킹</div>
                    <table>
                       {rlist.map(
                           (i, index) => {
                               return(
                                   <S.Ranking key={index}>
                                       <S.Rank>{index+1}위</S.Rank>
                                            <S.Name><Link href={`/user/${i.id}`}>{i.name}</Link></S.Name>
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
            {type !== "hall_of_fame" ?
            <>
            <S.PageDiv>
                <S.Page><i className="fas fa-chevron-left"></i></S.Page>
                {plist.map(
                    (i, index) => {
                        return(
                            <S.Page key={index} selected={Number(page) === i}>{i}</S.Page>
                        )
                    }
                )}
                <S.Page><i className="fas fa-chevron-right"></i></S.Page>
            </S.PageDiv>
            <S.ButtonDiv>
                <button>새 글 쓰기</button>
            </S.ButtonDiv>
            </>
            :
            <></>
            }
        </S.Body>
    )
}

export default ReadersPage