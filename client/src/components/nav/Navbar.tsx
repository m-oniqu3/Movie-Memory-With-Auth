import { useState } from "react";
import { IconContext } from "react-icons";
import { BiSearch, BiUserCircle } from "react-icons/bi";
import { RiMenuFill } from "react-icons/ri";
import { styled } from "styled-components";
import Container from "../../helpers/ui/Container";
import Logo from "./../../assets/logo.png";
import MobileMenu from "./MobileMenu";

const StyledNav = styled.nav`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav__container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .icons {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
      cursor: pointer;
    }
  }

  figure {
    width: 7rem;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const handleMobileMenu = () => setOpenMobileMenu((state) => !state);

  return (
    <>
      <StyledNav>
        <Container className="nav__container">
          <figure>
            <img src={Logo} alt="logo" />
          </figure>

          <div className="icons">
            <IconContext.Provider
              value={{ color: "var(--primary-neutral)", size: "1.4rem" }}
            >
              <div>
                <BiSearch />
              </div>
              <div>
                <BiUserCircle />
              </div>

              <div onClick={handleMobileMenu}>
                <RiMenuFill />
              </div>
            </IconContext.Provider>
          </div>
        </Container>
      </StyledNav>

      {openMobileMenu && <MobileMenu setOpenMobileMenu={setOpenMobileMenu} />}
    </>
  );
};

export default Navbar;
