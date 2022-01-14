import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as S from '../styled/User'

const UserEditPage = () => {

    const Toggle = () => {
        return(
            <S.Toggle selected={true}>
                <div></div>
            </S.Toggle>
        )
    }

    const params = useParams();

    const [user, setUser] = useState({type: "", image: "", id: 1});
    const [isImg, setIsImg] = useState(false);

    useEffect(()=>{
        axios.get('/user')
            .then(res => {
                setUser(res.data)
                
                if(res.data.type === "uolib"){
                    var img = new Image();
                    img.src = `https://uolib.herokuapp.com/bookcover/${res.data.id}`;

                    img.onload = function(){
                        setIsImg(true);
                    }
                }
            });
    },[])

    return(
        <S.Body>
            <S.EditTittle>
                <h4>유저 정보 설정/수정</h4>
            </S.EditTittle>
            <S.EditDiv>
                <S.EditCardDiv>
                    <S.EditCard>
                        <S.CardHeader>개인정보수정</S.CardHeader>
                        <S.CardBody>
                            <span>아이디: {user.id} (수정불가)</span>
                            {user.type === "google" ?
                                <img src={user.image}/>
                                :
                                <>
                                {isImg ?
                                    <img src={`https://uolib.herokuapp.com/bookcover/${user.id}`}/>
                                    :
                                    <img src={"https://phinf.pstatic.net/contact/20210430_217/1619765233604XypyT_PNG/avatar_profile.png"}/>
                                }
                                </>
                            }
                            <input type="file"/>
                            <span>닉네임</span>
                            <div>
                                <S.Input />
                                <button>수정</button>
                            </div>
                        </S.CardBody>
                    </S.EditCard>
                </S.EditCardDiv>
                <S.EditCardDiv>
                    <S.EditCard>
                        <S.CardHeader>서비스 이용설정</S.CardHeader>
                        <S.CardBody>
                            <div><Toggle /> 사이트 다크모드(야간모드)</div>
                            <div><Toggle /> 뷰어 다크모드(야간모드)</div>
                        </S.CardBody>
                    </S.EditCard>
                </S.EditCardDiv>
                <S.EditCardDiv>
                    <S.EditCard>
                        <S.CardHeader>수신알림 동의</S.CardHeader>
                        <S.CardBody>
                            <div>댓글 알람: <Toggle /></div>
                            <div>시스템 알림 수신 동의: <Toggle /></div>
                            <div>이벤트 알림 수신 동의: <Toggle /></div>
                            <div>야간 알림 수신 동의: <Toggle /></div>
                            <button>수정하기</button>
                        </S.CardBody>
                    </S.EditCard>
                    <S.EditCard>
                        <S.CardHeader>회원 탈퇴</S.CardHeader>
                        <S.CardBody>
                            <button style={{backgroundColor: "#ee4f4f"}}>탈퇴하기</button>
                        </S.CardBody>
                    </S.EditCard>
                </S.EditCardDiv>
            </S.EditDiv>
        </S.Body>
    )
}

export default UserEditPage