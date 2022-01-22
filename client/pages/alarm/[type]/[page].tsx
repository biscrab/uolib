import * as S from '../../../styled/Alarm'
import Link from "next/link";
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

type AlarmType = {
    title: string,
    contents: string,
    id: string
}

const AlarmPage = () => {

    const router = useRouter()
    const {type, page} = router.query;

    const lists: AlarmType[] = [{title: "123", contents: "string", id: "1"}];

    const path = () => {
        if(type === ("comment" || "subscribe")){

        }
        else if (type === "1"){

        }
    }

    const max = 5;

    const [plist, setPlist] = useState([1]);

    useEffect(()=>{
        var p;
        if(!page)
            p = 1;
        else
            p = Number(page);
            
        var l = [];

        if(p >= 3)
            l.push(p-2);
        
        if(p >= 2)
            l.push(p-1);

        l.push(p);

        if(p <= max-1)
            l.push(p+1);

        if(p <= max-2)
            l.push(p+2);
        
        console.log(l);
        setPlist(l);
    },[page])

    return(
        <S.Body>
            <S.SelectDiv>
                <Link href="/alarm/comment">
                    <S.Select selected={type==="comment" || !type}>댓글알림</S.Select>
                </Link>
                <Link href="/alarm/subscribe">
                    <S.Select selected={type==="subscribe"}>구독알림</S.Select>
                </Link>
                <Link href="/alarm/system">
                    <S.Select selected={type==="system"}>시스템알림</S.Select>
                </Link>
                <Link href="/alarm/event">
                    <S.Select selected={type==="event"}>이벤트알림</S.Select>
                </Link>
            </S.SelectDiv>
            <S.List>
                {lists.map((i, index) => {
                    return(
                        <div key={index}>
                        <Link href={`/${path}/${i.id}`}>
                        <S.Alarm>
                            <img src="https://novelpia.com/img/new/menu/alarm.png"/>
                            <div>
                            <b>{i.title}</b>
                            <S.AlarmContents>
                            {i.contents}
                            </S.AlarmContents>
                            </div>
                        </S.Alarm>
                        </Link>
                        </div>
                    )
                })}
            </S.List>
            <S.PageDiv>
                <S.Page><i className="fas fa-chevron-left"></i></S.Page>
                {plist.map(
                    (i, index) => {
                        return(
                            <S.Page key={index} selected={Number(page) === i}>{i}</S.Page>
                        )
                    }
                )}
                <S.Page><i className="fas fa-chevron-right"></i></S.Page>
            </S.PageDiv>
        </S.Body>
    )
}

export default AlarmPage