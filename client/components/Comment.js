import * as S from '../styled/Comment'

const Comment = (i, index) => {
    return(
        <S.Comment key={index}>
            <b>{i.name}</b>
            <span>{i.rdate}</span>
            <div>{i.comment}</div>
        </S.Comment>
    )
}

const List = ({lists}) => {
    const ItemList = lists.map((i, index) => { 
        return <Comment i={i} index={index}/>
    })
    return (
        <>
            <S.CommentTittle>댓글({lists.length})</S.CommentTittle>
            <S.ItemList>
                <ItemList/>
            </S.ItemList>
        </>
    )
}

export default List