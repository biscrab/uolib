import { NavLink, useParams } from 'react-router-dom'
import * as S from '../styled/Alarm'

type AlarmType = {
    title: string,
    contents: string,
    id: string
}

const AlarmPage = () => {
    
    const params = useParams();
    const lists: AlarmType[] = [{title: "123", contents: "string", id: "1"}];

    return(
        <S.Body>
            <S.SelectDiv>
                <NavLink to="/alarm/comment">
                    <S.Select selected={params.type==="comment" || !params.type}>댓글알림</S.Select>
                </NavLink>
                <NavLink to="/alarm/subscribe">
                    <S.Select selected={params.type==="subscribe"}>구독알림</S.Select>
                </NavLink>
                <NavLink to="/alarm/system">
                    <S.Select selected={params.type==="system"}>시스템알림</S.Select>
                </NavLink>
                <NavLink to="/alarm/event">
                    <S.Select selected={params.type==="event"}>이벤트알림</S.Select>
                </NavLink>
            </S.SelectDiv>
            <S.List>
                {lists.map(i => {
                    return(
                        <NavLink to="/novel/1">
                        <S.Alarm>
                            <img src="https://novelpia.com/img/new/menu/alarm.png"/>
                            <div>
                            <b>{i.title}</b>
                            <S.AlarmContents>
                            {i.contents}
                            </S.AlarmContents>
                            </div>
                        </S.Alarm>
                        </NavLink>
                    )
                })}
            </S.List>
        </S.Body>
    )
}

export default AlarmPage