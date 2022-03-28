import Page from '../../components/MyBookPage'
import axios from 'axios'
import getToken from '../../components/getToken'

const MyBookPage = ({props}: any) => {
    return(
        <>
            <Page props={props}/>
        </>
    )
}

MyBookPage.getInitialProps = async function(ctx: any){
    const res = await axios.get(`https://uolib.herokuapp.com/mybook/like`, {headers: {Authorization: `Bearer ${getToken(ctx)}`}})
    const props = await res.data;
    console.log(res);
    return {props}
}

export default MyBookPage