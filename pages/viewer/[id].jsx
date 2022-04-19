import { useEffect, useState, useRef, useCallback } from 'react'
import * as S from '../../styled/Viewer'
import $ from 'jquery'
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios'
import Round from '../../components/Round'
import getToken from '../../components/getToken';
import { getCookie } from 'cookies-next';
/*
type commentType = {
    userId: number,
    text: string,
}

type Readers = {
    authorsword: string,
}*/
    //const [darkmode, setDarkmode] = useState(false);

const ViewerPage = ({props}) => {

    const { id, novel, text, title, round, episode, plus, authorsword, comment, isLikedRound, isLikedNovel} = props;
    const [status, setStatus] = useState("text");
    const [onInterface, setOnInterface] = useState(true);
    const [like, setLike] = useState({round: isLikedRound, novel: isLikedNovel});
    const [commentText, setCommentText] = useState("123");
    const textRef = useRef();
    //const commentRef = useRef();
    const token = getCookie("uolib_token");

    const router = useRouter();

    useEffect(()=>{
        $('html').click(function(e){
            if(!$(".interface").has(e.target).length && !$(".commentInput").has(e.target).length)
                setOnInterface(!onInterface)
        })
    })

    useEffect(()=>{
        if(status === "text"){
            let newElement = document.createElement('div');
            newElement.innerHTML = text;
            textRef.current.appendChild(newElement);
        }
    },[status, router])

    useCallback(()=>{
        window.scrollTo(0, 0);
    },[status])

    const getNextPage = (p) => {
        let eid;
        round.map(i =>{
            console.log(i);
            if(i.episode === episode+p)
                eid = i.id;
        })
        return eid;
    }

    const registComment = () => {
        axios.post(`/novel/comment/${id}`)
    }

    const Body = () => {
    if(status === "list"){
            return(
            <S.ListBody>
                <h2>회차리스트</h2>
                <ul>
                    <Round props={{lists: round, plus: plus}}/>
                </ul>
            </S.ListBody>
            )
        }
        else{
            return(
                <></>
            )
        }
    }

    const likeRound = () => {
        axios.post(`/round/like/${id}`, {headers: {Authorization: `Bearer ${token}`}})
        .then(res => setLike({...like, round: res.data}))
        .catch(err => alert("에러"))
    }

    const likeNovel = () => {
        axios.post(`/novel/like/${id}`, {headers: {Authorization: `Bearer ${token}`}})
        .then(res => setLike({...like, novel: res.data}))
        .catch(err => alert("에러"))
    }

    const Bottom = () => {
        return(            
        <S.Bottom className='interface'>
            <div>
                {episode > 1 ?
                    <Link href={`/viewer/${getNextPage(-1)}`}>
                        <S.RightSpan>
                            <i className="fas fa-chevron-left"/>
                            이전화
                        </S.RightSpan>
                    </Link>
                    :
                    <S.RightSpan style={{color: "#ccc"}}><i className="fas fa-chevron-left"/>
                        이전화
                    </S.RightSpan>
                }
                <S.RightSpan onClick={()=>{if(status !== "comment"){setStatus("comment")}else{setStatus("text")}}}>
                    <i className="far fa-comment-alt"/>
                    댓글
                </S.RightSpan>
                <S.RightSpan onClick={()=>likeRound()} like={like.round}>
                    <i className="far fa-thumbs-up"/>
                    추천
                </S.RightSpan>
                <S.RightSpan onClick={()=>likeNovel()} like={like.novel}>
                    <i className="far fa-heart"/>
                    선호
                </S.RightSpan>
                {episode < round.length ?
                    <Link href={`/viewer/${getNextPage(1)}`}>
                        <S.LeftSpan>
                            다음화
                            <i className="fas fa-chevron-right"/>
                        </S.LeftSpan>
                    </Link>
                    :
                    <S.LeftSpan style={{color: "#ccc"}}>
                        다음화
                        <i className="fas fa-chevron-right"/>
                    </S.LeftSpan>
                }
            </div>
        </S.Bottom>
        )
    }

    return(
        <>
            {onInterface ?
                <S.Header className='interface'>
                    <S.HeaderDiv>
                        <S.LeftDiv>
                            <Link href={`/novel/${novel}`}>
                                <i className="fas fa-home fa-lg"></i>
                            </Link>
                            <S.Episode>EP.{episode}</S.Episode>
                            <S.Title>{title}</S.Title>
                        </S.LeftDiv>
                        <S.RightDiv>
                            <S.ListSpan onClick={()=>{if(status !== "list"){setStatus("list")}else{setStatus("text")}}}><i className="fas fa-bars"/>목록</S.ListSpan>
                        </S.RightDiv>
                    </S.HeaderDiv>
                </S.Header>
                :
                <></>
            }
            <Body />
            {status === "text" ?
            <S.Body>
                <img src={0 ? 0 : "https://image.novelpia.com/img/layout/readycover4.png"}/>
                <S.Text ref={textRef} />
                {authorsword ?
                    <S.AuthorsWords>
                        <b>작가의 말</b>
                        {authorsword}
                    </S.AuthorsWords>
                :
                <></>
                }
                {episode < round.length ?
                    <Link href={`/round/${getNextPage(1)}`}>
                        <S.NextButton>다음 화</S.NextButton>
                    </Link>
                :
                <></>
                }
            </S.Body>
            :
            <></>
            }
            {status === "comment" ?
                <S.CommentList>
                    <S.ContentsTitle>댓글 수({comment.length})</S.ContentsTitle>
                    <S.CommentInputDiv>
                        <textarea onChange={(e)=>setCommentText(e.target.value)} value={comment}/>
                        <button onClick={()=>registComment()}>등록</button>
                    </S.CommentInputDiv>
                    {comment.map(
                        i => {
                            <S.Comment>
                                <b>{i.user}</b>
                            </S.Comment>
                        }
                    )}
                </S.CommentList>
                :
                <></>
            }
            {onInterface ?
                <Bottom/>
                :
                <></>
            }
            <>
            {plus && episode > 15 ?
                <S.Background>
                    <S.PlusModal>
                        <i className="fas fa-home"></i>홈
                        <img src={`https://uolib.herokuapp.com/bookcover/${id}`}/>
                        <span>PLUS 멤버십 가입이<br />필요한 회차 입니다.</span>
                        <button>PLUS 가입</button>
                    </S.PlusModal>
                </S.Background>
                :
                <></>
            }
            </>
        </>
    )
}

