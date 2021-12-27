import * as S from '../styled/Alarm'

const AlarmPage = () => {
    return(
        <S.Body>
            <S.SelectDiv>
                <S.Select selected>댓글알림</S.Select>
                <S.Select selected>구독알림</S.Select>
                <S.Select selected>시스템알림</S.Select>
                <S.Select selected>이벤트알림</S.Select>
            </S.SelectDiv>
        </S.Body>
    )
}

export default AlarmPage