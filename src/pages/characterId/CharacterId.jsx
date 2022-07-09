import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

import API from "../../service/api";

import Wrapper from "../../components/Wrapper";

const CharacterId = () => {
    const api = new API();
    const params = useParams();

    const [character, setCharacter] = useState(null);

    useEffect(() => {
        api.getCharacters(params.id).then((c) => setCharacter(c));
    }, []);

    return (
        <MainWrapper>
            <img
                src={character && character.image}
                alt="Character image"
                style={{ borderRadius: "50%" }}
            />
            <h1
                style={{
                    marginTop: "20px",
                    marginBottom: "40px",
                    fontSize: "2rem",
                }}
            >
                {character && character.name}
            </h1>
            <Content>
                <Info>
                    <Subtitle>Informations</Subtitle>
                    {}
                </Info>
                <Episodes>
                    <Subtitle style={{ alignSelf: "flex-end" }}>
                        Episodes
                    </Subtitle>
                </Episodes>
            </Content>
        </MainWrapper>
    );
};

const MainWrapper = styled(Wrapper)`
    flex-direction: column;
`;

const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
`;

const Info = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
`;

const Episodes = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
`;

const Subtitle = styled.h2`
    margin-bottom: 20px;
    font-size: 20px;
    line-height: 24px;
    color: #8e8e93;
`;

export default CharacterId;
