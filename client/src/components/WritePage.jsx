import { useState, useRef, useEffect } from 'react'
import * as S from '../styled/Write'
import ContentEditable from 'react-contenteditable'
import $ from 'jquery'

const WritePage = () => {

    const [onBold, setOnBold] = useState(false);
    const [onImage, setOnImage] = useState(false);
    const [onEMenu, setOnEMenu] = useState(false);

    const text = useRef('');

    const handleChange = evt => {
        text.current = evt.target.value;
    };
    
    const handleBlur = () => {
        console.log(text.current);
    };

    useEffect(()=>{
        $("html").click(function(e){
            if(!$(".emenu").has(e.target).length){
                setOnEMenu(false);
            }
        })   
    })

    return(
        <>
        <S.Body>
            <S.BTittle>소설연재</S.BTittle>
            <S.Tittle placeholder='에피소드 제목을 입력해주세요'/>
            <S.SelectDiv>
                <S.Select></S.Select>
                <S.Select></S.Select>
                <S.Select></S.Select>
                <S.Select></S.Select>
                <S.Select></S.Select>
            </S.SelectDiv>
            <S.TextDiv>
                <S.SettingDiv>
                    <S.Setting selected={onBold} onClick={()=>setOnBold(!onBold)}><i class="fas fa-bold"></i></S.Setting>
                    <S.Setting onClick={()=>setOnImage(true)}><i class="far fa-image fa-lg"></i></S.Setting>
                    <S.Setting><i class="fas fa-italic"></i></S.Setting>
                    <S.Setting><i class="fas fa-underline"></i></S.Setting>
                    <S.SettingButton>
                    <S.Setting onClick={()=>setOnEMenu(!onEMenu)}>
                        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24" x="0"/></g><g><g><polygon points="19,9 20.25,6.25 23,5 20.25,3.75 19,1 17.75,3.75 15,5 17.75,6.25"/><polygon points="19,15 17.75,17.75 15,19 17.75,20.25 19,23 20.25,20.25 23,19 20.25,17.75"/><path d="M11.5,9.5L9,4L6.5,9.5L1,12l5.5,2.5L9,20l2.5-5.5L17,12L11.5,9.5z M9.99,12.99L9,15.17l-0.99-2.18L5.83,12l2.18-0.99 L9,8.83l0.99,2.18L12.17,12L9.99,12.99z"/></g></g></svg>
                    </S.Setting>
                    {onEMenu ?
                    <S.SettingSelectDiv class='emenu'>
                        <S.SettingSelect>테스트</S.SettingSelect>
                        <S.SettingSelect>테스트</S.SettingSelect>
                        <S.SettingSelect>테스트</S.SettingSelect>
                        <S.SettingSelect>테스트</S.SettingSelect>
                    </S.SettingSelectDiv>
                    :
                    <></>
                    }
                    </S.SettingButton>
                </S.SettingDiv>
                <ContentEditable className="text" html={text.current} onBlur={handleBlur} onChange={handleChange} />
            </S.TextDiv>
            <S.RTittle>
                <b>작가후기</b>
                <span>{`{작품제목}, {독자이름}, {작가이름} 등을 입력하시면 해당하는 이름으로 변환되어 표시됩니다.`}</span>
            </S.RTittle>
            <S.Review>

            </S.Review>
            <S.ButtonDiv>
                <S.CheckButton><i class="far fa-check-square"></i>맞춤법 검사</S.CheckButton>
                <S.RegistButton><i class="fas fa-pen"></i>소설 등록</S.RegistButton>
            </S.ButtonDiv>
        </S.Body>
        {onImage ?
        <S.Background>
            <S.ImageDiv className='imagediv'>
                <S.ImageHeader>
                    <h2>그림 삽입</h2>
                    <div onClick={()=>setOnImage(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 0 24 24" width="28px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
                    </div>
                </S.ImageHeader>
                <S.ImageBody>
                    <span>파일 선택</span>
                    <input type="file"/>
                    <span>사진 URL</span>
                    <input />
                </S.ImageBody>
                <S.ImageBottom>
                    <button>그림 삽입</button>
                </S.ImageBottom>
            </S.ImageDiv>
        </S.Background>
        :
        <></>
        }
        </>
    )
}

export default WritePage