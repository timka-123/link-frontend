import {React, Component} from "react";
import "../App.css"


class NotFound extends Component {
    render () {
        return <div>
            <h2 className="notFound">Not found or deleted.</h2>

            <p className="small-text">Short any link with <a href="/" className="href">Timka ShortLink</a></p>
        </div>
        // todo add design
    }
}

export default NotFound
