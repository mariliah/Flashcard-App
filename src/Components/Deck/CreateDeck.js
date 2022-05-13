import React, { useState } from "react";
import { createDeck } from "../../utils/api/index";
import Navbar from "../Home/Navbar";
import { useHistory } from "react-router-dom";



const CreateDeck = () => {
    const history = useHistory();
    const [deck, setDeck] = useState([]);


    const changeNameHandler = (event) => {
        setDeck({ ...deck, name: event.target.value })
    }

    const changeDescHandler = (event) => {
        setDeck({ ...deck, description: event.target.value })
    }

    const submitFormHandler = async (event) => {
        event.preventDefault();
        console.log("submitting form...")
        await createDeck(deck);
        history.push(`/`)
    }

    const cancelHandler = (event) => {
        event.preventDefault();
        history.push(`/`)
    }

    return (
        <div>
            <Navbar deck={deck} navType="Create Deck" />
            <h1>Create Deck</h1>

            <form onSubmit={submitFormHandler} >

                <div className="form-group">
                    <label>
                        <h4>Name</h4>
                    </label>
                    <input
                        className="form-control"
                        name="name"
                        id="name"
                        type="text"
                        placeholder={deck.name}
                        onChange={changeNameHandler}
                    />
                </div>

                <div className="form-group">
                    <label>
                        <h4>Description</h4>
                    </label>
                    <textarea
                        className="form-control"
                        name="description"
                        id="description"
                        rows="6"
                        placeholder={deck.description}
                        onChange={changeDescHandler}
                    ></textarea>
                </div>

                <button type="button" className="btn btn-secondary mr-2" onClick={cancelHandler}>
                    Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>

        </div>
    );
}

export default CreateDeck;
