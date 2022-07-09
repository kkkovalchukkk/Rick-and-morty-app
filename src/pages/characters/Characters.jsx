import React from "react";
import styled from "styled-components";

import logo from "../../assets/img/character-logo.png";

import CharactersList from "../../components/CharactersList";
import Wrapper from "../../components/Wrapper";
import Filters from "../../components/Filters";

const Characters = ({ characters }) => {
    return (
        <MainWrapper>
            <img src={logo} alt="Logo" />
            <Filters />
            <CharactersList characters={characters} />
        </MainWrapper>
    );
};

const MainWrapper = styled(Wrapper)`
    flex-direction: column;
`;

export default Characters;
