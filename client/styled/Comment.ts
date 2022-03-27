import styled from "styled-components";

export const CommentList = styled.ul`
    height: 1000px;
    list-style: none;
`

export const CommentTittle = styled.h2`
    border-bottom: 3px solid black;
    padding-bottom: 10px;
    font-size: 22px;
    font-weight: bold;
    width: 100%;
`

export const Comment = styled.li`
    border-bottom: 1px solid #eee;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 5px 15px;
    padding-bottom: 10px;
    span{
        font-size: 12px;
        color: #999;
    }
`
