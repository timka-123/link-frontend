import {React, Component} from "react";
import {resolve} from "crypto-browserify/example/bundle";
import "../config"

import 'axios'
import axios from "axios";


class Redirecter extends Component {
    render () {
        var parts = window.location.href.split('/')
        var linkName = parts[3]
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
        return
    }
}

export default Redirecter;
