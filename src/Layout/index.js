import React, { Fragment } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import ViewDeck from "../Components/Home/ViewDeck"
import CreateDeckButton from "../Components/Deck/CreateDeckButton";
import CreateDeck from "../Components/Deck/CreateDeck";
import DeckList from "../Components/Deck/DeckList";
import StudyDeck from "../Components/Deck/StudyDeck";
import EditDeck from "../Components/Deck/EditDeck";
import AddCard from "../Components/Card/AddCard";
import EditCard from "../Components/Card/EditCard";
import { Route, Switch } from "react-router-dom";

function Layout() {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path={`/`}>
            <CreateDeckButton />
            <DeckList />
          </Route>

          <Route path="/decks/new">
            <CreateDeck />
          </Route>

          <Route path="/decks/:deckId/study">
            <StudyDeck />
          </Route>

          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>

          <Route path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>

          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>

          <Route path="/decks/:deckId/">
            <ViewDeck />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Fragment>
  );
}

export default Layout;
