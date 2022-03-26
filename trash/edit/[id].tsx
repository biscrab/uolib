import { useState } from 'react';
import { NextPage } from 'next';
import * as S from '../../client/styled/New'
import axios from 'axios';

const EditPage: NextPage<{}> = () => {

    const [info, setInfo] = useState()
    const [focus, setFocus] = useState(false);
    const [novel, setNovel] = useState({title: "", explane: "", day: "", tag: ["123"]})
    const [day, setDay] = useState({mon: false, tue: false, wen: false, thu: false, fri: false, sat: false, sun: false})

    const days = () => {
        
    }

    const regist = () => {
        axios.post('/novel/new', {...novel, tag: JSON.stringify(novel.tag)})
            .then(res => alert("등록되었습니다."))
    }

    return(
        <S.Body>
            <b>작품설정</b>
            <span>등록하실 작품에 대한 정보를 입력해 주세요.</span>
            <S.BodyBorder>
                <S.BodyDiv>
                    <span>북커버</span>
                    <S.BookCover src={"https://image.novelpia.com/imagebox/cover/18fc3444c07e1ecadd65072b4bd08e28_47837_ori.thumb"}/>
                </S.BodyDiv>
                <S.BodyInput>
                    <S.InputDiv>
                        <span>작품명</span>
                        <S.Input />
                    </S.InputDiv>
                    <S.InputDiv>
                        <span>작품부제</span>
                        <S.Input />
                    </S.InputDiv>
                    <S.InputDiv>
                        <span>태그</span>
                        <S.TagInputDiv>
                            <S.TagDiv>
                                {novel.tag.map(
                                    (i, index) => {
                                        return(
                                            <span key={index}>{i}</span>
                                        )
                                    }
                                )}
                            </S.TagDiv>
                            <input onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}/>
                        </S.TagInputDiv>
                        {focus ?
                        <S.TagList>
                            <li>판타지</li>
                            <li>라이트노벨</li>
                            <li>전생</li>
                            <li>현대</li>
                            <li>중세</li>
                            <li>하렘</li>
                            <li>드라마</li>
                            <li>일상</li>
                            <li>로맨스</li>
                            <li>SF</li>
                            <li>스포츠</li>
                            <li>무협</li>
                        </S.TagList>
                        :
                        <></>
                        }
                    </S.InputDiv>
                    <S.SelectDiv>
                        <span>연재요일</span>
                        <S.Select>
                        <input type="checkbox" />
                        <span>월</span>
                        </S.Select>
                        <S.Select>
                        <input type="checkbox" />
                        <span>화</span>
                        </S.Select>
                        <S.Select>
                        <input type="checkbox" />
                        <span>수</span>
                        </S.Select>
                        <S.Select>
                        <input type="checkbox" />
                        <span>목</span>
                        </S.Select>
                        <S.Select>
                        <input type="checkbox" />
                        <span>금</span>
                        </S.Select>
                        <S.Select>
                        <input type="checkbox" />
                        <span>토</span>
                        </S.Select>
                        <S.Select>
                        <input type="checkbox" />
                        <span>일</span>
                        </S.Select>
                    </S.SelectDiv>
                    <S.InputDiv>
                        <span>줄거리</span>
                        <textarea />
                    </S.InputDiv>
                    <S.ImgInputDiv>
                        <span>북커버</span>
                        <input type="file"/>
                    </S.ImgInputDiv>
                    <S.SampleBookCover>
                        <span>샘플 북커버 이미지:</span>
                        <S.SampleList>

                        </S.SampleList>
                    </S.SampleBookCover>
                </S.BodyInput>
            </S.BodyBorder>
            <S.ButtonDiv>
                <S.CancleButton onClick={()=>window.history.back()}>취소</S.CancleButton>
                <S.RegistButton>작품수정</S.RegistButton>
            </S.ButtonDiv>
        </S.Body>
    )
}

export default EditPage