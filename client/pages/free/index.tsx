import Page from '../plus/[type]/[order]/[page]/[tag]'
import axios from 'axios'

const Free = ({props}: any) => {
    return(
        <Page props={props}/>
    )
}

Free.getInitialProps = async function(context: any){
    const {type, order, page, tag} = context.query;
    const res = await axios.get(`https://uolib.herokuapp.com/${context.pathname}${type&&order&&page ? `/${type}/${order}/${page}`: ""}${tag ? `/${tag}` : ""}`)
    const data = await res.data;
    return {
        props : {data}
    }
}


export default Free