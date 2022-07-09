import React from "react";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

const NameFilter = () => {
    return (
        <NameInput>
            <BsSearch
                style={{
                    marginRight: "0.5rem",
                    transform: "translateY(2px)",
                    fill: "rgba(0, 0, 0, 0.5)",
                    cursor: "pointer",
                }}
            />
            <input
                type="text"
                placeholder="Filter by name..."
                style={{ border: "none", height: "100%" }}
            />
        </NameInput>
    );
};

const NameInput = styled.label`
    width: 240px;
    height: 100%;
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.5);
    &:focus {
        outline: none;
    }
`;
export default NameFilter;
