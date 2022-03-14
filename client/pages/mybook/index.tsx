import Page from './[type]'
import axios from 'axios'

const MyBook = (props: object) => {
    return(
        <>
            <Page props={props}/>
        </>
    )
}

Page.getInitialProps = async function(context){
    const { type } = context.query;
    const res = await axios.get(`https://uolib.herokuapp.com/mybook/${type ?type : "like"}`)
    if(res.status === 401){
        alert("로그인을 먼저 해주십쇼.");
    }
    const data = await res.data;
    console.log(res.status);
    return {
        props : {data}
    }
}


export default MyBook