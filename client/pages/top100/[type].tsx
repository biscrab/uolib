import axios from 'axios';
import Page from '../../components/Top100Page'
/*
p. meaning props ->

meaning[definition:string]
meaning: string[definition:string], definition:string

c. meaning[0].definition*/

const Top100Page = ({props}: any) => {
    return <Page props={props}/>
}

Top100Page.getInitialProps = async function(content: any){
    const {type} = content.query;
    const res = await axios.get(`https://uolib.herokuapp.com/top100/${type}`);
    const props = await res.data;
    return{props}
}

export default Top100Page