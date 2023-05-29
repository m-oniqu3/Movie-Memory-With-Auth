import ReactDOM from "react-dom";
import { IconContext } from "react-icons";
import { BiSearch, BiUserCircle } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Container from "../../helpers/ui/Container";
import Logo from "./../../assets/logo.png";

const StyledMenu = styled.nav`
  background-color: var(--primary-dark);
  color: var(--primary-neutral);
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;

    figure {
      width: 7rem;

      img {
        width: 100%;
      }
    }

    .icons {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      cursor: pointer;
    }
  }

  ul {
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style: none;
    gap: 0.5rem;

    a {
      text-decoration: none;
      color: inherit;
      cursor: pointer;
      transition: color 0.3s ease-in-out;

      &:hover {
        color: var(--primary-light);
      }
    }
  }
`;

type Props = {
  closeMobileMenu: () => void;
};

const MobileMenu = ({ closeMobileMenu }: Props) => {
  const navigate = useNavigate();

  return ReactDOM.createPortal(
    <StyledMenu>
      <Container>
        <div className="header">
          <figure>
            <img src={Logo} alt="logo" />
          </figure>

          <div className="icons">
            <IconContext.Provider
              value={{ color: "var(--primary-neutral)", size: "1.4rem" }}
            >
              <div onClick={() => navigate("/search")}>
                <BiSearch />
              </div>
              <div>
                <BiUserCircle />
              </div>

              <div onClick={() => closeMobileMenu()}>
                <VscChromeClose />
              </div>
            </IconContext.Provider>
          </div>
        </div>

        <ul>
          <li>
            <Link to="/browse">Browse</Link>
          </li>
          <li>
            <Link to="/memories">Memories</Link>
          </li>
          <li>
            <Link to="/tvshows">TV Shows</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
      </Container>
    </StyledMenu>,
    document.querySelector("#menu") as HTMLDivElement
  );
};

export default MobileMenu;
