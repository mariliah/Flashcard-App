import React, { useState, useEffect } from "react";
import { createCard, updateCard } from "../../utils/api/index";
import { useHistory } from "react-router-dom";

const CardForm = ({ cardFront, cardBack, deck, id, deckId, formType }) => {
    const history = useHistory();
    const [thiscard, setThisCard] = useState({});

    useEffect(() => {
        setThisCard({ id, deckId, front: cardFront, back: cardBack });
    },[id, deckId, cardFront, cardBack]);


    const changeFrontHandler = (event) => {
        setThisCard({ ...thiscard, front: event.target.value });
    };

    const changeBackHandler = (event) => {
        setThisCard({ ...thiscard, back: event.target.value });
    };

    const submitFormHandler = async (event) => {
        event.preventDefault();

        // add card or update card
        if (formType === "Add Card") {
            await createCard(deckId, thiscard);
        } else {
            await updateCard(thiscard);
        }

        window.location.reload();
    };

    const cancelHandler = async (event) => {
        event.preventDefault();
        history.push(`/decks/${deck.id}`);
    };

    return (
        <div>
            <form onSubmit={submitFormHandler}>
                <div className="form-group">
                    <label>
                        <h4>Front</h4>
                    </label>
                    <textarea
                        className="form-control"
                        name="front"
                        id="front"
                        value={card.front}
                        onChange={changeFrontHandler}
                    ></textarea>
                </div>

                <div className="form-group">
                    <label>
                        <h4>Back</h4>
                    </label>
                    <textarea
                        className="form-control"
                        name="back"
                        id="back"
                        value={card.back}
                        onChange={changeBackHandler}
                    ></textarea>
                </div>

                <button
                    type="button"
                    className="btn btn-secondary mr-2"
                    onClick={cancelHandler}
                >
                    Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default CardForm;
