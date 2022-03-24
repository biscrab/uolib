import Page from '../../components/MyBookPage'
import axios from 'axios'
import { getCookie } from 'cookies-next'

const MyBookPage = ({props}: any) => {
    return(
        <>
            <Page props={props}/>
        </>
    )
}

MyBookPage.getInitialProps = async function(context: any){
    const token = getCookie("uolib_token");
    const res = await axios.get(`https://uolib.herokuapp.com/mybook/like`, {headers: {Authorization: `Bearer ${token}`}})
    const props = await res.data;
    console.log(res);
    return {props}
}

export default MyBookPage