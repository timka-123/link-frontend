import {React, Component} from "react";
import "../App.css"
import "../config"

import axios from 'axios'


class AddLink extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''}
        this.handleChange = this.handleChange.bind(this)
        this.short = this.short.bind(this)
        this.createLink = this.createLink.bind(this)
    }

    handleChange (event) {
        this.setState({value: event.target.value})
    }

    short () {
        if (this.state.value === "") {
            return
        }
        const linkName = this.createLink(this.state.value)
        console.log(linkName)
        this.setState({value: `https://timka.su/${linkName}`})
    }

    createLink(url) {
        axios.post("https://link.timka.su",
            {name: makeid(6), url: url}).then(function (response) {
                console.log(response.data.name)
            return `${response.data.name}`
        })
    }

    render () {
        return <div className="addForm">
            <h3 className="title">Timka ShortLink</h3>
            <div className="form">
                <input
                    name="link"
                    type="url"
                    placeholder="Link to be short"
                    className="linkInput"
                    value={this.state.value}
                    onChange={this.handleChange}
                    autoComplete="off"
                    required/>
                <br/>
                <button onClick={this.short} className="shortButton">Short!</button>
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
