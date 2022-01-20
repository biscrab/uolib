import styled from 'styled-components'

export const Header = styled.div`
    width: 100%;
    background-color: white;
    border-bottom: 1px solid #ddd;
    div{
        margin: auto;
        min-width: 1000px;
        max-width: 1200px;
        height: 280px;
        display: flex;
        align-items: center;
    }
    img{
        height: 180px;
        width: 180px;
    }
    h3{
        font-weight: bold;
        margin-left: 30px;
    }
`

export const Body = styled.div`
    background-color: #efefef;
    width: 100%;
    display: flex;
    justify-content: center;
`

export const Border = styled.div`
    background-color: white;
    border: 1px solid #ddd;
    width: 1200px;
    height: 700px;
    margin: 30px 0px;
    display: flex;
    flex-wrap: wrap;
    padding: 40px 45px;
    border-radius: 3px;

    img{
        margin: 30px 35px;
        width: 150px;
        height: 150px;
    }
`
