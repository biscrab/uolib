import styled from 'styled-components'

export const Footer = styled.footer`
    height: 250px;
    width: 100%;
    background-color: #fafafa;
` 

export const FooterDiv = styled.div`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 1100px;
    display: flex;
    flex-direction: column;
`

export const CopyRight = styled.div`
    width: 800px;
    font-size: 14px;
    color: #888;
`

export const PathDiv = styled.div`
    font-size: 15px;
    color: #333;
    padding: 30px 0px;
    a:last-child{
        ::after{
            content: none;
        }
    }
    a{
        ::after{
            content: "|";
            color: #A6A6A6;
            margin: 0px 5px;
        }
    }
`