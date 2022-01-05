import styled from 'styled-components'

export const Body = styled.div`
    width: 1150px;
    min-height: 1000px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 50px;
    display: flex;
    flex-direction: column;
`

export const NameDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 20px;
`

export const BodyDiv = styled.div`
    display: flex;
`

export const Profile = styled.img`
    border-radius: 50%;
    right: 10px;
    top: -10px;
    position: absolute;
    height: 80px;
    width: 80px;
`

export const Info = styled.div`
    width: 33%;
`

export const Comment = styled.div`
    width: 66%;
    margin-left: 15px;
`

export const Card = styled.div`
    width: 100%;
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    margin-bottom: 10px;
`

export const CardHeader = styled.div`
    width: 100%;
    color: white;
    padding: 8px 16px;
    background-color: #343a40;
    box-sizing: border-box;
    border-radius: 8px 8px 0px 0px;
    font-size: 13px;
`

export const CardBody = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`