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
    padding: 15px;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    button{
        padding: 8px 0px;
        border: 0;
        color: white;
        background-color: #007bff;
    }
    div{
        display: flex;
        button{
        width: 80px;
        margin-left: 10px;
        }
    }
    img{
        margin: 10px 0px;
        width: 85px;
        height: 85px;
    }
`

export const Input = styled.input`
    width: 100%;
    border: 1px solid #ccc;
    background-color: #f1f1f1;
    outline: 0;
    padding: 0px 10px;
    
    :focus{
        background-color: white;
        border-color: #007bff;
    }
`

export const EditTittle = styled.div`
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    h4{
        font-weight: bold;
        color: #333;
    }
`

export const EditDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px 0px;
`

export const EditCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 32.5%;
`

export const EditCard = styled.div`
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    margin-bottom: 10px;
    width: 100%;
`

interface SelectProps{
    selected: boolean
}

export const Toggle = styled.div<SelectProps>`
    background-color: ${props => props.selected ? "#5635ce" : "#bdc1c2"};
    height: 20px;
    width: 80px;
    border-radius: 10px;
    div{
        background-color: #ffffff;
        content: '\0020';
        display: inline-block;
        position: absolute;
        top: 2px;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        transition: left 0.25s;
    }
`