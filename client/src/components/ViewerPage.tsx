import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import * as S from '../styled/Viewer'
import $ from 'jquery'

const ViewerPage = () => {

    const [onSetting, setOnSetting] = useState(false);
    const [onList, setOnList] = useState(false);
    const [darkmode, setDarkmode] = useState(false);
    const [onInterface, setOnInterface] = useState(true);
    const params = useParams();
    const novel : number = 1;

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

    return(
        <>
        {onInterface ?
        <S.Header dark={darkmode} className='interface'>
            <S.HeaderDiv>
                <NavLink to={`/novel/${novel}`}>
                    <i className="fas fa-home fa-lg"></i>
                </NavLink>
                <span>123</span>
                <div>
                <span>목록</span>
                <S.Setting>
                <span onClick={()=>setOnSetting(!onSetting)}><i className="fas fa-cog"></i>설정</span>
                {onSetting ?
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
                    :
                    <></>
                }
                </S.Setting>
                </div>
            </S.HeaderDiv>
        </S.Header>
        :
        <></>
        }
        {onList ?
        <S.ListBody dark={darkmode}>
            
        </S.ListBody>
        :
        <>
        <S.Body dark={darkmode}>
        <img src="https://image.novelpia.com/imagebox/cover/389dc063c0e465e5a7f7e3f3ac04bddd_130337_ori.file"/>
        <div>
            123
        </div>
        <S.AuthorsWords dark={darkmode}>
            
        </S.AuthorsWords>
        <S.NextButton>다음 화</S.NextButton>
        </S.Body>
        {onInterface ?
        <S.Bottom dark={darkmode} className='interface'>
            <div>
                <span>이전화</span>
                <span>다음화</span>
            </div>
        </S.Bottom>
        :
        <></>
        }
        </>
        }
        </>
    )
}

export default ViewerPage