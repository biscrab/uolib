import { useEffect, useState } from 'react'
import * as S from '../styled/Novel'
import queryString from 'query-string'
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios'

const NovelPage = () => {

    const [book, setBook] = useState();
    const [lists, setLists] = useState([{tittle: "test"}]);
    const [notices, setNotices] = useState([]);
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
                setBook(res.data)
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
                            <S.InfoBorder>월</S.InfoBorder>
                            <S.InfoBorder>
                            <img src="https://novelpia.com/img/new/icon/count_view.png" />
                            <span>0명</span>
                            <img src="https://novelpia.com/img/new/icon/count_book.png" />
                            <span>0회차</span>
                            <img src="https://novelpia.com/img/new/icon/count_good.png" />
                            <span>0회</span>
                            </S.InfoBorder>
                        </S.BottomInfoDiv>
                    </S.BottomInfo>
                </S.InfoDiv>
            </S.Info>
            <S.Border>
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
                                        <S.RTittle>{i.tittle}</S.RTittle>
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
            <S.Support>
                <S.ListTittle>작가후원</S.ListTittle>
                <S.SupportDiv>
                    <S.SupportButton>작가후원하기</S.SupportButton>
                    <S.SupporterList>

                    </S.SupporterList>
                </S.SupportDiv>
            </S.Support>
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