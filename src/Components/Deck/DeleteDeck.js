import React from "react";
import { deleteDeck } from "../../utils/api/index";

const DeleteDeck = ({ deck }) => {

    const deleteHandler = () => {
        if (window.confirm("Are you sure you want to delete this deck?")) {
            deleteDeck(deck.id);
            window.location.reload();
        }
    };

    return (
        <button type="button" className="btn btn-danger" onClick={deleteHandler}>
            Delete
        </button>
    );
}

export default DeleteDeck;
