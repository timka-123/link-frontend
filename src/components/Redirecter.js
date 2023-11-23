import {Component} from "react";
import "../config"
import Placeholder from "./Placeholder";

import 'axios'
import axios from "axios";


class Redirecter extends Component {
    render () {
        const parts = window.location.href.split('/')
        const linkName = parts[3]
        console.log(linkName)
        axios.get(`https://link.timka.su?link=${linkName}`).then(
            function (response) {
                const json = response.data[0]
                if (json === undefined) {
                    window.location.href = '/404'
                }
                console.log(json)
                window.location.href = json.url
            }
        )
        return <div>
            <h2 className="notFound">Redirect in progress...</h2>

            <Placeholder />
        </div>
    }
}

export default Redirecter;
