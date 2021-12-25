import styled from 'styled-components'

export const Body = styled.div`
    margin-top: 30px;
    width: 1100px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
`

export const BTittle = styled.b`
    margin-bottom: 10px;
`

export const Tittle = styled.input`
    display: block;
    outline: 0;
    padding: 12px 10px;
    font-size: .875rem;
    line-height: 1.25;
    color: #495057;
    background-color: #f8f9fa;
    border: 1px solid rgba(0,0,0,0.15);
`

export const SelectDiv = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Select = styled.div`
    width: 200px;
    height: 35px;
    background-color: #f8f9fa;
    border: 1px solid rgba(0,0,0,0.15);
    margin: 30px 0px;
`

export const TextDiv = styled.div`
    border: 1px solid rgba(0,0,0,0.15);
`

export const RTittle = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    b{
        margin-bottom: 5px;
    }
    span{
        color: dimgray;
        font-size: 13px;
    }
    margin-bottom: 10px;
`

export const Review = styled.textarea`
    width: 100%;
    box-sizing: border-box;
    resize: vertical;
    min-height: 300px;
    border: 1px solid rgba(0,0,0,0.15);
    outline: 0;
    padding: 10px;
`

export const ButtonDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    box-sizing: border-box;
    margin-top: 30px;
    margin-bottom: 80px;

    button{
        font-size: 17px;
        display: inline-block;
        font-weight: 600;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        user-select: none;
        border: 1px solid transparent;
        padding: 0.75rem 0.75rem;
        width: 200px;
        font-size: .875rem;
        line-height: 1.25;
        border-radius: 2px;
        transition: all .15s ease-in-out;

        i{
            margin-right: 5px;
        }
    }
`

export const CheckButton = styled.button`
    color: #fff;
    background-color: #17a2b8;
    border-color: #17a2b8;
    margin-right: 20px;
}
`

export const RegistButton = styled.button`
    color: #fff;
    background-color: #0069d9;
    border-color: #0062cc;
`

export const SettingDiv = styled.div`
    background-color: #eee;
    padding: 10px;
    display: flex;
`

interface SettingProps{
    selected: boolean
}

export const Setting = styled.button<SettingProps>`
    background: ${props => props.selected ? "#f8f9fa" : "white"};
    border: 1px solid rgba(0,0,0,0.15);
    width: 35px;
    height: 35px;
    border-radius: 3px;
`

export const Text = styled.div`
    resize: vertical;
    min-height: 500px;
    outline: 0;
    display: block;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
`