import * as S from '../../styled/PlusAgree'
import Book from '../../components/Book'
import axios from 'axios';
import { useRouter } from 'next/router';
import getToken from '../../components/getToken';

const PlusAgreePage = ({props}: {props: Object[]}) => {

    const router = useRouter()
    const {id} = router.query;

    const requestPlus = () => {
        axios.post(`/requestPlus/${id}`)
            .then(res => alert("플러스 신청이 완료되었습니다."))
            .catch(err => alert("에러"))
    }
/*
    useEffect(()=>{
        axios.get(`/requestPlus/${id}`)
    },[])*/

    return(
        <S.Body>
            <h4>플러스 전환 신청</h4>
            <S.BookDiv>
                <Book lists={props[0]}/>
            </S.BookDiv>
            <S.ButtonDiv>
                <button onClick={()=>requestPlus()}>플러스 신청</button>
            </S.ButtonDiv>
        </S.Body>
    )
}

PlusAgreePage.getInitialProps = async function(ctx: any){
    let res;
    const { id } = ctx.query;
    if(ctx.res){
        res = await axios.get(`https://uolib.herokuapp.com/mybook/${id}`, {headers: {Authorization: `Bearer ${getToken(ctx)}`}})
    }
    else{
        res = await axios.get(`https://uolib.herokuapp.com/mybook/${id}`)
    }
    const props = res.data;
    return {props}
}


/*            <S.StandardDiv>
                <div>
                    <h1>0</h1>
                    <span>연재회차 수</span>
                </div>
                <div>
                    <h1>O</h1>
                    <span>3000자 여부</span>
                </div>
                <div>
                    <h1>O</h1>
                    <span>정산정보 등록</span>
                </div>
            </S.StandardDiv> */

export default PlusAgreePage
/*
PlusAgreePage.getInitialProps = async(context: any) => {
    const {id} = context.query
    const res = await axios.get(`/plus_agree/${id}`);
    const props = res.data;    
    return{props}
}*/