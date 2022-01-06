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
    a{
        width: 100%;
    }
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

export const List = styled.table`
    list-style: none;
    margin: 0;
    width: 100%;
    height: 1000px;
    border-top: 1px solid #555;
    border-bottom: 1px solid #555;
    margin-top: 50px;
`

export const FanArtList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    height: 2000px;
    list-style: none;
    margin: 50px 0px;
`

export const FanArt = styled.div`
    padding: 10px;
    width: 20%;
    height: 350px;
    img{
        width: 100%;
        height: 320px;
        border-radius: 10px;
    }
`

export const HallOfFame = styled.div`
    margin-top: 50px;
    margin-bottom: 80px;
    h2{
        margin-bottom: 50px;
        text-align: center;
        font-weight: bold;
    }
`

export const HallOfFameList = styled.ul`
    height: 800px;
    list-style: none;
    display: flex;
    justify-content: space-between;
`

export const HallOfFameDiv = styled.li`
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.3);
    height: 800px;
    width: 32%;
    border-radius: 10px;
    padding: 10px;
    div{
        background-color: #eee;
        border-radius: 20px;
        padding: 20px;
    }
`

interface IndexProps{
    idx: number,
}

export const Row = styled.li<IndexProps>`
    width: 100%;
    height: 35px;
    cursor: pointer;
    border: 1px solid #dee2e6;
    border-bottom: 0;
    display: flex;
    span{
        box-sizing: border-box;
        padding: 0.5rem 0.75rem; 
    }
    background: ${props => props.idx ? "#f9f9f9" : "white"};
    tr{
        display: flex;
        align-items: center;
        font-size: 14px;
    }
`

export const Number = styled.tr<IndexProps>`
    color: #737c85;
    font-size: 14px;
    width: 80px;
    display: flex;
    justify-content: center;
    background: ${props => props.idx ? "#eaeaea" : "#fafafa"};
`

export const Type = styled.tr`
    text-align: center;
`

export const Title = styled.tr<IndexProps>`
    width: 100%;
    height: 100%;
    padding: 0px 10px;
    text-align: center;
`

export const Author = styled.tr<IndexProps>`
    width: 100px;
    height: 100%;
    text-align: center;
`

export const View = styled.tr<IndexProps>`
    width: 70px;
    height: 100%;
    text-align: center;
`

export const Like = styled.tr<IndexProps>`
    width: 70px;
    height: 100%;
    text-align: center;
`

export const TRow = styled.li<IndexProps>`
    width: 100%;
    height: 35px;
    cursor: pointer;
    border: 1px solid #dee2e6;
    border-bottom: 0;
    display: flex;
    span{
        box-sizing: border-box;
        padding: 0.5rem 0.75rem; 
    }
    background: #dee2e6;
    tr{
        display: flex;
        align-items: center;
        font-size: 14px;
    }
`

export const TNumber = styled.tr<IndexProps>`
    color: #737c85;
    font-size: 14px;
    width: 80px;
    display: flex;
    justify-content: center;
    background: #dee2e6;
    text-align: center;
`

export const TType = styled.tr`
    text-align: center;
`

export const TTitle = styled.tr<IndexProps>`
    width: 100%;
    height: 100%;
    padding: 0px 10px;
    text-align: center;
`

export const TAuthor = styled.tr<IndexProps>`
    width: 100px;
    height: 100%;
    text-align: center;
`

export const TView = styled.tr<IndexProps>`
    width: 70px;
    height: 100%;
    text-align: center;
`

export const TLike = styled.tr<IndexProps>`
    width: 70px;
    height: 100%;
    text-align: center;
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