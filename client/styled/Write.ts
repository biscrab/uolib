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

export const Search = styled.div`
    display: flex;
    margin-top: 20px;
    button{
        border: 0;
        width: 90px;
    }
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
    width: 100%;

    :focus{
        border: 1px solid royalblue;
        background-color: white;
    }
`

export const SelectDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`
export const Select = styled.div`
    width: 170px;
    height: 40px;
    background-color: #f8f9fa;
    border: 1px solid rgba(0,0,0,0.15);
    display: flex;
    align-items: center;
    select{
        color: #333;
        background: none;
        border: 0;
        height: 100%;
        width: 100%;
        outline: 0;
        padding: 0px 8px;
        font-size: 15px;
    }
    span{
        height: 34px;
        width: 34px;
        background-color: #e9ecef;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    input{
        width: 135px;
        border: 0;
        outline: 0;
        padding: 0px 5px;
        font-size: 14px;
        background: none;
    }
    div{
        width: 140px;
        height: 100%;
        background-color: #e9ecef;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
    }
`

export const RoundDiv = styled.div`
    display: flex;
    align-items: end;
    width: 100%;
    margin: 30px 0px;

    select{
        height: 40px;
        background: none;
        border: 0;
        width: 400px;
        outline: 0;
        margin-right: 10px;
        background-color: #f8f9fa;
        border: 1px solid rgba(0,0,0,0.15);
    }

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
        height: 40px;
        font-size: .875rem;
        line-height: 1.25;
        border-radius: 2px;
        transition: all .15s ease-in-out;
    }
`

export const TextDiv = styled.div`
    border: 1px solid rgba(0,0,0,0.15);
    margin-top: 20px;
    .text{
        resize: vertical;
        min-height: 500px;
        outline: 0;
        display: block;
        padding: 10px;
        width: 100%;
        box-sizing: border-box;
    }
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
    selected?: boolean
}

export const Setting = styled.button<SettingProps>`
    background: ${props => props.selected ? "#e9ecef" : "white"};
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(0,0,0,0.15);
    width: 35px;
    height: 35px;
    border-radius: 3px;
    margin-right: 5px;

    svg{
        width: 20px;
        height: 20px;
    }
`

export const SettingButton = styled.div`
    display: flex;
    flex-direction: column;
`

export const EffectSelectDiv = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    position: absolute;
    margin-top: 40px;
    border: 1px solid #eee;
    box-shadow: 0px 0px 1px 0.5px rgba(0, 0, 0, 0.3);

    :last-child{
        border-bottom: 0;
    }

    div{
        padding: 5px 10px;
        width: 100px;
        font-size: 15px;
        border-bottom: 1px solid #eee;
        cursor: pointer;
    }
`

export const EffectSelect = styled.div`
    padding: 5px 10px;
    width: 100px;
    font-size: 15px;
    border-bottom: 1px solid #eee;
    cursor: pointer;
`

export const SmokyEffect = styled.div`
span {
  display: inline-block;
  text-shadow: 0 0 0 whitesmoke;
  animation: smoky 5s 3s both;
}

span:nth-child(even){
 :hover{
  animation-name: smoky-mirror;
 }
}

@keyframes smoky {
  60% {
    text-shadow: 0 0 40px whitesmoke;
  }
  to {
    transform:
      translate3d(15rem,-8rem,0)
      rotate(-40deg)
      skewX(70deg)
      scale(1.5);
    text-shadow: 0 0 20px whitesmoke;
    opacity: 0;
  }
}

@keyframes smoky-mirror {
  60% {
    text-shadow: 0 0 40px whitesmoke; }
  to {
    transform:
      translate3d(18rem,-8rem,0)
      rotate(-40deg) 
      skewX(-70deg)
      scale(2);
     text-shadow: 0 0 20px whitesmoke;
    opacity: 0;
  }
}

@for $item from 1 through 21 {
  span:nth-of-type(#{$item}){ 
    animation-delay: #{(3 + ($item/10))}s; 
  }
} 
`

export const NeonEffect = styled.div`
  --interval: 1s;
  display: block;
  text-shadow: 
    0 0 10px var(azure),
    0 0 20px var(aqua),
    0 0 40px var(dodgerblue),
    0 0 80px var(blue);
  will-change: filter, color;
  filter: saturate(60%);
  animation: flicker steps(100) var(--interval) 1s infinite;
`

export const GritchyEffect = styled.div`
span{
  text-align: center;
  color: transparent;
  text-shadow: 0px 0px 3px #eee, 5px 5px 2px teal, -5px -2px 2px maroon;
  overflow: hidden;
}
`

export const Background = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
` 

export const ImageDiv = styled.div`
    background: white;
    width: 330px;
`

export const ImageHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    h3{
        font-weight: 600;
        margin: 0;
    }
    svg{
        cursor: pointer;
    }
`

export const ImageBody = styled.div`
    background: #f8f9fa;
    padding: 20px;
    display: flex;
    flex-direction: column;
    input{
        margin-top: 5px;
    }
    span{
        font-size: 15px;
        font-weight: bold;
        //margin-bottom: 5px;
    }
    div{
        margin-bottom: 20px;
    }
`

export const ImageBottom = styled.div`
    padding: 10px;
    display: flex;
    justify-content: flex-end;

    button{
        color: white;
        background-color: #007bff;
        border: 1px solid #007bff;
        padding: 7px;
        font-size: 15px;
        border-radius: 2px;
        font-weight: 500;
    }
`