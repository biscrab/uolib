import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import * as S from '../styled/MyBook'

const MyBookPage = () => {

    const [selected, setSelected] = useState(1);

    return(
        <S.Body>
            <S.SelectDiv>
                <NavLink to="/mybook/like">
                    <S.Select>선호작</S.Select>
                </NavLink>
                <NavLink to="/mybook/my">
                    <S.Select>내작품</S.Select>
                </NavLink>
                <NavLink to="/mybook/donation">
                    <S.Select>후원목록</S.Select>
                </NavLink>
                <NavLink to="/mybook/last_view">
                    <S.Select>최근 본 작품</S.Select>
                </NavLink>
            </S.SelectDiv>
            <S.List>

            </S.List>
        </S.Body>
    )
}

export default MyBookPage