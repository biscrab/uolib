import axios from "axios";
import Page from '../../../../../components/SerializePage'

const SerializePage = ({props}: any) => {
    return(
        <Page props={props}/>
    )
}

SerializePage.getInitialProps = async function(context: any){
    const {type, order, page, tag} = context.query;
    const res = await axios.get(`https://uolib.herokuapp.com/plus/${type}/${order}/${page}/${tag}`)
    const props = res.data;
    return {props}
}

export default SerializePage