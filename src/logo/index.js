import React from "react";
import styled from "styled-components";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`
  width: 5em;
  height: 3em;

  img {
    width: 100%;
    height: 100%;
  }
`;

function Logo() {
  return (
    <LogoWrapper>
      <LogoImg>
        <img
          src="https://cdn.codingal.com/images/logos/logos-main/logo-with-text.svg"
          alt=""
        />
      </LogoImg>
    </LogoWrapper>
  );
}

export default Logo;
