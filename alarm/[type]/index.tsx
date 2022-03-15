import Page from './[page]'
import axios from 'axios'

const AlarmPage = ({props}: any) => {
    return(
        <>
            <Page props={props}/>
        </>
    )
}

AlarmPage.getInitialProps = async function(context: any){
    const { type, page } = context.query;
    const res = await axios.get(`https://uolib.herokuapp.com/mybooke/${type ? type : "like"}/${page ? page : 1}`)
    const data = await res.data;
    return {
        props : {data}
    }
}

export default AlarmPage