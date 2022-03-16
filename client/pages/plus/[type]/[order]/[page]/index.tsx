import axios from "axios";
import Page from '../../../../../components/SerializePage'

const SerializePage = ({props}: any) => {
    return(
        <Page props={props}/>
    )
}

SerializePage.getInitialProps = async function(context: any){
    const {type, order, page, tag} = context.query;
    const res = await axios.get(`https://uolib.herokuapp.com${context.pathname.slice(0, 5)}/${type ? type : "all"}/${order ? order : "date"}/${page ? page : "1"}${tag ? `/${tag}` : ""}`)
    const props = res.data;
    console.log(props);
    return {props}
}

export default SerializePage