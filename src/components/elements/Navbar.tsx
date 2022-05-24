import { FunctionComponent, useState } from "react";
import styled from "styled-components";
import {
  boxShadow,
  breakpoints,
  colors,
  fontSize,
  spacing,
} from "../../utils/theme";
import { Link, useNavigate } from "react-router-dom";

interface NavbarProps {
  theme: "light" | "dark";
}

const Navbar: FunctionComponent<NavbarProps> = ({ theme }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <>
      <NavbarWrapper theme={theme}>
        <NavbarItem to="/esemenyek">Események</NavbarItem>
        <Logo
          onClick={() => {
            navigate("/");
          }}
        />
        <NavbarItem to="/rolunk" active>
          Rólunk
        </NavbarItem>
      </NavbarWrapper>
      <Drawer open={menuOpen} theme={theme}>
        <NavbarItem to="/esemenyek">Események</NavbarItem>
        <NavbarItem to="/rolunk" active>
          Rólunk
        </NavbarItem>
      </Drawer>
      <NavbarWrapperMobile theme={theme}>
        <MenuButton
          theme={theme}
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          isOpen={menuOpen}
        />
        <Logo
          onClick={() => {
            navigate("/");
          }}
        />
      </NavbarWrapperMobile>
    </>
  );
};

export default Navbar;

const NavbarItem = styled(Link)<{ active?: boolean }>`
  text-decoration: none;
  font-weight: lighter;
  font-size: ${fontSize.xl};
  margin: 0 ${spacing.xl};
`;

const NavbarBaseStyle = styled.nav<{ theme: string }>`
  margin: 0 auto;
  position: sticky;
  top: 0;
  box-sizing: border-box;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  display: flex;
  flex-wrap: nowrap;
  box-shadow: ${boxShadow};
  ${NavbarItem} {
    color: ${({ theme }) => (theme === "dark" ? "black" : colors.themeLight)};
  }
  background-color: ${({ theme }) =>
    theme === "dark" ? colors.themeLight : colors.themeDark};
  padding: ${spacing.md};
  align-items: center;
  z-index: 30;
`;

const NavbarWrapper = styled(NavbarBaseStyle)`
  width: 90%;
  max-width: 1200px;
  justify-content: center;
  @media screen and (max-width: ${breakpoints.md}) {
    display: none;
  }
`;

const NavbarWrapperMobile = styled(NavbarBaseStyle)`
  width: 90%;
  max-width: 1200px;
  display: none;
  justify-content: space-between;
  @media screen and (max-width: ${breakpoints.md}) {
    display: flex;
  }
`;

const Logo = styled.div`
  background-image: url("${process.env.PUBLIC_URL + "/img/logo.png"}");
  background-color: white;
  height: 4rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 6rem;
  border-radius: 1rem;
  cursor: pointer;
`;

interface MenuButtonProps {
  onClick: () => void;
  isOpen: boolean;
  theme: string;
}

const MenuButton: FunctionComponent<MenuButtonProps> = ({
  onClick,
  isOpen,
  theme,
}) => {
  return (
    <MenuButtonWrapper onClick={onClick} theme={theme}>
      <MenuButtonLine $isOpen={isOpen} />
      <MenuButtonLine $isOpen={isOpen} />
      <MenuButtonLine $isOpen={isOpen} />
    </MenuButtonWrapper>
  );
};

const MenuButtonLine = styled.span<{ $isOpen: boolean }>`
  position: absolute;
  height: 3px;
  border-radius: 500px;
  width: 30px;
  transition: width 0.5s, transform 0.5s;
  transform-origin: left;
  left: 10px;
  background-color: black;
  :first-of-type {
    top: 10px;
    ${({ $isOpen }) => $isOpen && "transform: rotate(45deg); width: 28px;"};
  }
  :nth-of-type(2) {
    top: 20px;
    ${({ $isOpen }) => $isOpen && "width: 0px;"};
  }
  :last-of-type {
    top: 30px;
    ${({ $isOpen }) => $isOpen && "transform: rotate(-45deg); width: 28px;"};
  }
`;

const MenuButtonWrapper = styled.button<{ theme: string }>`
  appearance: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  height: 23px;
  width: 30px;
  position: relative;
  padding: 10px;
  box-sizing: content-box;
  span {
    background-color: ${({ theme }) =>
      theme === "dark" ? colors.themeDark : colors.themeLight};
  }
`;

const Drawer = styled(NavbarBaseStyle)<{ theme: string; open: boolean }>`
  position: fixed;
  top: 13%;
  left: 10%;
  display: none;
  flex-direction: column;
  overflow: hidden;
  background-color: ${({ theme }) =>
    theme === "dark" ? colors.themeLight : colors.themeDark};
  ${({ open }) => !open && "top: -20%;"}
  transition: top .5s ease;
  ${NavbarItem} {
    color: ${({ theme }) => (theme === "dark" ? "black" : colors.themeLight)};
    margin: ${spacing.md};
  }
  @media screen and (max-width: ${breakpoints.md}) {
    display: flex;
  }
  z-index: 0;
`;
