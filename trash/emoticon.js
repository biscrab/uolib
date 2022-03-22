{type === "emoticon" ?
<>
<S.Tittle>NEW 이모티콘</S.Tittle>
<S.NewEmoticon>
<S.EmoticonDiv>
    {ilist.slice(0, 6).map(
        (i, index) => {
            return(
                <Link href="/emoticon/1" key={index}>
                <S.Emoticon>
                    <div>
                        <img src={i.image}/>
                    </div>
                    <span>{i.name}</span>
                </S.Emoticon>
                </Link>
            )
        }
    )}
</S.EmoticonDiv>
<S.EmoticonDiv>
    {ilist.slice(6, 12).map(
        (i, index) => {
            return(
                <S.Emoticon key={index}>
                    <div>
                        <img src={i.image}/>
                    </div>
                    <span>{i.name}</span>
                </S.Emoticon>
            )
        }
    )}
</S.EmoticonDiv>
</S.NewEmoticon>
<S.Tittle>인기 이모티콘</S.Tittle>
<S.BestEmoticonDiv>
    {blist.map(
        (i, index) => {
            return(
            <div key={index}>
                <h3>{index+1}</h3>
                <img src={i.image}/>
                <span>{i.name}</span>
            </div>
            );
        }
    )}
</S.BestEmoticonDiv>
</>
:
<></>
}