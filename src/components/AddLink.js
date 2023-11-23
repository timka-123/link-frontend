import {React, Component} from "react";
import "../css/App.css"

import axios from 'axios'


class AddLink extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', buttonText: 'Short!'}
        this.handleChange = this.handleChange.bind(this)
        this.short = this.short.bind(this)
        this.createLink = this.createLink.bind(this)
    }

    handleChange (event) {
        this.setState({value: event.target.value})
    }

    short () {
        const regex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/ig;
        if (this.state.value === "" || this.state.value.includes('timka.su') || !(regex.test(this.state.value))) {
            return
        }
        var linkName = makeid(6)
        this.createLink(this.state.value, linkName)
        const link = `https://timka.su/${linkName}`
        this.setState({value: link})
        navigator.clipboard.writeText(link)
        this.setState({buttonText: 'Copied!'})
    }

    createLink(url, linkName) {
        return axios.post("https://link.timka.su",
            {name: linkName, url: url})
    }

    render () {
        return <div className="addForm">
            <div className="form">
                <input
                    name="link"
                    type="url"
                    placeholder="Link to be short"
                    className="linkInput"
                    value={this.state.value}
                    onChange={this.handleChange}
                    autoComplete="off"
                    required />
                <br/>
                <button onClick={this.short} className="shortButton">{this.state.buttonText}</button>
            </div>
        </div>
    }
}

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

export default AddLink
