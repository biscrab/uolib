import Page from './[type]/[order]/[page]/[tag]'
import axios from 'axios'

const SerializePage = ({props}: any) => {
    return(
        <Page props={props}/>
    )
}

export default SerializePage