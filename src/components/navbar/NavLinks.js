import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
const LinkWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
`;
const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: whitesmoke;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;

  &:hover {
    border-top: 2px solid #2ecc71;
  }
`;

const Linki = styled.a`
  text-decoration: none;
  color: gray;
  font-size: inherit;
`;

function NavLinks() {
  return (
    <NavLinksContainer>
      <LinkWrapper>
        <LinkItem>
          <Linki href="#">Trial Lesson [Grade 1-3]</Linki>
        </LinkItem>

        <LinkItem>
          <Linki>
            <Link to="/posts" className="cursor-pointer">
              Posts
            </Link>
          </Linki>
        </LinkItem>
      </LinkWrapper>
    </NavLinksContainer>
  );
}

export default NavLinks;
