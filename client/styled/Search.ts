import styled from 'styled-components'

type BannerProps = {
    background: string
}

export const Banner = styled.div<BannerProps>`
    width: 100%;
    height: 150px;
    background-color: ${props => props.background};
`

export const Body = styled.div`
    width: 1100px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 30px;
    padding-bottom: 60px;
    @media screen and (max-width: 1200px){
        width: 100%;
        padding: 0px 10px;
    }
`

export const BuyBackground = styled.div`

`

export const BuyBorder = styled.div`

`

export const Search = styled.input`
    width: 100%;
    border: 0;
    outline: 0;
    border-bottom: 1px solid #333;
    padding: 8px 10px;
    box-sizing: border-box;
    margin-bottom: 30px;
    font-size: 17px;
    font-weight: bold;
`

export const SelectDiv = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    a{
        width: 100%;
    }
`

export const CategoryDiv = styled.ul`
    padding: 0;
    cursor: pointer;
    display: flex;
    border-bottom: 1px solid #eee;
    margin: 0;
    overflow-x: auto;
`

interface SelectedProps{
    selected: boolean
}

export const Category = styled.li<SelectedProps>`
    list-style: none;
    padding: 4px 8px;
    font-size: 14px;
    margin: 5px 2px;
    font-weight: bold;
    color: ${props => props.selected ? "white" : ""};
    background-color: ${props => props.selected ? "#5a35cd" : ""};
`

export const Select = styled.div<SelectedProps>`
    width: 100%;
    height: 50px;
    border: 1px solid #eee;
    border-bottom: 1px solid #555;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    white-space: nowrap;
    cursor: pointer;
    border: ${props => props.selected ? "1px solid #555" : ""};
    border-bottom: ${props => props.selected ? "none" : "1px solid #555"};
    border-top: ${props => props.selected ? "1px solid #555" : ""};
`

export const ResultSpan = styled.div`
    margin: 20px 0px;
    font-weight: bold;
`

export const Result = styled.div`
    margin-top: 30px;
    padding-bottom: 5px;
    display: flex;
    justify-content: space-between;
    color: #333;
    border-bottom: 2px solid #333;
    div{
        display: flex;
        align-items: center;
        margin-left: 10px;
        b{  
            font-size: 14px;
            cursor: pointer;
        }
        i{
            color: #ccc;
            font-size: 1px;
            display: flex;
            align-items: center;
            margin-right: 2.5px;
            margin-left: 7.5px;
            height: 10px;
            width: 10px;
            transform: translateY(10%);
        }
    }
`

export const List  = styled.ul`
    padding: 0;
    margin: 0;
    height: 1000px;
    list-style: none;
`

export const Null = styled.div`
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
    font-size: 22px;
    font-weight: bold;
`

export const PageDiv = styled.div`
    display: flex;
    justify-content: center;
`

interface SelectProps{
    selected?: boolean,
}

export const Page = styled.a<SelectProps>`
    background-color: ${props => props.selected ? "#17a2b8" : "#eee"};
    color: ${props => props.selected ? "white" : ""};
    padding: 7px 12px;
    font-size: 15px;
    margin: 5px;
    font-weight: bold;
`


export const TagListDiv = styled.ul`    
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`

export const TagList = styled.li`
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;
    margin-bottom: 20px;
    b{
        font-weight: bold;
        color: #333;
    }
    ul{
        list-style: none;
        margin-top: 10px;
    }
`

export const Tag = styled.div`
    color: #000;
    border: 2px solid #333;
    border-radius: 20px;
    padding: 2px 9px;
    line-height: 20px;
    float: left;
    margin: 3px 2px;
    cursor: pointer;
    user-select: none;
    font-size: 13px;
    font-weight: bold;
    color: #333;
`