import React, { useEffect, useState } from "react";
import { listDecks } from "../../utils/api/index";
import DeleteDeck from "./DeleteDeck"
import { Link } from "react-router-dom";

const DeckList = () => {

    // read deck from API and set as param
    const [decks, setDecks] = useState([]);

    useEffect(() => {
        async function loadDecks() {
            try {
                const response = listDecks();
                const decksFromAPI = await response;
                setDecks(decksFromAPI);

            }
            catch (error) {
                console.log("Load deck error: ", error)
            }
        }
        loadDecks();
    }, []);

    console.log("param", decks)

    return (
        <div>

            {decks.map((deck, index) => {
                return (
                    <div className="card" key={index}>
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <h5 className="card-title">{deck.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{deck.cards.length} cards</h6>
                            </div>

                            <p className="card-text">{deck.description}</p>

                            <div className="d-flex justify-content-between">
                                <div>

                                    <Link to={`/decks/${deck.id}`}>
                                        <button type="button" className="btn btn-secondary mr-2">
                                            <i className="fas fa-eye"></i> View
                                        </button>
                                    </Link>


                                    <Link to={`/decks/${deck.id}/study`}>
                                        <button type="button" className="btn btn-primary" >
                                            <i className="fas fa-book"></i>  Study
                                        </button>
                                    </Link>
                                </div>

                                <div>
                                    <DeleteDeck deck={deck} />
                                </div>

                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default DeckList;
