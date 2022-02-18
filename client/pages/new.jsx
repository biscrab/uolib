import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import * as S from '../styled/New'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import $ from 'jquery'
/*
type BookInterface = {
    title: string,
    author: string,
    explane: string,
    tag: string[],
    days: string,
}*/

const NewPage = () => {

    const [info, setInfo] = useState()
    const [focus, setFocus] = useState(false);
    const [tag, setTag] = useState("");
    const [novel, setNovel] = useState({title: "", author: "", explane: "", days: "", tag: ["123"]})
    const [day, setDay] = useState({mon: false, tue: false, wen: false, thu: false, fri: false, sat: false, sun: false})
    const taglist = ["판타지","라이트노벨","전생","현대","중세","하렘","드라마","일상","로맨스","SF","스포츠","무협"];

    useEffect(()=>{
        $(function() {
            $("#image").on('change', function(){
                readURL(this);
            });
        });
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                $('#image_container').attr('src', e.target.result);
                }
                reader.readAsDataURL(input.files[0]);
            }
        }
    },[]);

    const getDay = () => {
        var d = "";
        if(day.mon){
            d.push("월");
        }
        if((day.mon) && (day.tue || day.wen || day.thu || day.fri || day.sat || day.sun)){
            d.push("/")
        }
        if(day.tue){
            d.push("화");
        }
        if((day.tue) && (day.wen || day.thu || day.fri || day.sat || day.sun)){
            d.push("/")
        }
        if(day.mon){
            d.push("수");
        }
        if((day.wen) && (day.thu || day.fri || day.sat || day.sun)){
            d.push("/")
        }
        if(day.thu){
            d.push("목");
        }
        if((day.thu) && (day.fri || day.sat || day.sun)){
            d.push("/")
        }
        if(day.fir){
            d.push("금");
        }
        if((day.fri) && (day.sat || day.sun)){
            d.push("/")
        }
        if(day.sat){
            d.push("토");
        }
        if((day.mon) && (day.sun)){
            d.push("/")
        }
        if(day.sun){
            d.push("일");
        }
        
        return d;
    }

    const regist = () => {
        axios.post('/novel/new', {...novel, tag: JSON.stringify(novel.tag), day: getDay(day)})
            .then(res => alert("등록되었습니다."))
    }

    const changeTag = (e) => {
        var key = e.keyCode;
        console.log(key);
        if(!tag&&key === 8){
            console.log(1);
            var t = novel.tag;
            t = t.slice(0, t.length-1);
            setNovel({...novel, tag: t});
        }
        else if(key === 13){
            if(tag.length <= 10){
                var y = novel.tag;
                y = [...y, tag];
                setTag("");
                setNovel({...novel, tag: y});
            }
            else{
                alert("태그의 최대길이는 10자 입니다.")
            }
        }
    }

    return(
        <S.Body>
            <b>작품설정</b>
            <span>등록하실 작품에 대한 정보를 입력해 주세요.</span>
            <S.BodyBorder>
                <S.BodyDiv>
                    <span>북커버</span>
                    <S.BookCover id="image_container"/>
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
                                            <span key={index}>{i}<FontAwesomeIcon icon="fa-regular fa-x" /></span>
                                        )
                                    }
                                )}
                            </S.TagDiv>
                            <input value={tag} onChange={(e)=>setTag(e.target.value)} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} onKeyDown={(e) => changeTag(e)}/>
                        </S.TagInputDiv>
                        {focus ?
                        <S.TagList>
                            {taglist.map(i => {
                                return(
                                    <li onClick={()=>{
                                        setTag("");
                                        setNovel({...novel, tag: tag.push(i)})
                                    }}>{i}</li>
                                )
                            })}
                        </S.TagList>
                        :
                        <></>
                        }
                    </S.InputDiv>
                    <S.SelectDiv>
                        <span>연재요일</span>
                        <S.Select>
                        <input type="checkbox" checked={day.mon} onClick={()=>setDay({...day, mon: !day.mon})}/>
                        <span>월</span>
                        </S.Select>
                        <S.Select>
                        <input type="checkbox" checked={day.tue} onClick={()=>setDay({...day, tue: !day.tue})}/>
                        <span>화</span>
                        </S.Select>
                        <S.Select>
                        <input type="checkbox" checked={day.wen} onClick={()=>setDay({...day, wen: !day.wen})}/>
                        <span>수</span>
                        </S.Select>
                        <S.Select>
                        <input type="checkbox" checked={day.thu} onClick={()=>setDay({...day, thu: !day.thu})}/>
                        <span>목</span>
                        </S.Select>
                        <S.Select>
                        <input type="checkbox" checked={day.fri} onClick={()=>setDay({...day, fri: !day.fri})}/>
                        <span>금</span>
                        </S.Select>
                        <S.Select>
                        <input type="checkbox" checked={day.sat} onClick={()=>setDay({...day, sat: !day.sat})}/>
                        <span>토</span>
                        </S.Select>
                        <S.Select>
                        <input type="checkbox" checked={day.sun} onClick={()=>setDay({...day, sun: !day.sun})}/>
                        <span>일</span>
                        </S.Select>
                    </S.SelectDiv>
                    <S.InputDiv>
                        <span>줄거리</span>
                        <textarea />
                    </S.InputDiv>
                    <S.ImgInputDiv>
                        <span>북커버</span>
                        <input type="file" id="image" accept="image/*"/>
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
                <S.RegistButton onClick={()=>regist()}>작품등록</S.RegistButton>
            </S.ButtonDiv>
        </S.Body>
    )
}

export default NewPage