ViewerPage.getInitialProps = async function(ctx){
    const {id} = ctx.query;
    let res;
    if(ctx.res){
        res = await axios.get(`https://uolib.herokuapp.com/round/${id}`, {headers: {Authorization: `Bearer ${getToken(ctx)}`}})
    }
    else{
        res = await axios.get(`https://uolib.herokuapp.com/round/${id}`)
    }
    const props = res.data;
    return {props}
}

export default ViewerPage

/*
    document.addEventListener('scroll', function() {
        setOnInterface(false);
    })*/
    /*
    useEffect(()=>{
        if(darkmode){
            document.body.style.backgroundColor="black";
        }
        else{
            document.body.style.backgroundColor="white";
        }
    },[darkmode])*/


/*                    <S.Setting>
                    <span onClick={()=>setOnSetting(!onSetting)}><i className="fas fa-cog"></i>설정</span>
                    {onSetting ?
                        <SettingModal/>
                        :
                        <></>
                    }
                    </S.Setting> */

/*    const SettingModal = () => {
        return(
            <S.SettingModal>
            <S.SettingDiv>
                <span>폰트</span>
                <div>
                  <S.SettingButton>가</S.SettingButton>
                  <S.SettingButton>가</S.SettingButton>
                  <S.SettingButton>가</S.SettingButton>
                  <S.SettingButton>가</S.SettingButton>
                  <S.SettingButton>가</S.SettingButton>
                </div>
            </S.SettingDiv>
            <S.SettingDiv>
                <span>배경색상</span>
                <div>
                  <S.SettingButton></S.SettingButton>
                  <S.SettingButton style={{backgroundColor: "#eee"}}></S.SettingButton>
                  <S.SettingButton style={{backgroundColor: "#fbffd5"}}></S.SettingButton>
                  <S.SettingButton style={{backgroundColor: "#cdfac7"}}></S.SettingButton>
                  <S.SettingButton style={{backgroundColor: "#d9f5ff"}}></S.SettingButton>
                </div>
            </S.SettingDiv>
            <S.SettingDiv>
                <span>글자크기</span>
                <div>
                  <S.SettingButton style={{fontSize: "13px"}}>가</S.SettingButton>
                  <S.SettingButton style={{fontSize: "14px"}}>가</S.SettingButton>
                  <S.SettingButton style={{fontSize: "15px"}}>가</S.SettingButton>
                  <S.SettingButton style={{fontSize: "16px"}}>가</S.SettingButton>
                  <S.SettingButton style={{fontSize: "17px"}}>가</S.SettingButton>
                </div>
            </S.SettingDiv>
            <S.SettingDiv>
                <span>줄간격</span>
                <div>
                  <S.SettingButton>130</S.SettingButton>
                  <S.SettingButton>160</S.SettingButton>
                  <S.SettingButton>200</S.SettingButton>
                  <S.SettingButton>250</S.SettingButton>
                  <S.SettingButton>280</S.SettingButton>
                </div>
            </S.SettingDiv>
            <S.SettingDiv>
                <span>글자두께</span>
                <div>
                  <S.SettingButton>가</S.SettingButton>
                  <S.SettingButton>가</S.SettingButton>
                  <S.SettingButton>가</S.SettingButton>
                  <S.SettingButton>가</S.SettingButton>
                  <S.SettingButton>가</S.SettingButton>
                </div>
            </S.SettingDiv>
            <S.SettingDiv>
                <span>다크모드</span>
                <div>
                  <S.SettingButton>미사용</S.SettingButton>
                  <S.SettingButton>사용</S.SettingButton>
                </div>
            </S.SettingDiv>
            <S.SettingDiv>
                <span>효과</span>
                <div>
                  <S.SettingButton></S.SettingButton>
                  <S.SettingButton></S.SettingButton>
                  <S.SettingButton></S.SettingButton>
                  <S.SettingButton></S.SettingButton>
                  <S.SettingButton></S.SettingButton>
                </div>
            </S.SettingDiv>
        </S.SettingModal>
        )
    } */