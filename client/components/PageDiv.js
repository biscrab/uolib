import { useEffect, useState } from 'react';
import * as S from '../styled/PageDiv'
import Link from 'next/link';
import { useRouter } from 'next/router';

const PageDiv = ({props}) => {

    const router = useRouter();
    const {page, max} = props;

    const getPage = () => {
        let p = Number(page);
        
        if(!page)
            p = 1;

        let l = [];
    
        if(p >= 3)
            l.push(p-2);
        
        if(p >= 2)
            l.push(p-1);
    
        l.push(p);
    
        if(p <= max-1)
            l.push(p+1);
    
        if(p <= max-2)
            l.push(p+2);
    
        return(l);
    }

    const [plist, setPlist] = useState([]);
    
    useEffect(()=>{
        const l = getPage();
        setPlist(l);
        console.log(router.pathname);
    },[])

    const getQuery = (page) => {
        const valueArr = Object.values(router.query);
        const keyArr = Object.keys(router.query);
        let path = `/${router.pathname.split("/")[1]}`;
        valueArr.map((i, index) => {
            if(keyArr[index] !== "page")
                path += `/${i}`
            else
                path += `/${page}`
        })
        return path
    }

    return(
        <S.PageDiv>
            {page > 1 ?
            <Link href={getQuery(page-1)}>
                <S.Page><i className="fas fa-chevron-left"></i></S.Page>
            </Link>
            :
            <S.Page><i className="fas fa-chevron-left"></i></S.Page>
            }
            {plist.map(
                (i, index) => {
                    return(
                        <Link href={getQuery(i)}>
                            <S.Page key={index} selected={Number(page) === i || (!page && index === 0) }>{i}</S.Page>
                        </Link>
                    )
                }
            )}
            {page < max ?
            <Link href={getQuery(page-1)}>
                <S.Page><i className="fas fa-chevron-right"></i></S.Page>
            </Link>
            :
            <S.Page><i className="fas fa-chevron-right"></i></S.Page>
            }
        </S.PageDiv>
    )
}

export default PageDiv