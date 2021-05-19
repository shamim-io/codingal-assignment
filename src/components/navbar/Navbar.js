import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import Logo from "../../logo";
import Accessibility from "./Accessibility";
import NavLinks from "./NavLinks";
import { DeviceSize } from "../../responsive/index";
import MobileNavLinks from "./MobileNavlinks";

const NavbarContainer = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  background-color: transparent;
`;

const LeftSection = styled.div`
  display: flex;
`;

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: flex-start;
  margin-bottom: 6px;
`;

const RightSection = styled.div`
  display: flex;
`;

function Navbar() {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
  return (
    <NavbarContainer>
      <LeftSection>
        <Logo />
      </LeftSection>
      <MiddleSection>{!isMobile && <NavLinks />}</MiddleSection>
      <RightSection>
        {!isMobile && <Accessibility />}
        {isMobile && <MobileNavLinks />}
      </RightSection>
    </NavbarContainer>
  );
}

export default Navbar;
