import { useState } from 'react'
import * as S from '../../styled/MyBook'
import MyBook from '../../components/MyBook'
//import { NextPage } from 'next';
import Link from 'next/link'
import {useRouter} from 'next/router'
import axios from 'axios';
/*
type BookInterface = {
    id: number,
    title: string,
    author: string,
    image: string,
    explane: string,
    tag: string[];
}*/

const MyBookPage = ({props}) => {

    /*const lists : BookInterface[] = [{id: 1, title: "test", author: "이상운", explane: "123123", image: "https://image.novelpia.com/imagebox/cover/18fc3444c07e1ecadd65072b4bd08e28_47837_ori.thumb",tag: ["1", "2"]}];
*/
    const [selected, setSelected] = useState(1);

    const router = useRouter();
    const {type} = router.query;

    return(
        <S.Body>
            <S.SelectDiv>
                <Link href="/mybook/like">
                    <S.Select selected={type==="like" || !type}>선호작</S.Select>
                </Link>
                <Link href="/mybook/my">
                    <S.Select selected={type==="my"}>내작품</S.Select>
                </Link>
                <Link href="/mybook/donation">
                    <S.Select selected={type==="donation"}>후원목록</S.Select>
                </Link>
                <Link href="/mybook/last_view">
                    <S.Select selected={type==="last_view"}>최근 본 작품</S.Select>
                </Link>
                <Link href="/mybook/support">
                    <S.Select selected={type==="support"}>후원금 정산</S.Select>
                </Link>
            </S.SelectDiv>
            {type !== "support" ?
            <>
            <S.CountOfBook>
                총 0개의 작품
            </S.CountOfBook>
            {props ?
                <S.List>
                    <MyBook lists={props}/>
                </S.List>
                :
                <></>
                }
            </>
            :
            <S.Support>
                <div>후원금 정산</div>
                <ul>
                    
                </ul>
            </S.Support>
            }
        </S.Body>
    )
}

MyBookPage.getInitialProps = async function(context){
    const { type } = context.query;
    const res = await axios.get(`https://uolib.herokuapp.com/mybook/${type}`)
    const props = await res.data;
    console.log(res);
    return {props}
}

export default MyBookPage