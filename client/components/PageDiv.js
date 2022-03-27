import { useEffect, useState } from 'react';
import * as S from '../styled/PageDiv'

const PageDiv = (page, max) => {

    const getPage = () => {
        let p = Number(page);
        if(!p)
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

    const [plist, setPlist] = useState([1]);
    
    useEffect(()=>{
        const l = getPage(page, max);
        setPlist(l);
    },[])

    return(
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
    )
}

export default PageDiv