import { useState } from 'react'
import * as S from '../../styled/Novel'
import Link from 'next/link'
import axios from 'axios'
import Round from '../../components/Round'
import Comment from '../../components/Comment'

const NovelPage/*: NextPage*/ = ({props}) => {

    //const [novel, setNovel] = useState({view: "", tag: ["1", "2"], other: [{title: "1", author: "1", image: "https://image.novelpia.com/imagebox/cover/71ef870f96a30146e548d3c75dfe439e_458688_ori.file"}], notice:[], comment:[], explane: "새로운 삶이 이득같은 손해인지 손해같은 이득인지 아직도 장담할 수 없다. 하지만 나는 이 괴랄한 설정의 세계에 적응해야 한다.", user: "1"});
    const [pages, setPages] = useState([]);
    //<Link href={`/user/${props.author}`}>
    const page = 1;

    return(
        <>
        <S.Body>
            <S.Info>
                <S.BookCover src={props.image ? props.image : "https://image.novelpia.com/img/layout/readycover4.png"}/>
                <S.InfoDiv>
                    <S.TopInfo>
                        <S.Tittle>{props.title}</S.Tittle>
                        <S.AuthorDiv>
                            <S.Author>작가</S.Author>
                            <S.Name>{props.author}</S.Name>
                        </S.AuthorDiv>
                    </S.TopInfo>
                    <S.BottomInfo>
                        <S.BottomInfoDiv>
                            <S.InfoBorder>
                                <S.Day>{props.days}</S.Day>연재
                            </S.InfoBorder>
                            <S.InfoBorder>
                            <img src="https://novelpia.com/img/new/icon/count_view.png" />
                            <span>{props.view}명</span>
                            <img src="https://novelpia.com/img/new/icon/count_book.png" />
                            <span>{props.round.length}회차</span>
                            <img src="https://novelpia.com/img/new/icon/count_good.png" />
                            <span>{props.like}회</span>
                            </S.InfoBorder>
                        </S.BottomInfoDiv>
                        <S.Explane>{props.explane}</S.Explane>
                        <br/>
                        <S.TagDiv>
                            {props.tag ?
                            <b>태그 : {props.tag.map(i => {
                                return(
                                    <Link href={`/search/tag/date/1/${encodeURI(i)}`}>
                                        <span>{i}</span>
                                    </Link>
                                )
                            })}</b>
                            :
                            <></>
                            }
                        </S.TagDiv>
                    </S.BottomInfo>
                </S.InfoDiv>
            </S.Info>
            <S.Border>
                <S.ListDiv>
                <S.List>
                    <S.ListTittle>회차리스트</S.ListTittle>
                    <S.ListBorder>
                        <Round props={{lists: props.round, plus: props.plus}}/>
                    </S.ListBorder>
                </S.List>
                    <Comment lists={props.comments}/>
                </S.ListDiv>
            </S.Border>
            <S.PDiv>
                {pages.map(
                    (item, index) => {
                        return(
                            <S.Page key={index} bgcolor={item === page ? "royalblue" : "#eee"} color={item === page ? "white" : "black"}>
                            {item}
                            </S.Page>
                        )
                    }
                )}
            </S.PDiv>
        </S.Body>
        </>
    )
}

NovelPage.getInitialProps = async function(context){
    const { id } = context.query;
    const res = await axios.get(`https://uolib.herokuapp.com/novel/${id}`)
    const props = await res.data;
    return {props}
}

export default NovelPage

/*
type novelType = {
    view: number,
    tag: string[],
    other: any[],
    image: string,
    notice: any[],
    comment: any[],
    explane: string,
    user: string,
}*/


/*            <S.AuthorBorder>
                {/*
                {novel.other ?
                <S.ListTittle>작가의 다른 작품</S.ListTittle>
                :
                <S.ListTittle>추천작품</S.ListTittle>
                }
                <S.OtherBookList>
                    {novel.other.map(
                        (item: any, index: any) => {
                            <S.OtherBook key={index}>
                                <img src={item.image}/>
                                <div>
                                   <b>{item.title}</b> 
                                   <span>{item.author}</span>
                                </div>
                            </S.OtherBook>
                        }
                    )}
                </S.OtherBookList>
            }
            </S.AuthorBorder> */

/*                <S.Support>
                    <S.ListTittle>작가후원</S.ListTittle>
                    <S.SupportDiv>
                        <S.SupportButton onClick={()=>setOnSupport(true)}>작가후원하기</S.SupportButton>
                        <S.SupporterList>

                        </S.SupporterList>
                    </S.SupportDiv>
                </S.Support> */

/*        {onSupport ?
            <S.Background>
                <S.SupportModal>
                    <S.SupportModalHeader>
                        <h5>작가 후원</h5>
                        <svg onClick={()=>setOnSupport(false)} xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 0 24 24" width="28px" fill="#333"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
                    </S.SupportModalHeader>
                    <S.SupportModalBody>
                        <b>현재 보유 코인 (1000)</b>
                        <div>
                            <input type="number" onChange={(e)=>changePrice(e)} value={price}/>
                            <b>코인</b>
                        </div>
                    </S.SupportModalBody>
                    <S.SupportModalWarning>
                        후원 목적 이외에 욕설, 식사요청, 연락처공유, 작품내용변경요구, 타 서비스 제휴 요구등의 메세지 입력시 영구 사용정지가 될 수 있습니다.
                    </S.SupportModalWarning>
                    <S.SupportModalButtonDiv>
                        <button onClick={()=>support()}>후원하기</button>
                    </S.SupportModalButtonDiv>
                </S.SupportModal>
            </S.Background>
            :
            <></>
        } */

    //const {id} = router.query;
    //const data = props.data;
    /*
    useEffect(()=>{
        var p: number;

        if(query.p){
            p = query.p
        }
        else{
            p = 1;
        }
    
        axios.post(`/search?q=${String(query.q)}&p=${Number(p)}`)
            .then(res => {
                let m = res.props.count;
                setNovel(res.data)
                if(Number(query.p) <= 2){
                    p = pages;
                    if(Number(query.p) === 2){
                        p.unshift(2)
                    }
                    p.unshift(1)

                    setPages(p);
                }
                else{
                    var p = pages;
                    p.unshift(Number(query.p)-2, Number(query.p)-1, query.p)
                    setPages(p);
                }

                if(Number(query.p)+1 >= m){
                    if(Number(query.p) === m){
                        setPages([...pages, Number(query.p)])
                    }
                    else{
                        setPages([...pages, Number(query.p)+1])
                    }
                }
                else{
                    setPages([...pages, Number(query.p)+1, Number(query.p)+2]);
                }
            })
    },[])*/
/*
    const changePrice = (e: any) => {
        setPrice(e.target.value);
    }*/
/*
    const support = () => {
        if(!price){
            alert("후원금을 설정해 주십쇼.")
        }
        else{
            axios.post(`/support/${id}`)
                .then(res => alert(`후원 되었습니다. (${price}코인)`))
                .catch(err => {
                    if(err.status === 400){
                        alert("후원금이 모자랍니다.")
                    }
                    else if(err.status === 401){
                        alert("로그인을 먼저 해 주세요.");
                        //navigate('/login');
                    }
                })
        }
    }*/