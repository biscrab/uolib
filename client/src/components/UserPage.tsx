import * as S from '../styled/User'

const UserPage = () => {
    return(
        <S.Body>
            <S.Info>
                <S.Card>
                    <S.CardHeader>이 연재하는 소설</S.CardHeader>
                    <S.CardBody>
                        연재중인 소설이 없습니다.
                    </S.CardBody>
                </S.Card>
                <S.Card>
                    <S.CardHeader>이 선호하는 소설</S.CardHeader>
                    <S.CardBody>
                        연재중인 소설이 없습니다.
                    </S.CardBody>
                </S.Card>
                <S.Card>
                    <S.CardHeader>님의 후원작가 목록</S.CardHeader>
                    <S.CardBody>
                        연재중인 소설이 없습니다.
                    </S.CardBody>
                </S.Card>
            </S.Info>
            <S.Comment>
                <S.Card>
                    <S.CardHeader>이 선호하는 소설</S.CardHeader>
                    <S.CardBody>
                        연재중인 소설이 없습니다.
                    </S.CardBody>
                </S.Card>
            </S.Comment>
        </S.Body>
    )
}

export default UserPage