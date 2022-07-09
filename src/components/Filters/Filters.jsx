import React from "react";
import styled from "styled-components";

import NameFilter from "../NameFilter/";

const Filters = () => {
    return (
        <FiltersBox>
            <NameFilter />
        </FiltersBox>
    );
};

const FiltersBox = styled.div`
    width: 100%;
    height: 56px;
    margin-top: 1rem;
    margin-bottom: 61px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
`;

export default Filters;
