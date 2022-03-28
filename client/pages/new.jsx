import { useCallback, useEffect, useState } from 'react';
//mport { NextPage } from 'next';
import * as S from '../styled/New'
import axios from 'axios';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/router';
//import $ from 'jquery'
/*
type BookInterface = {
    title: string,
    author: string,
    explane: string,
    tag: string[],
    days: string,
}*/

const NewPage = () => {

    //const [info, setInfo] = useState();
    const [focus, setFocus] = useState(false);
    const [tag, setTag] = useState("");
    const [novel, setNovel] = useState({title: "", author: "", explane: "", image: "", days: "", tag: ["123"]})
    const [day, setDay] = useState({mon: false, tue: false, wen: false, thu: false, fri: false, sat: false, sun: false});
    //const taglist = ["판타지","라이트노벨","전생","현대","중세","하렘","드라마","일상","로맨스","SF","스포츠","무협"];

    useCallback(()=>{
        if(!focus && tag){
            if(tag.length <= 10){
                let t = novel.tag;
                t = t.slice(0, t.length-1);
                setNovel({...novel, tag: t});
            }
            else{
                alert("태그의 최대길이는 10자 입니다.")
            }
        }
    },[focus])

    const koreanDays = ["월", "화", "수", "목", "금", "토", "일"];
    
    const getDay = () => {
        let d = "";
        const daysArr = Object.values(day);
        daysArr.map((i, index) => {
            if(i){
                if(daysArr[index+1])
                    d.push("/");

                d.push(koreanDays(index));
            }
        })
        return d;
    }

    const regist = () => {
        if(!novel.title){
            alert("제목을 입력해 주세요.");
        }
        else{
        axios.post('/novel/new', {...novel, tag: JSON.stringify(novel.tag), day: getDay()})
            .then(res => alert("등록되었습니다."))
            .catch(err => {
                if(err.status === 401){
                    alert("로그인을 먼저 해주십쇼.");
                }
            })
        }
    }

    const changeTag = (e) => {
        let key = e.keyCode;
        console.log(key);
        if(!tag&&key === 8){
            console.log(1);
            let t = novel.tag;
            t = t.slice(0, t.length-1);
            setNovel({...novel, tag: t});
        }
        else if(key === 13){
            if(tag.length <= 10){
                let y = novel.tag;
                y = [...y, tag];
                setTag("");
                setNovel({...novel, tag: y});
            }
            else{
                alert("태그의 최대길이는 10자 입니다.")
            }
        }
    }

    const deleteTag = (t) => {
        const arr = [];
        novel.tag.map(i => {
            if(i !== t)
                arr.push(i);
        })
        setNovel({...novel, tag: arr});
    }

    const router = useRouter();

    useEffect(()=>{
        if(!getCookie("uolib_token")){
            router.push("/401")
        } 
    },[])

    /*                    <S.InputDiv>
                        <span>작품부제</span>
                        <S.Input />
                    </S.InputDiv> */

    return(
        <S.Body>
            <b>작품설정</b>
            <span>등록하실 작품에 대한 정보를 입력해 주세요.</span>
            <S.BodyBorder>
                <S.BodyDiv>
                    <span>북커버</span>
                    <S.BookCover src={novel.image}/>
                </S.BodyDiv>
                <S.BodyInput>
                    <S.InputDiv>
                        <span>작품명</span>
                        <S.Input onChange={(e)=>setNovel({...novel, title: e.target.value})} value={novel.title}/>
                    </S.InputDiv>
                    <S.InputDiv>
                        <span>태그</span>
                        <S.TagInputDiv>
                            <S.TagDiv>
                                {novel.tag.map(
                                    (i, index) => {
                                        return(
                                            <span key={index} onClick={()=>deleteTag(i)}>{i}
                                            <svg xmlns="http://www.w3.org/2000/svg" height="13px" viewBox="0 0 24 24" width="13px" fill="#fff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
                                            </span>
                                        )
                                    }
                                )}
                            </S.TagDiv>
                            <input value={tag} onChange={(e)=>setTag(e.target.value)} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} onKeyDown={(e) => changeTag(e)}/>
                        </S.TagInputDiv>
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
                        <S.Input onChange={(e)=>setNovel({...novel, image: e.target.value})}/>
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

/*
    useEffect(()=>{
        $(function() {
            $("#image").on('change', function(){
                readURL(this);
            });
        });
        function readURL(input) {
            if (input.files && input.files[0]) {
                let reader = new FileReader();
                reader.onload = function (e) {
                $('#image_container').attr('src', e.target.result);
                }
                reader.readAsDataURL(input.files[0]);
            }
        }
    },[]);*/

/*                        {focus ?
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
                        } */