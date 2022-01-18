import styled from 'styled-components'

export const Footer = styled.footer`
    height: 200px;
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

    @media screen and (max-width: 1100px){
        width: 100%;
        padding: 0px 20px; 
    }
`

export const CopyRight = styled.div`
    width: 800px;
    font-size: 13px;
    color: #A6A6A6;
    @media screen and (max-width: 800px){
        width: 100%;
    }
`

export const PathDiv = styled.div`
    color: #666666;
    font-size: 13px;
    padding: 30px 0px;
    font-weight: bold;
    a:last-child{
        ::after{
            content: none;
        }
    }
    a{
        ::after{
            content: "|";
            color: #E2E2E2;
            padding: 0 5px;
        }
    }
`