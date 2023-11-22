import {React, Component} from "react";
import {resolve} from "crypto-browserify/example/bundle";
import "../config"

const axios = require('axios').default


class Redirecter extends Component {
    render () {
        var parts = window.location.href.split('/')
        var linkName = parts[3]
        console.log(linkName)
        axios.get(`https://link.timka.su?link=${linkName}`).then(
            function (response) {
                const json = response.toString()
                const obj = JSON.parse(json)
                console.log(obj)
                window.location.href = obj.url
            }
        )
        return
    }
}

export default Redirecter;
