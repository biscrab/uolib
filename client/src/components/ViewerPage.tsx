import { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import * as S from '../styled/Viewer'

const ViewerPage = () => {

    const [onSetting, setOnSetting] = useState(false);
    const params = useParams();
    const novel : number = 1;

    return(
        <>
        <S.Header>
            <S.HeaderDiv>
                <NavLink to={`/novel/${novel}`}>
                    <i className="fas fa-home"></i>
                </NavLink>
                <span>123</span>
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
            </S.HeaderDiv>
        </S.Header>
        <S.Body>
        <img src="https://image.novelpia.com/imagebox/cover/389dc063c0e465e5a7f7e3f3ac04bddd_130337_ori.file"/>
        <div>
            123
        </div>
        </S.Body>
        <S.Bottom>
            <div>
                <span>이전화</span>
                <span>다음화</span>
            </div>
        </S.Bottom>
        </>
    )
}

export default ViewerPage