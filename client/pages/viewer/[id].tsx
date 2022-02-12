import { useEffect, useState } from 'react'
import * as S from '../../styled/Viewer'
import $ from 'jquery'
import {connect} from 'react-redux';
import Link from 'next/link';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

type commentType = {
    userId: number,
    text: string,
}

const ViewerPage: NextPage<{}> = () => {

    const [onSetting, setOnSetting] = useState(false);
    const [status, setStatus] = useState("text");
    const [darkmode, setDarkmode] = useState(false);
    const [onInterface, setOnInterface] = useState(true);
    const [isPlus, setIsPlus] = useState(true);
    const novel = {next: 1, authorsword: 1, prev: 0, novelId: 1};
    const comment: commentType[] = [];

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

    const Body = () => {
        if(status === "text"){
            return(
            <S.Body dark={darkmode}>
                <img src="https://image.novelpia.com/imagebox/cover/389dc063c0e465e5a7f7e3f3ac04bddd_130337_ori.file"/>
                <S.Text>
                    123
                </S.Text>
                {novel.authorsword ?
                <S.AuthorsWords dark={darkmode}>
                    <b>작가의 말</b>
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
            <h1>회차리스트</h1>
                
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
                                <b>{i.userId}</b>
                            </S.Comment>
                        }
                    )}
                </S.CommentList>
            )
        }
    }

    const SettingModal = () => {
        return(
            <S.SettingModal>
            <S.SettingDiv>
                <span>폰트</span>
                <div>
                    <S.SettingButton></S.SettingButton>
                </div>
            </S.SettingDiv>
            <S.SettingDiv>
                <span>배경색상</span>
                <div>
                  <S.SettingButton></S.SettingButton>
                  <S.SettingButton></S.SettingButton>
                  <S.SettingButton></S.SettingButton>
                  <S.SettingButton></S.SettingButton>
                  <S.SettingButton></S.SettingButton>
                </div>
            </S.SettingDiv>
            <S.SettingDiv>
                <span>글자크기</span>
                <div>
                  <S.SettingButton></S.SettingButton>
                  <S.SettingButton></S.SettingButton>
                  <S.SettingButton></S.SettingButton>
                  <S.SettingButton></S.SettingButton>
                  <S.SettingButton></S.SettingButton>
                </div>
            </S.SettingDiv>
            <S.SettingDiv>
                <span>줄간격</span>
                <div>
                  <S.SettingButton></S.SettingButton>
                  <S.SettingButton></S.SettingButton>
                  <S.SettingButton></S.SettingButton>
                  <S.SettingButton></S.SettingButton>
                  <S.SettingButton></S.SettingButton>
                </div>
            </S.SettingDiv>
            <S.SettingDiv>
                <span>글자두께</span>
                <div>
                  <S.SettingButton></S.SettingButton>
                  <S.SettingButton></S.SettingButton>
                  <S.SettingButton></S.SettingButton>
                  <S.SettingButton></S.SettingButton>
                  <S.SettingButton></S.SettingButton>
                </div>
            </S.SettingDiv>
            <S.SettingDiv>
                <span>다크모드</span>
                <div>
                  <S.SettingButton></S.SettingButton>
                  <S.SettingButton></S.SettingButton>
                  <S.SettingButton></S.SettingButton>
                  <S.SettingButton></S.SettingButton>
                  <S.SettingButton></S.SettingButton>
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
    }

    return(
        <>
        {onInterface ?
        <S.Header dark={darkmode} className='interface'>
            <S.HeaderDiv>
                <S.LeftDiv>
                    <Link href={`/novel/${novel.novelId}`}>
                        <i className="fas fa-home fa-lg"></i>
                    </Link>
                    <S.Episode>EP.1</S.Episode>
                    <S.Title>123</S.Title>
                </S.LeftDiv>
                <S.RightDiv>
                    <S.ListSpan onClick={()=>{if(status !== "list"){setStatus("list")}else{setStatus("text")}}}><i className="fas fa-bars"/>목록</S.ListSpan>
                    <S.Setting>
                    <span onClick={()=>setOnSetting(!onSetting)}><i className="fas fa-cog"></i>설정</span>
                    {onSetting ?
                        <SettingModal/>
                        :
                        <></>
                    }
                    </S.Setting>
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
                {novel.prev ?
                <span><i className="fas fa-chevron-left" style={{marginRight: "5px"}}></i>이전화</span>
                :
                <span style={{color: "#ccc"}}><i className="fas fa-chevron-left" style={{marginRight: "5px"}}></i>이전화</span>
                }
                <span onClick={()=>{if(status !== "comment"){setStatus("comment")}else{setStatus("text")}}}><i className="far fa-comment-alt" style={{marginRight: "5px"}}></i>댓글</span>
                <span><i className="far fa-thumbs-up" style={{marginRight: "5px"}}></i>추천</span>
                <span><i className="far fa-heart" style={{marginRight: "5px"}}></i>선호</span>
                {novel.next ?
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

export default ViewerPage