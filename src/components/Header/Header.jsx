import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import Wrapper from "../Wrapper/";

import logo from "../../assets/img/logo-black 1.png";

const Header = ({ navItems }) => {
    return (
        <Headerh>
            <Wrapper>
                <NavLink to="/">
                    <img src={logo} alt="logo" />
                </NavLink>
                <Nav>
                    <NavLink to="/characters" style={LinkStyle}>
                        Characters
                    </NavLink>
                    <NavLink to="/locations" style={LinkStyle}>
                        Locations
                    </NavLink>
                    <NavLink to="/episodes" style={LinkStyle}>
                        Episodes
                    </NavLink>
                </Nav>
            </Wrapper>
        </Headerh>
    );
};

const LinkStyle = {
    fontSize: "1rem",
    cursor: "pointer",
};

const Headerh = styled.div`
    width: 100%;
    height: 60px;
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 24px;
`;

export default Header;
