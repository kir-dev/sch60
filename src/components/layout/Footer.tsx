import { FunctionComponent } from "react";
import styled from "styled-components";
import { ThemeType } from "../../utils/types";
import { breakpoints, colors, spacing } from "../../utils/theme";

interface FooterProps {
  theme: ThemeType;
}

const Footer: FunctionComponent<FooterProps> = ({ theme }) => {
  return (
    <FooterWrapper theme={theme}>
      <h2>sch60</h2>
      <p>60x.sch.bme.hu</p>
      <a href="mailto:sch60@sch.bme.hu">sch60@sch.bme.hu</a>
      <a href="https://fb.com/schonherz60" target="_blank" rel="noreferrer">
        fb.com/schonherz60
      </a>
      <div>
        <img
          alt="Schönherz"
          src={process.env.PUBLIC_URL + "/img/schonherz.svg"}
        />
        <img alt="KirDev" src={process.env.PUBLIC_URL + "/img/kirdev.svg"} />
        <img
          alt="schdesign"
          src={process.env.PUBLIC_URL + "/img/schdesign.svg"}
        />
      </div>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer<{ theme: ThemeType }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) =>
    theme === "dark" ? colors.themeLight : colors.themeDark};
  color: ${({ theme }) =>
    theme === "light" ? colors.themeLight : colors.themeDark};
  h2 {
    font-weight: bold;
    margin: ${spacing.lg} 0 ${spacing.xs} 0;
  }
  a,
  p {
    margin: 0;
    color: inherit;
    text-decoration: none;
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 5rem;
      width: 10rem;
      margin: ${spacing.md};
    }
    @media screen and (max-width: ${breakpoints.md}) {
      flex-direction: column;
    }
  }
  .darkPart {
    fill: white;
  }
`;
