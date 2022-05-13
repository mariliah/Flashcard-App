import React from "react";
import { Link } from "react-router-dom";

const CreateDeckButton = () => {
    return (
        <div className="CreateDeckButton">
            <Link to={`/decks/new`}>
                <button type="button" className="btn btn-secondary"><i className="fa fa-plus"></i> Create Deck</button>
            </Link>
            <p />
        </div>
    );
}

export default CreateDeckButton;
