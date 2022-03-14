import Page from './[type]'
import axios from 'axios'

const Top100Page = (props: any) => {
    return(
        <>
            <Page props={props}/>
        </>
    )
}

Top100Page.getInitialProps = async function(content: any){
    const {type} = content.query;
    const res = await axios.get(`https://uolib.herokuapp.com/top100/${type ? type : "all"}`);
    const data = await res.data;
    return{
        props: {data}
    }
}

export default Top100Page