import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import API from "./service/api";
// Components

import Header from "./components/Header/";

// Pages

import Characters from "./pages/characters/";
import CharacterId from "./pages/characterId/";
import Home from "./pages/home";

const navItems = ["characters", "locations", "episodes"];

function App() {
    const [charactersList, setCharactersList] = useState([]);

    const api = new API();

    useEffect(() => {
        api.getCharacters().then((cl) => setCharactersList(cl.results));
    }, [Characters]);

    return (
        <>
            <Header navItems={navItems} />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route
                    exact
                    path="/characters/"
                    element={<Characters characters={charactersList} />}
                />
                <Route exact path="/characters/:id" element={<CharacterId />} />
            </Routes>
        </>
    );
}

export default App;
