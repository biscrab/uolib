import { useEffect } from 'react';
import * as S from '../styled/Top100'
//import { NextPage } from 'next';
import Link from 'next/link';
import {useRouter} from 'next/router'

const Top100Page = ({props}: any) => {

    const router = useRouter()
    const {type} = router.query;

    useEffect(()=>{
        //axios.get(location.pathname)

    },[])

    return(
        <S.Body>
            <S.SelectDiv>
                <Link href={"/top100/all"}>
                    <S.Select selected={type === "all" || !type}>전체</S.Select>
                </Link>
                <Link href={"/top100/monopoly"}>
                    <S.Select selected={type === "monopoly"}>독점</S.Select>
                </Link>
                <Link href={"/top100/complete"}>
                    <S.Select selected={type === "complete"}>완결</S.Select>
                </Link>
            </S.SelectDiv>
            <S.List>
                {props.length ?
                <>
                {props.map(
                (i: any, index: any) => {
                    return(
                        <S.Book key={index}>
                            <S.Rank>{index + 1}</S.Rank>
                            <Link href="/novel/1">
                            <S.BookImgDiv>
                                <img src={i.image ? i.image : "https://image.novelpia.com/img/layout/readycover4.png"}/>  
                            </S.BookImgDiv>
                            </Link>
                            <b>{i.title}</b>
                            <Link href="/user/1">
                                <S.Author>{i.author}</S.Author>
                            </Link>
                            <S.TypeDiv>
                                {i.plus ?
                                <S.Type color='#5232dd'>PLUS</S.Type>
                                :
                                <S.Type color='#166d95'>자유</S.Type> 
                                }
                                {i.monopoly ?
                                <S.Type color='#0d60d1'>독점</S.Type>
                                :
                                <></>
                                }
                                {i.complete ?
                                <S.Type color='black'>완결</S.Type>  
                                :
                                <></>
                                }
                            </S.TypeDiv>
                        </S.Book>
                    )
                })}
                </>
                :
                <S.Null>
                    작품이 존재하지 않습니다.
                </S.Null>
                }
            </S.List>
        </S.Body>
    )
}

export default Top100Page

/*                <Link href={"/top100/new"}>
                    <S.Select selected={type === "new"}>신작</S.Select>
                </Link> */