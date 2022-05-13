import React, { useEffect, useState } from "react";
import { readCard, readDeck } from "../../utils/api/index";
import Navbar from "../Home/Navbar";
import { useParams } from "react-router-dom";
import CardForm from "./CardForm";

const EditCard = () => {
    const [deck, setDeck] = useState([]);
    const [card, setCard] = useState({ front: "", back: "" });
    const deckId = useParams().deckId;
    const cardId = useParams().cardId;

    useEffect(() => {
        async function readDecksAndCards() {
            try {
                const deckResponse = readDeck(deckId);
                const decksFromAPI = await deckResponse;

                const cardResponse = readCard(cardId);
                const cardsFromAPI = await cardResponse;

                setDeck(decksFromAPI);
                setCard(cardsFromAPI);
            } catch (error) {
                console.log("Read deck error: ", error);
            }
        }
        readDecksAndCards();
    }, [deckId, cardId]);

    //console.log("card", card.front);

    return (
        <div>
            <Navbar deck={deck} navType="Edit Card" />
            <h1>Edit Card</h1>

            <CardForm
                card={card}
                cardFront={card.front}
                cardBack={card.back}
                id={cardId}
                deckId={deckId}
                formType="Edit Card" />

        </div>
    );
}

export default EditCard;
