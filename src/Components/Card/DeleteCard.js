import React from "react";
import { deleteCard } from "../../utils/api/index";

const DeleteCard = ({ card }) => {

    const deleteHandler = () => {
        if (window.confirm("Are you sure you want to delete this card?")) {
            deleteCard(card.id);
            window.location.reload();
        }
    };

    return (
        <button type="button" className="btn btn-danger" onClick={deleteHandler}>
            <i className="fas fa-trash-alt"></i>
        </button>
    );
}

export default DeleteCard;
