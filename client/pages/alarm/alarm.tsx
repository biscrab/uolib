import * as S from '../styled/Alarm'
import Link from "next/link";

type AlarmType = {
    title: string,
    contents: string,
    id: string
}

const AlarmPage = () => {
    
    const params = useParams();
    const lists: AlarmType[] = [{title: "123", contents: "string", id: "1"}];

    const path = () => {
        if(params.type === ("comment" || "subscribe")){

        }
        else if (params.type === "1"){

        }
    }

    return(
        <S.Body>
            <S.SelectDiv>
                <Link to="/alarm/comment">
                    <S.Select selected={params.type==="comment" || !params.type}>댓글알림</S.Select>
                </Link>
                <Link to="/alarm/subscribe">
                    <S.Select selected={params.type==="subscribe"}>구독알림</S.Select>
                </Link>
                <Link to="/alarm/system">
                    <S.Select selected={params.type==="system"}>시스템알림</S.Select>
                </Link>
                <Link to="/alarm/event">
                    <S.Select selected={params.type==="event"}>이벤트알림</S.Select>
                </Link>
            </S.SelectDiv>
            <S.List>
                {lists.map(i => {
                    return(
                        <Link to={`/${path}/${i.id}`}>
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
                    )
                })}
            </S.List>
        </S.Body>
    )
}

export default AlarmPage