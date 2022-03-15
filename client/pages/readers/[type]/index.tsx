import Page from './[page]'
import axios from 'axios'

const ReadersPage = (props: any) => {
    return (
        <Page props={props}/>
    )
}

ReadersPage.getInitialProps = async function (context: any){
    const {type, page} = context.query;
    const res = await axios.get(`https://uolib.herokuapp.com/readers/${type}/${page ? page : "1"}`);
    const data = res.data;
    return{
        props: {data}
    }
}

export default ReadersPage