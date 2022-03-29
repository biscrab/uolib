import Page from '../../components/MyBookPage'
import axios from 'axios'
import getToken from '../../components/getToken'
/*
type BookInterface = {
    id: number,
    title: string,
    author: string,
    image: string,
    explane: string,
    tag: string[];
}*/

const MyBookPage = ({props}) => {
    return(
        <Page props={props}/>
    )
}

MyBookPage.getInitialProps = async function(ctx){
    console.log("ctx");
    const { type } = ctx.query;
    //const token = await ctx.req.cookies.uolib_token;
    let res;
    if(ctx.res){
        res = await axios.get(`https://uolib.herokuapp.com/mybook/${type}`, {headers: {Authorization: `Bearer ${getToken(ctx)}`}})
    }
    else{
        res = await axios.get(`https://uolib.herokuapp.com/mybook/${type}`)
    }
    const props = await res.data;
    return {props}
}

export default MyBookPage

/*                <Link href="/mybook/donation">
                    <S.Select selected={type==="donation"}>후원목록</S.Select>
                </Link>
                            {type !== "support" ?
            <>
                        :
            <S.Support>
                <div>후원금 정산</div>
                <ul>
                    
                </ul>
            </S.Support>
            }
                        </>*/
/*                <Link href="/mybook/support">
                    <S.Select selected={type==="support"}>후원금 정산</S.Select>
                </Link> */