import { useEffect, useState } from 'react'
import * as S from '../styled/Novel'
import queryString from 'query-string'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import axios from 'axios'

const NovelPage = () => {

    const [novel, setNovel] = useState({view: "", tag: [], other: [{title: "1", author: "1", image: "https://image.novelpia.com/imagebox/cover/71ef870f96a30146e548d3c75dfe439e_458688_ori.file"}], notice:[], comment:[]});
    const [lists, setLists] = useState([{title: "test1", type: "notice", plus: true},{title: "test1", type: "notice"}]);
    const [comments, setComments] = useState([]);
    const [pages, setPages] = useState([]);
    const [page, setPage] = useState([]);
    const [onSupport, setOnSupport] = useState(false);

    const location = useLocation();
    const params = useParams();
    const query = queryString.parse(location.search);
    
    useEffect(()=>{
        var p;

        if(query.p){
            p = query.p
        }
        else{
            p = 1;
        }
    
        axios.post(`/search?q=${String(query.q)}&p=${Number(p)}`)
            .then(res => {
                let m = res.data.count;
                setNovel(res.data)
                if(Number(query.p) <= 2){
                    var p = pages;
                    if(Number(query.p) === 2){
                        p.unshift(2)
                    }
                    p.unshift(1)

                    setPages(p);
                }
                else{
                    var p = pages;
                    p.unshift(Number(query.p)-2, Number(query.p)-1, query.p)
                    setPages(p);
                }

                if(Number(query.p)+1 >= m){
                    if(Number(query.p) === m){
                        setPages([...pages, Number(query.p)])
                    }
                    else{
                        setPages([...pages, Number(query.p)+1])
                    }
                }
                else{
                    setPages([...pages, Number(query.p)+1, Number(query.p)+2]);
                }
            })
            
    },[])

    return(
        <>
        <S.Body>
            <S.Info>
                <S.BookCover src="https://image.novelpia.com/imagebox/cover/18fc3444c07e1ecadd65072b4bd08e28_47837_ori.thumb"/>
                <S.InfoDiv>
                    <S.TopInfo>
                        <S.Tittle>제목</S.Tittle>
                        <S.AuthorDiv>
                            <S.Author>작가</S.Author>
                            <NavLink to={`/user/${1}`}>
                            <S.Name>테스트</S.Name>
                            </NavLink>
                        </S.AuthorDiv>
                    </S.TopInfo>
                    <S.BottomInfo>
                        <S.BottomInfoDiv>
                            <S.InfoBorder>
                                <S.Day>월</S.Day>
                                연재
                            </S.InfoBorder>
                            <S.InfoBorder>
                            <img src="https://novelpia.com/img/new/icon/count_view.png" />
                            <span>{novel.view}명</span>
                            <img src="https://novelpia.com/img/new/icon/count_book.png" />
                            <span>{0}회차</span>
                            <img src="https://novelpia.com/img/new/icon/count_good.png" />
                            <span>{novel.view}회</span>
                            </S.InfoBorder>
                        </S.BottomInfoDiv>
                    </S.BottomInfo>
                </S.InfoDiv>
                <S.Explane>

                </S.Explane>
                <S.TagDiv>
                    {novel.tag.map(i => {
                        return(
                            <S.Tag></S.Tag>
                        )
                    })}
                </S.TagDiv>
            </S.Info>
            <S.Border>

            <S.ListDiv>
            <S.List>
                <S.ListTittle>회차리스트</S.ListTittle>
                <S.ListBorder>
                    {lists.map(i => {
                        return(
                            <NavLink to={`/viewer/${1}`}>
                            <S.Round notice={i.type == "notice"}>
                                <S.RoundDiv>
                                    <S.RLeft>
                                        <S.TittleDiv>
                                            {i.plus ?
                                            <S.Price color={"#5232dd"}>PLUS</S.Price>
                                            :
                                            <S.Price color={"#166d95"}>무료</S.Price>
                                            }
                                            <S.RTittle>{i.title}</S.RTittle>
                                        </S.TittleDiv>
                                        <S.RInfo>
                                        <span><i class="fas fa-user"></i>3000</span>
                                        <span><i class="fas fa-comment-alt"></i>400</span>
                                        <span><i class="fas fa-thumbs-up"></i>1</span>
                                        </S.RInfo>
                                    </S.RLeft>
                                    <S.RDate>10월 10일</S.RDate>
                                </S.RoundDiv>
                            </S.Round>
                            </NavLink>
                        )
                    })}
                </S.ListBorder>
            </S.List>
            <S.CommentTittle>댓글</S.CommentTittle>
            <S.CommentList>
                {comments.map(
                    item => {
                        return(
                            <S.Comment>
                                <b>{item.user}</b>
                            </S.Comment>
                        )
                    }
                )}
            </S.CommentList>
            </S.ListDiv>

            <S.AuthorBorder>
                <S.Support>
                    <S.ListTittle>작가후원</S.ListTittle>
                    <S.SupportDiv>
                        <S.SupportButton onClick={()=>setOnSupport(true)}>작가후원하기</S.SupportButton>
                        <S.SupporterList>

                        </S.SupporterList>
                    </S.SupportDiv>
                </S.Support>
                {novel.other ?
                <S.ListTittle>작가의 다른 작품</S.ListTittle>
                :
                <S.ListTittle>추천작품</S.ListTittle>
                }
                <S.OtherBookList>
                    {novel.other.map(
                        item => {
                            <S.OtherBook>
                                <img src={item.image}/>
                                <div>
                                   <b>{item.title}</b> 
                                   <span>{item.author}</span>
                                </div>
                            </S.OtherBook>
                        }
                    )}
                </S.OtherBookList>
            </S.AuthorBorder>
            </S.Border>
            <S.PDiv>
                {pages.map(
                    item => {
                        return(
                            <S.Page bgcolor={item === page ? "royalblue" : "#eee"} color={item === page ? "white" : "black"}>
                            {item}
                            </S.Page>
                        )
                    }
                )}
            </S.PDiv>
        </S.Body>
        {onSupport ?
            <S.Background>
                <S.SupportModal>
                    <S.SupportModalHeader>
                        <h5>작가 후원</h5>
                        <svg onClick={()=>setOnSupport(false)} xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 0 24 24" width="28px" fill="#333"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
                    </S.SupportModalHeader>
                    <S.SupportModalBody>
                        <b>현재 보유 코인(1000)</b>
                        <div>
                            <input type="number"/>
                            <b>코인</b>
                        </div>
                    </S.SupportModalBody>
                    <S.SupportModalWarning>
                        후원 목적 이외에 욕설, 식사요청, 연락처공유, 작품내용변경요구, 타 서비스 제휴 요구등의 메세지 입력시 영구 사용정지가 될 수 있습니다.
                    </S.SupportModalWarning>
                    <S.SupportModalButtonDiv>
                        <button>후원하기</button>
                    </S.SupportModalButtonDiv>
                </S.SupportModal>
            </S.Background>
            :
            <></>
        }
        </>
    )
}

export default NovelPage