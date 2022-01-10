import styled from 'styled-components'

export const Body = styled.div`
    position: relative;
    margin-top: 80px;
    left: 50%;
    transform: translateX(-50%);
    max-width: 1300px;
    @media screen and (max-width: 1200px) {
        width: 100%;
        padding: 0px 20px;
    }
`

export const BannerDiv = styled.div`
    position: relative;
    left: 0;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;   
`

export const Banner = styled.div`
    width: 6144px;
    box-sizing: inherit;
    background-color: ${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 885px){
        img{
            width: 100%;
        }
    }
`

export const NavWrap = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 1240px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div{
        background-color: rgba(255, 255, 255, 0.5);
        cursor: pointer;
        width: 70px;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 35px;
    }
`

export const Title = styled.h3`
    margin-bottom: 30px;
    font-weight: bold;
`

export const Border = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 80px;
`

//책
export const Book = styled.div`
    display: flex;
    margin-bottom: 50px;
    @media screen and (max-width: 1200px) {
        width:100%;
    }
`

export const BookCover = styled.img`
    height: 200px;
    width: 140px;
    border-radius: 5px;
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
`

export const BookInfo = styled.div`
    padding-left: 20px;
    width: 260px;
    @media screen and (max-width: 1200px) {
        width: 100%;
    }
`

export const BookInfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-bottom: 1px solid rgba(0,0,0,0.1);
`

export const BookTittle = styled.b`
    font-size: 20px;
`

export const BookAuthor = styled.span`
    color: dimgray;
    font-size: 14px;
    padding: 3px 0px;
`

export const BookTagDiv = styled.div`
    padding-top: 5px;
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    line-height: 1.3;
    height: 5em;
    text-align: left;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    word-spacing: 5px;
    text-overflow: ellipsis;
`

export const Tag = styled.span`
    color: #5232dd;
    font-size: 13px;
    white-space: nowrap;
    cursor: pointer;
    :after{
        content: " ";
        letter-spacing: -5px;
    }
`