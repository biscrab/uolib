import Page from './[type]'
import axios from 'axios'

const MyBookPage = ({props}: any) => {
    return(
        <>
            <Page props={props}/>
        </>
    )
}

MyBookPage.getInitialProps = async function(context: any){
    const res = await axios.get(`https://uolib.herokuapp.com/mybook/like`)
    const props = await res.data;
    console.log(res);
    return {props}
}

export default MyBookPage