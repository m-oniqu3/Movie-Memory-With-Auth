import { useState } from "react";
import { GrMenu } from "react-icons/gr";
import { styled } from "styled-components";
import Container from "../../helpers/ui/Container";
import Logo from "./../../assets/logo.png";

const StyledNav = styled.nav`
  /* background: blueviolet; */
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;

  figure {
    width: 7rem;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const Navbar = () => {
  const [showFullNav, setShowFullNav] = useState(false);
  return (
    <StyledNav>
      <Container>
        <figure>
          <img src={Logo} alt="logo" />
        </figure>

        {showFullNav && (
          <div className="icons">
            <GrMenu />
          </div>
        )}
      </Container>
    </StyledNav>
  );
};

export default Navbar;
