import React, { useState } from "react";
import styled from "styled-components";
import Accessibility from "./Accessibility";
import { MenuToggle } from "./MenuToggle";

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
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 65px;
  left: 0;
`;
const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 14px;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;

  &:hover {
    border-top: 2px solid #2ecc71;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

function MobileNavLinks() {
  const [isOpen, setOpen] = useState(false);
  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinkWrapper>
          <LinkItem>
            <Link href="#">Trial Lesson [Grade 1-3]</Link>
          </LinkItem>
          <LinkItem>
            <Link>Posts</Link>
          </LinkItem>
          <LinkItem>
            <Accessibility />
          </LinkItem>
        </LinkWrapper>
      )}
    </NavLinksContainer>
  );
}

export default MobileNavLinks;
