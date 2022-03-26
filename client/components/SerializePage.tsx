import * as S from '../styled/Search'
import { useEffect, useState} from 'react';
import Book from './Book'
//import axios from 'axios';
//import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getPage } from '../components/getPage'

const SerializePage = ({props}: any) => {

    //const list : BookInterface[] = [{id: 1, title: "123", image: "https://image.novelpia.com/img/layout/readycover4.png", author: "", explane: "설명", tag:["1"]}];
    const tlist = ["공모전", "판타지", "현대", "라이트노벨", "하렘", "일상", "중세", "TS", "전생", "로맨스", "먼치킨", "아카데미", "SF", "드라마", "코미디", "이세계", "순애", "빙의", "남성향"]

    const router = useRouter();
    const {type, order, page, tag} = router.query;

    const plus = router.pathname === "/plus";

    const [plist, setPlist] = useState<number[]>([1]);
    
    useEffect(()=>{
        const l = getPage(page);
        setPlist(l);
    },[])

    const Category = () => {
        return(
            <>
            {tlist.map(
                (i, index) => {
                    return(
                        <div key={index}>
                        <Link href={`/${plus ? "plus" : "free"}/${type? type : "all"}/${order ? order : "date"}/1/${i}`}>
                            <S.Category selected={i === tag}>{i}</S.Category>
                        </Link>
                        </div>
                    )
                }
            )}
            </>
        )
    }

    const Check = () => {
        return(
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#5a35cd"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
        )
    }

    useEffect(()=>{ 
        const {type, order, page, tag} = router.query;
        console.log(`https://uolib.herokuapp.com${router.pathname.slice(0, 5)}/${type ? type : "all"}/${order ? order : "date"}/${page ? page : "1"}${tag ? `/${tag}` : ""}`);
        console.log(props);
    },[])

    /*        <S.Banner background="#eee"/> */

    return(
        <>
        <S.Body>
            <S.SelectDiv>
                <Link href={`/${plus ? "plus" : "free"}/all/${order ? order : "date"}/1`}>
                <S.Select selected={type === "all" || !type}>전체</S.Select>
                </Link>
                <Link href={`/${plus ? "plus" : "free"}/monopoly/${order ? order : "date"}/1`}>
                <S.Select selected={type === "monopoly"}>독점</S.Select>
                </Link>
                <Link href={`/${plus ? "plus" : "free"}/new/${order ? order : "date"}/1`}>
                <S.Select selected={type === "new"}>신작</S.Select>
                </Link>
                <Link href={`/${plus ? "plus" : "free"}/complete/${order ? order : "date"}/1`}>
                <S.Select selected={type === "complete"}>완결</S.Select>
                </Link>
            </S.SelectDiv>
            <S.Result>
                <b>총 {props.count}개의 작품</b>
                <div>
                    <Link href={`/${plus ? "plus" : "free"}/${type ? type : "all"}/date/1${tag ? `/${tag}` : ""}`}>
                    <div>
                        {order === "date" || !order ?
                        <Check />
                        :
                        <i className="fas fa-circle"></i>
                        }
                        <b>공개일자 순</b>
                    </div>
                    </Link>
                    <Link href={`/${plus ? "plus" : "free"}/${type ? type : "all"}/view/1${tag ? `/${tag}` : ""}`}>
                    <div>
                        {order === "view" ?
                            <Check />
                            :
                            <i className="fas fa-circle"></i>
                        }
                        <b>조회순</b>
                    </div>
                    </Link>
                    <Link href={`/${plus ? "plus" : "free"}/${type ? type : "all"}/like/1${tag ? `/${tag}` : ""}`}>
                    <div>
                        {order === "like" ?
                            <Check />
                            :
                            <i className="fas fa-circle"></i>
                        }
                        <b>추천순</b>
                    </div>
                    </Link>
                </div>
            </S.Result>
            <S.CategoryDiv>
                <Link href={`/${plus ? "plus" : "free"}/${type? type : "all"}/${order ? order : "date"}/1`}>
                    <S.Category selected={!tag}>전체</S.Category>
                </Link>
                <Category />
            </S.CategoryDiv>
            <S.List>
                {props.list[0] ?
                <Book lists={props.list}/>
                :
                <S.Null>
                    작품이 없습니다.
                </S.Null>
                }
            </S.List>
            <S.PageDiv>
                <S.Page><i className="fas fa-chevron-left"></i></S.Page>
                {plist.map(
                    (i, index) => {
                        return(
                            <S.Page key={index} selected={Number(page) === i || !page}>{i}</S.Page>
                        )
                    }
                )}
                <S.Page><i className="fas fa-chevron-right"></i></S.Page>
            </S.PageDiv>
    </S.Body>
    </>
    )
}

export default SerializePage