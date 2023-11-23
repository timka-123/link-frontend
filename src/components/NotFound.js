import {React, Component} from "react";
import "../App.css"

import Placeholder from "./Placeholder";


class NotFound extends Component {
    render () {
        return <div>
            <h2 className="notFound">Not found or deleted.</h2>

            <Placeholder />
        </div>
    }
}

export default NotFound
