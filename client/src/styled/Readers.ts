import styled from 'styled-components'

export const Body = styled.div`
    margin-top: 50px;
    width: 1250px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
`

export const SelectDiv = styled.div`
    width: 100%;
    display: flex;
`

interface SelectProps{
    selected: boolean,
}

export const Select = styled.div<SelectProps>`
    cursor: pointer;
    font-weight: bold;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${props => props.selected ? "1px solid #555" : "1px solid #eee"};
    border-bottom: ${props => props.selected ? "none" : "1px solid #555"};
`

export const List = styled.ul`

`

interface IndexProps{
    id: number,
}

export const Row = styled.li`
    width: 100%;
    border-bottom: 1px solid #aaa;
`

export const Number = styled.span<IndexProps>`
    background: ${props => props.id ? "black" : "white"};
`

export const Title = styled.span<IndexProps>`
    background: ${props => props.id ? "black" : "white"};
`

export const Author = styled.span<IndexProps>`
    background: ${props => props.id ? "black" : "white"};
`

export const View = styled.span<IndexProps>`
    background: ${props => props.id ? "black" : "white"};
`

export const Like = styled.span<IndexProps>`
    background: ${props => props.id ? "black" : "white"};
`

export const CommentList = styled.ul`

`

export const Comment = styled.li`
    padding-top: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    div{
        padding-left: 10px;
    }
`