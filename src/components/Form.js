import React from "react";
import { Link } from "react-router-dom";

const Form = () => {
    return(
        <form className="ui form">
            <div className="field">
                <input type="text" placeholder="Enter Title"/>
                <input type="text" style={{marginTop: 10}} placeholder="Enter Description"/>
            </div>
            <button className="ui primary button" onClick={e => e.preventDefault()}>Submit</button>
            <Link to="/" className="ui negative button">Cancel</Link>
        </form>
    )
}

export default Form;