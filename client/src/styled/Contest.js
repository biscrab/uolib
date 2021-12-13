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
`

export const Book = styled.div`
    display: flex;
    flex-direction: column;
    img{
        width: 180px;
        height: 240px;
        border-radius: 5px;
        cursor: pointer;
    }
`
