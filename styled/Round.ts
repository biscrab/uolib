import styled from 'styled-components'

interface NoticeProps{
    notice: boolean
}

export const Round = styled.li<NoticeProps>`
    background-color: ${props => props.notice ? "#feffe5" : "white"}
    width: 100%;
    cursor: pointer;
    border-bottom: 1px solid #eee;
    /*:hover{
        background: #fafafa
    }*/
`

export const RoundDiv = styled.div`
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const RLeft = styled.div`
    display: flex;
    flex-direction: column;
`

export const TittleDiv = styled.div`
    display: flex;
    align-items: flex-end;
`

export const Price = styled.div`
    font-size: 11px;
    background: ${props => props.color};
    color: white;
    padding: 2px 5px;
    border-radius: 5px;
    text-shadow: 0.5px 0.5px black;
    margin-right: 5px;
`

export const Episode = styled.div`
    margin-right: 10px;
    color: #555;
    font-weight: bold;
    background-color: #eee;
    padding: 2px 5px;
    font-size: 11px;
    border-radius: 5px;
`

export const RDate = styled.span`
    font-size: 13px;
    font-weight: bold;
`

export const RInfo = styled.div`
    margin-top: 5px;
    color: #888;
    font-size: 11px;
    i{
        margin-right: 3px;
    }
    span{
        margin-right: 5px;
    }
`

export const RTittle = styled.b`
    font-size: 18px;
`
