import React, { useEffect, useState } from "react";
import { readDeck } from "../../utils/api/index";
import Navbar from "../Home/Navbar";
import CardForm from "./CardForm";
import { useParams } from "react-router-dom";

const AddCard = () => {
    const [deck, setDeck] = useState([]);
    const deckId = useParams().deckId;
    //console.log("loading deck,", deckId);

    useEffect(() => {
        async function readSelectedDeck() {
            try {
                const deckResponse = readDeck(deckId);
                const decksFromAPI = await deckResponse;

                setDeck(decksFromAPI);
            } catch (error) {
                console.log("Read deck error: ", error);
            }
        }
        readSelectedDeck();
    }, [deckId]);


    return (
        <div>
            <Navbar deck={deck} navType="Add Card" />
            <h1>Add Card</h1>
            <p />

            <CardForm deck={deck} deckId={deckId} formType="Add Card" />

        </div>
    );
}

export default AddCard;
