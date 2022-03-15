import Page from '../../../../plus/[type]/[order]/[page]/[tag]'
import axios from 'axios'

const SerializePage = ({props}: any) => {
    return(
        <Page props={props}/>
    )
}

SerializePage.getInitialProps = async function(context: any){
    const {type, order, page, tag} = context.query;
    const res = await axios.get(`https://uolib.herokuapp.com/${context.pathname}/${type ? type : "all"}/${order ? order : "date"}${page ? `/${page}` : ""}${tag ? `/${tag}` : ""}`)
    const props = await res.data;
    console.log(`https://uolib.herokuapp.com/${context.pathname}/${type ? type : "all"}/${order ? order : "date"}${page ? `/${page}` : ""}${tag ? `/${tag}` : ""}`);
    return {props}
}

export default SerializePage