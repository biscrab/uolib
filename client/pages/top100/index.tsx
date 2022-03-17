import axios from 'axios';
import Page from '../../components/Top100Page'

const Top100Page = ({props}: any) => {
    return <Page props={props}/>
}

Top100Page.getInitialProps = async function(content: any){
    const {type} = content.query;
    const res = await axios.get(`https://uolib.herokuapp.com/top100/all`);
    const props = await res.data;
    return{props}
}

export default Top100Page