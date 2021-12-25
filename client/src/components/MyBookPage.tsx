import { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import * as S from '../styled/MyBook'

const MyBookPage = () => {

    const params = useParams();

    const [selected, setSelected] = useState(1);

    return(
        <S.Body>
            <S.SelectDiv>
                <NavLink to="/mybook/like">
                    <S.Select selected={params.type==="like" || !params.type}>선호작</S.Select>
                </NavLink>
                <NavLink to="/mybook/my">
                    <S.Select selected={params.type==="my"}>내작품</S.Select>
                </NavLink>
                <NavLink to="/mybook/donation">
                    <S.Select selected={params.type==="donation"}>후원목록</S.Select>
                </NavLink>
                <NavLink to="/mybook/last_view">
                    <S.Select selected={params.type==="last_view"}>최근 본 작품</S.Select>
                </NavLink>
            </S.SelectDiv>
            <S.List>

            </S.List>
        </S.Body>
    )
}

export default MyBookPage