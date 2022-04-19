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
    return (
        <>
            <S.CommentTittle>댓글({lists.length})</S.CommentTittle>
            <S.CommentList>
            {lists.map((i, index) => { 
                return <Comment i={i} index={index}/>
            })}
            </S.CommentList>
        </>
    )
}

export default List