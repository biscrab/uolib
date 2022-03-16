import { useEffect, useState, useRef } from 'react'
import * as S from '../../styled/Viewer'
import $ from 'jquery'
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios'
/*
type commentType = {
    userId: number,
    text: string,
}

type Readers = {
    authorsword: string,
}*/

const ViewerPage = ({props}) => {

    const [status, setStatus] = useState("text");
    const [darkmode, setDarkmode] = useState(false);
    const [onInterface, setOnInterface] = useState(true);
    const [isPlus, setIsPlus] = useState(true);
    const comment/*: commentType[]*/ = [];
    const textRef = useRef();

    const router = useRouter();
    const {id} = router.query;
/*
    document.addEventListener('scroll', function() {
        setOnInterface(false);
    })*/

    useEffect(()=>{
        if(darkmode){
            document.body.style.backgroundColor="black";
        }
        else{
            document.body.style.backgroundColor="white";
        }
    },[darkmode])

    useEffect(()=>{
        $('html').click(function(e){if(!$(".interface").has(e.target).length)setOnInterface(!onInterface)})

    })

    useEffect(()=>{
        let newElement = document.createElement('div');
        newElement.innerHTML = props.text;
        textRef.current.appendChild(newElement);
    },[])

    const Body = () => {
        if(status === "text"){
            return(
            <S.Body dark={darkmode}>
                <img src={props.image}/>
                <S.Text ref={textRef} />
                {props.authorsword ?
                <S.AuthorsWords dark={darkmode}>
                    <b>작가의 말</b>
                    {props.authorsword}
                </S.AuthorsWords>
                :
                <></>
                }
                <S.NextButton>다음 화</S.NextButton>
            </S.Body>
            )
        }
        else if(status === "list"){
            return(
            <S.ListBody dark={darkmode}>
                <h2>회차리스트</h2>
                <ul>
                    <Link href={`/viewer/${1}`}>
                        <S.Round notice={i.type == "notice"}>
                            <S.RoundDiv>
                                <S.RLeft>
                                    <S.TittleDiv>
                                        {i.plus ?
                                        <S.Price color={"#5232dd"}>PLUS</S.Price>
                                        :
                                        <S.Price color={"#166d95"}>무료</S.Price>
                                        }
                                        <S.RTittle>{i.title}</S.RTittle>
                                    </S.TittleDiv>
                                    <S.RInfo>
                                    <span><i className="fas fa-user"></i>3000</span>
                                    <span><i className="fas fa-comment-alt"></i>400</span>
                                    <span><i className="fas fa-thumbs-up"></i>1</span>
                                    </S.RInfo>
                                </S.RLeft>
                                <S.RDate>{props.rdate}</S.RDate>
                            </S.RoundDiv>
                        </S.Round>
                    </Link>
                </ul>
            </S.ListBody>
            )
        }
        else{
            return(
                <S.CommentList>
                    <S.ContentsTitle>댓글 수(0)</S.ContentsTitle>
                    <S.CommentInputDiv>
                        <textarea />
                        <button>등록</button>
                    </S.CommentInputDiv>
                    {comment.map(
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

    return(
        <>
        {onInterface ?
        <S.Header dark={darkmode} className='interface'>
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
        <S.Bottom dark={darkmode} className='interface'>
            <div>
                {props.prev ?
                <span><i className="fas fa-chevron-left" style={{marginRight: "5px"}}></i>이전화</span>
                :
                <span style={{color: "#ccc"}}><i className="fas fa-chevron-left" style={{marginRight: "5px"}}></i>이전화</span>
                }
                <span onClick={()=>{if(status !== "comment"){setStatus("comment")}else{setStatus("text")}}}><i className="far fa-comment-alt" style={{marginRight: "5px"}}></i>댓글</span>
                <span><i className="far fa-thumbs-up" style={{marginRight: "5px"}}></i>추천</span>
                <span><i className="far fa-heart" style={{marginRight: "5px"}}></i>선호</span>
                {props.next ?
                <span>다음화<i className="fas fa-chevron-right" style={{marginLeft: "5px"}}></i></span>
                :
                <span style={{color: "#ccc"}}>다음화<i className="fas fa-chevron-right" style={{marginLeft: "5px"}}></i></span>
                }
            </div>
        </S.Bottom>
        :
        <></>
        }
        <>
        {!isPlus ?
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

ViewerPage.getInitialProps = async function(context){
    const {id} = context.query;
    const res = await axios.get(`https://uolib.herokuapp.com/round/${id}`)
    const props = await res.data;
    return {props}
}

export default ViewerPage

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