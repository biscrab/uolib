import { useState } from 'react'
import * as S from '../styled/Write'

const WritePage = () => {

    const [onBold, setOnBold] = useState(false);

    return(
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
                    <S.Setting selected={onBold} onClick={()=>setOnBold(!onBold)}>B</S.Setting>
                </S.SettingDiv>
                <S.Text contenteditable="true" />
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
    )
}

export default WritePage