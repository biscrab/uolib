import { useEffect, useState } from 'react';
import * as S from '../styled/PageDiv'
import Link from 'next/link';
import { useRouter } from 'next/router';

const PageDiv = ({props}) => {

    const rotuer = useRouter();
    const { page } = rotuer.query;

    const getPage = () => {
        let p = Number(props.page);
        if(!p)
            p = 1;
        let l = [];
    
        if(p >= 3)
            l.push(p-2);
        
        if(p >= 2)
            l.push(p-1);
    
        l.push(p);
    
        if(p <= props.max-1)
            l.push(p+1);
    
        if(p <= props.max-2)
            l.push(p+2);
    
        return(l);
    }

    const [plist, setPlist] = useState([1]);
    
    useEffect(()=>{
        const l = getPage();
        setPlist(l);
        console.log(router);
    },[])

    return(
        <S.PageDiv>
            {props.page !== 1 ?
            <Link href={"/"}>
                <S.Page><i className="fas fa-chevron-left"></i></S.Page>
            </Link>
            :
            <S.Page><i className="fas fa-chevron-left"></i></S.Page>
            }
            {plist.map(
                (i, index) => {
                    return(
                        <S.Page key={index} selected={Number(props.page) === i || !props.page}>{i}</S.Page>
                    )
                }
            )}
            <S.Page><i className="fas fa-chevron-right"></i></S.Page>
        </S.PageDiv>
    )
}

export default PageDiv