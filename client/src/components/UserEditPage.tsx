import * as S from '../styled/User'

const UserEditPage = () => {

    const Toggle = () => {
        return(
            <S.Toggle selected={true}>
                <div></div>
            </S.Toggle>
        )
    }

    return(
        <S.Body>
            <S.EditTittle>
                <h4>유저 정보 설정/수정</h4>
            </S.EditTittle>
            <S.EditDiv>
                <S.EditCard>
                    <S.CardHeader>개인정보수정</S.CardHeader>
                    <S.CardBody></S.CardBody>
                </S.EditCard>
                <S.EditCard>
                    <S.CardHeader>서비스 이용설정</S.CardHeader>
                    <S.CardBody>
                        <Toggle />
                    </S.CardBody>
                </S.EditCard>
                <S.EditCard>
                    <S.CardHeader>수신알림 동의</S.CardHeader>
                    <S.CardBody></S.CardBody>
                </S.EditCard>
            </S.EditDiv>
        </S.Body>
    )
}

export default UserEditPage