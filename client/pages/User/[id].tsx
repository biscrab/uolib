import * as S from '../../styled/User'
import { NextPage } from 'next';
import axios from 'axios';

const UserPage: NextPage<{}> = (props: any) => {
    return(
        <>
        {props.data ?
        <S.Body>
            <S.NameDiv>
            <span><b>유저</b>님의 회원카드</span>
            <S.Profile src="https://phinf.pstatic.net/contact/20210430_217/1619765233604XypyT_PNG/avatar_profile.png" />
            </S.NameDiv>
            <S.BodyDiv>
            <S.Info>
                <S.Card>
                    <S.CardHeader>{props.data.name}이 연재하는 소설</S.CardHeader>
                    <S.CardBody>
                        연재중인 소설이 없습니다.
                    </S.CardBody>
                </S.Card>
                <S.Card>
                    <S.CardHeader>{props.data.name}이 선호하는 소설</S.CardHeader>
                    <S.CardBody>
                        연재중인 소설이 없습니다.
                    </S.CardBody>
                </S.Card>
                <S.Card>
                    <S.CardHeader>{props.data.name}님의 후원작가 목록</S.CardHeader>
                    <S.CardBody>
                        연재중인 소설이 없습니다.
                    </S.CardBody>
                </S.Card>
            </S.Info>
            <S.Comment>
                <S.Card>
                    <S.CardHeader>{props.data.name}이 선호하는 소설</S.CardHeader>
                    <S.CardBody>
                        연재중인 소설이 없습니다.
                    </S.CardBody>
                </S.Card>
            </S.Comment>
            </S.BodyDiv>
        </S.Body>
        :
        <></>
        }
        </>
    )
}

UserPage.getInitialProps = async function(context){
    const res = await axios.get(`https://uolib.herokuapp.com/user/0`)
    const data = await res.data;
    if(!data){
        alert("잘못된 유저 아이디 입니다.");
        location.href ='/';
    }   
    return {
        props : {data}
    }
}

export default UserPage