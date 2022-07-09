import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

const CharactersList = ({ characters }) => {
    const [countCharacters, setCountCharacters] = useState(8);

    const navigate = useNavigate();

    return (
        <>
            <ListC>
                {characters &&
                    characters.slice(0, countCharacters).map((c) => {
                        return (
                            <CardC
                                key={c.id}
                                onClick={() => {
                                    navigate(`/characters/${c.id}`);
                                }}
                            >
                                <img
                                    src={c.image}
                                    alt="Character photo"
                                    style={{
                                        width: "100%",
                                        maxWidth: "240px",
                                        maxHeight: "168px",
                                        objectFit: "cover",
                                    }}
                                />
                                <Content>
                                    {c.id}
                                    <span
                                        style={{
                                            fontSize: "1rem",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        {c.name}
                                    </span>
                                    <span
                                        style={{
                                            fontSize: "0.7rem",
                                        }}
                                    >
                                        {c.species}
                                    </span>
                                </Content>
                            </CardC>
                        );
                    })}
            </ListC>

            {countCharacters >= characters.length ? null : (
                <LoadMoreBtn
                    onClick={() => {
                        setCountCharacters(countCharacters + 8);
                    }}
                >
                    Load More
                </LoadMoreBtn>
            )}
        </>
    );
};

const ListC = styled.ul`
    width: 100%;
    height: 100%;
    margin-bottom: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
`;

const CardC = styled.li`
    width: 100%;
    height: 100%;
    max-width: 240px;
    max-height: 244px;
    display: flex;
    flex-direction: column;
    align-items: start;
    border-radius: 0.5rem;
    overflow: hidden;
    outline: 1px solid rgba(170, 170, 170, 1);
    cursor: pointer;
`;

const Content = styled.div`
    width: 100%;
    height: 100%;
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1px;
`;

const LoadMoreBtn = styled.button`
    padding: 10px 32px;
    margin-bottom: 44px;
    vertical-align: middle;
    text-align: center;
    border: none;
    background: white;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2), 0px 1px 18px rgba(0, 0, 0, 0.12),
        0px 6px 10px rgba(0, 0, 0, 0.14);
    border-radius: 4px;
    cursor: pointer;
    transition: transform 0.05s ease;
    &:hover {
        transform: scale(1.05);
    }
`;

export default CharactersList;
