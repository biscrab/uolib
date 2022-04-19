import styled from 'styled-components'

export const Banner = styled.div`
    width: 100%;
    height: 200px;
    background-color: #eee;
    margin-bottom: 50px;
`

export const Body = styled.div`
    width: 1200px;
    display: flex;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    flex-wrap: wrap;
`

export const Book = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #eee;
    height: 350px;
    padding: 0px 5px;
    margin: 15px 0px;
    img{
        width: 190px;
        height: 280px;
        border-radius: 0px 5px 5px 5px;
        cursor: pointer;
    }

    b{
        margin-top: 8px;
    }

    span{
        margin: 3px 0px;
        font-size: 12px;
    }
`

export const InfoDiv = styled.div`

`

export const Info = styled.div`

`
export const Rank = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    width: 35px;
    height: 35px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`
