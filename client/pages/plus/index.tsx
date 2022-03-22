import axios from "axios";
import Page from '../../components/SerializePage'

const SerializePage = ({props}: any) => {
    return(
        <Page props={props}/>
    )
}

SerializePage.getInitialProps = async function(context: any){
    const res = await axios.get(`https://uolib.herokuapp.com/plus/all/date/1`)
    const props = res.data;
    console.log(props);
    return {props}
}

export default SerializePage