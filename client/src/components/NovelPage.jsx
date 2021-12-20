import { useEffect, useState } from 'react'
import * as S from '../styled/Novel'
import queryString from 'query-string'
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios'

const NovelPage = () => {

    const [novel, setNovel] = useState({view: "", tag: [], other: [{title: "1", author: "1"}], notice:[], comment:[]});
    const [lists, setLists] = useState([{title: "test"}]);
    const [comments, setComments] = useState([]);
    const [pages, setPages] = useState([]);
    const [page, setPage] = useState([]);

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
        <S.Body>
            <S.Info>
                <S.BookCover src="https://image.novelpia.com/imagebox/cover/18fc3444c07e1ecadd65072b4bd08e28_47837_ori.thumb"/>
                <S.InfoDiv>
                    <S.TopInfo>
                        <S.Tittle>제목</S.Tittle>
                        <S.AuthorDiv>
                            <S.Author>작가</S.Author>
                            <S.Name>테스트</S.Name>
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
                    <>
                    {

                    }
                    </>
                    <>
                    {lists.map(i => {
                        return(
                            <S.Round>
                                <S.RoundDiv>
                                    <S.RLeft>
                                        <S.TittleDiv>
                                            <S.Price color={"#166d95"}>무료</S.Price>
                                            <S.RTittle>{i.title}</S.RTittle>
                                        </S.TittleDiv>
                                        <S.RInfo>
                                            3000
                                            400
                                            1
                                        </S.RInfo>
                                    </S.RLeft>
                                    <S.RDate>10월 10일</S.RDate>
                                </S.RoundDiv>
                            </S.Round>
                        )
                    })}
                    </>
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
                        <S.SupportButton>작가후원하기</S.SupportButton>
                        <S.SupporterList>

                        </S.SupporterList>
                    </S.SupportDiv>
                </S.Support>
                <S.ListTittle>작가의 다른 작품</S.ListTittle>
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
    )
}

export default NovelPage