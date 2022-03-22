import { useState, useRef, useEffect } from 'react'
import * as S from '../styled/Write'
import $ from 'jquery'
import { NextPage } from 'next';
import axios from 'axios';
import { getCookie } from 'cookies-next';

/*: NextPage<{}>  */
const WritePage = (props: string[]) => {

    const text = useRef('');

    const handleChange = (evt: any) => {
        text.current = evt.target.value;
        localStorage.autosave = "123123";
    };
    
    const handleBlur = () => {
    };

    const change = (i: string) => {
        document.execCommand(i, false, "");
        /*
        console.log(c);
        switch(i){
            case "bold" :
                setOn({...on, bold: c});
                break;
            case "italic" :
                setOn({...on, italic: c});
                break;
            case "underline" :
                setOn({...on, underline: c});
                break;
        }*/
        $(".text").focus();
    }

    //회차 등록
    const registRound = () => {
        axios.post(`/round`, )
    }

    useEffect(()=>{
        console.log(props);  
    },[])

    return(
        <>
        <S.Body>
            <S.BTittle>소설연재</S.BTittle>
            <S.Tittle placeholder='에피소드 제목을 입력해주세요'/>
            <S.SelectDiv>
                <S.NovelSelect>
                    <select>
                        {props.map((i: string) => {
                            return(
                                <option>{i}</option>
                            )
                        })}
                    </select>
                </S.NovelSelect>
                <S.Select>
                    <select>
                        <option>연재회차</option>
                        <option>공지사항</option>
                    </select>
                </S.Select>
            </S.SelectDiv>
            <S.TextDiv>
                <S.SettingDiv>                        
                    <S.Setting onClick={()=>change("bold")}><i className="fas fa-bold"></i></S.Setting>
                    <S.Setting onClick={()=>change("italic")}><i className="fas fa-italic"></i></S.Setting>
                    <S.Setting onClick={()=>change("underline")}><i className="fas fa-underline"></i></S.Setting>
                    <S.Setting onClick={()=>change("undo")}><i className="fas fa-undo-alt"></i></S.Setting>
                    <S.Setting onClick={()=>change("redo")}><i className="fas fa-redo-alt"></i></S.Setting>  
                </S.SettingDiv>
                <div className="text" id="text" role="textbox" aria-multiline="true" spellCheck="true" autoCorrect="true" contentEditable="true" /*html={text.current}*/ onBlur={handleBlur} onInput={(e)=>console.log(e.target)}>
                </div>
            </S.TextDiv>
            <S.RTittle>
                <b>작가후기</b>
            </S.RTittle>
            <S.Review />
            <S.ButtonDiv>
                <S.RegistButton onClick={()=>registRound()}><i className="fas fa-pen"></i> 회차 등록</S.RegistButton>
            </S.ButtonDiv>
        </S.Body>
        </>
    )
}

export default WritePage

WritePage.getInitialProps = async function(context: any){
    const token = getCookie("uolib_token");
    const res = await axios.get("/users_novel", {headers: {Authorization: `Bearer ${token}`}});
    const props = res.data;
    return {props}
}

    //const [on, setOn] = useState({bold: false, italic: false, underline: false});
    //const [onImage, setOnImage] = useState(false);
    //const [onEMenu, setOnEMenu] = useState(false);

    /*
    const [imgUrl, setImgUrl] = useState("");

    const InsertPicture = (img: string) => {
        document.execCommand("insertImage", false, img);
    }*/

    /*
    useEffect(()=>{
        $("html").click(function(e){
            if(!$(".emenu").has(e.target).length){
                setOnEMenu(false);
            }
        })  
    })*/

    /*
        <S.SettingButton>
        <S.Setting onClick={()=>setOnEMenu(!onEMenu)}>
            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24" x="0"/></g><g><g><polygon points="19,9 20.25,6.25 23,5 20.25,3.75 19,1 17.75,3.75 15,5 17.75,6.25"/><polygon points="19,15 17.75,17.75 15,19 17.75,20.25 19,23 20.25,20.25 23,19 20.25,17.75"/><path d="M11.5,9.5L9,4L6.5,9.5L1,12l5.5,2.5L9,20l2.5-5.5L17,12L11.5,9.5z M9.99,12.99L9,15.17l-0.99-2.18L5.83,12l2.18-0.99 L9,8.83l0.99,2.18L12.17,12L9.99,12.99z"/></g></g></svg>
        </S.Setting>
        {onEMenu ?
        <S.EffectSelectDiv className='emenu'>
            <S.EffectSelect>
            <span style={{
            background: "linear-gradient(to right, #00d9ff, #d53afc)", 
            color: "transparent",
            //webkitBackgroundClip: "text"}}>테스트</span>
            </S.EffectSelect>
            <S.SmokyEffect><span>테스트</span></S.SmokyEffect>
            <S.NeonEffect>테스트</S.NeonEffect>
            <S.GritchyEffect><span>테스트</span></S.GritchyEffect><span></span>
        </S.EffectSelectDiv>
        :
        <></>
        }
        </S.SettingButton>
     */

/*        {onImage ?
        <S.Background>
            <S.ImageDiv className='imagediv'>
                <S.ImageHeader>
                    <h3>그림 삽입</h3>
                    <div onClick={()=>setOnImage(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 0 24 24" width="28px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
                    </div>
                </S.ImageHeader>
                <S.ImageBody>
                    <div>
                        <span>파일 선택</span>
                        <input type="file" value={imgUrl}/>
                    </div>
                        <span>사진 URL</span>
                        <input onChange={(e)=>setImgUrl(e.target.value)} value={imgUrl}/>
                </S.ImageBody>
                <S.ImageBottom>
                    <button onClick={()=>InsertPicture(imgUrl)}>그림 삽입</button>
                </S.ImageBottom>
            </S.ImageDiv>
        </S.Background>
        :
        <></>
        } */

/*            <S.SelectDiv>
                <S.Select>
                    <select></select>
                </S.Select>
                <S.Select>
                    <select></select>
                </S.Select>
                <S.Select>
                    <span><i className="far fa-calendar-check"></i></span>
                    <input />
                </S.Select>
                <S.Select>
                    <span><i className="far fa-clock"></i></span>
                    <select>
                        {

                        }
                    </select>
                </S.Select>
                <S.Select>
                    <span><i className="far fa-clock"></i></span>
                    <select></select>
                </S.Select>
                <S.Select>
                    <div>공개일사용</div>
                    <input type="checkbox" />
                </S.Select>
            </S.SelectDiv>
            <S.RoundDiv>
                <select></select>
                <button>임시저장</button>
            </S.RoundDiv> */
        