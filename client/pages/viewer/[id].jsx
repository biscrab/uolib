import { useEffect, useState, useRef } from 'react'
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

    const [status, setStatus] = useState("text");
    const [onInterface, setOnInterface] = useState(true);
    const [like, setLike] = useState({round: props.isLikedRound, novel: props.isLikedNovel});
    const [comment, setComment] = useState("");
    const textRef = useRef();
    const token = getCookie("uolib_token");

    const router = useRouter();
    const {id} = router.query;

    useEffect(()=>{
        $('html').click(function(e){
            if(!$(".interface").has(e.target).length || !$(".commentInput").has(e.target).length)
                setOnInterface(!onInterface)
        })
    })

    useEffect(()=>{
        window.scrollTo(0, 0);
        if(status === "text"){
            let newElement = document.createElement('div');
            newElement.innerHTML = props.text;
            textRef.current.appendChild(newElement);
        }
    },[status])

    const getNextPage = (page) => {
        const round = props.round;
        let id;
        round.map(i =>{
            if(i.episode+page === props.episode)
                id = i.id;
        })
        return id;
    }

    const registComment = () => {
        axios.post(`/novel/comment/${id}`)
    }

    const Body = () => {
        if(status === "text"){
            return(
            <S.Body>
                <img src={0 ? 0 : "https://image.novelpia.com/img/layout/readycover4.png"}/>
                <S.Text ref={textRef} />
                {props.authorsword ?
                <S.AuthorsWords>
                    <b>작가의 말</b>
                    {props.authorsword}
                </S.AuthorsWords>
                :
                <></>
                }
                {props.episode < props.round.length ?
                <Link href={`/round/${getNextPage(1)}`}>
                    <S.NextButton>다음 화</S.NextButton>
                </Link>
                :
                <></>
                }
            </S.Body>
            )
        }
        else if(status === "list"){
            return(
            <S.ListBody>
                <h2>회차리스트</h2>
                <ul>
                    <Round props={{lists: props.round, plus: props.plus}}/>
                </ul>
            </S.ListBody>
            )
        }
        else{
            return(
                <S.CommentList>
                    <S.ContentsTitle>댓글 수({props.comment.length})</S.ContentsTitle>
                    <S.CommentInputDiv>
                        <textarea className='commentInput' onChange={(e)=>setComment(e.target.value)} value={comment}/>
                        <button onClick={()=>registComment()}>등록</button>
                    </S.CommentInputDiv>
                    {props.comment.map(
                        i => {
                            <S.Comment>
                                <b>{i.user}</b>
                            </S.Comment>
                        }
                    )}
                </S.CommentList>
            )
        }
    }

    const likeRound = () => {
        axios.post(`/round/like/${id}`, {headers: {Authorization: `Bearer ${token}`}})
    }

    const likeNovel = () => {
        axios.post(`/novel/like/${id}`, {headers: {Authorization: `Bearer ${token}`}})
    }

    const Bottom = () => {
        return(            
        <S.Bottom className='interface'>
        <div>
            {props.episode > 1 ?
                <Link href={`/viewer/${getNextPage(-1)}`}>
                    <span>
                        <i className="fas fa-chevron-left" style={{marginRight: "5px"}}/>
                        이전화
                    </span>
                </Link>
                :
                <span style={{color: "#ccc"}}><i className="fas fa-chevron-left" style={{marginRight: "5px"}}/>
                    이전화
                </span>
            }
            <span onClick={()=>{if(status !== "comment"){setStatus("comment")}else{setStatus("text")}}}>
                <i className="far fa-comment-alt" style={{marginRight: "5px"}}/>
                댓글
            </span>
            <span onClick={()=>likeRound()}>
                <i className="far fa-thumbs-up" style={{marginRight: "5px"}}/>
                추천
            </span>
            <span onClick={()=>likeNovel()}>
                <i className="far fa-heart" style={{marginRight: "5px"}}/>
                선호
            </span>
            {props.episode < props.round.length ?
                <Link href={`/viewer/${getNextPage(1)}`}>
                    <span>
                        다음화
                        <i className="fas fa-chevron-right" style={{marginLeft: "5px"}}/>
                    </span>
                </Link>
                :
                <span style={{color: "#ccc"}}>
                    다음화
                    <i className="fas fa-chevron-right" style={{marginLeft: "5px"}}/>
                </span>
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
                            <Link href={`/novel/${props.novel}`}>
                                <i className="fas fa-home fa-lg"></i>
                            </Link>
                            <S.Episode>EP.{props.episode}</S.Episode>
                            <S.Title>{props.title}</S.Title>
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
                {onInterface ?
                    <Bottom/>
                    :
                    <></>
                }
                <>
                {props.plus && props.episode > 15 ?
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