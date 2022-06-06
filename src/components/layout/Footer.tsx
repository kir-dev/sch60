import { FunctionComponent } from "react";
import styled from "styled-components";
import { ThemeType } from "../../utils/types";
import { breakpoints, colors, spacing } from "../../utils/theme";
import { ReactComponent as Schonherz } from "../logos/schonherz.svg";
import { ReactComponent as KirDev } from "../logos/kirdev.svg";
import { ReactComponent as SchDesign } from "../logos/schdesign.svg";

interface FooterProps {
  theme: ThemeType;
}

const Footer: FunctionComponent<FooterProps> = ({ theme }) => {
  return (
    <FooterWrapper theme={theme}>
      <h2>sch60</h2>
      <p>60.sch.bme.hu</p>
      <a href="mailto:sch60@sch.bme.hu">6x@sch.bme.hu</a>
      <a href="https://fb.com/schonherz60" target="_blank" rel="noreferrer">
        fb.com/schonherz60
      </a>
      <div>
        <Schonherz />
        <KirDev />
        <SchDesign />
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
    svg {
      height: 5rem;
      width: 10rem;
      margin: ${spacing.md};
    }
    .dynamicColor path,
    .dynamicColor rect {
      ${({ theme }) => theme === "light" && "fill:white !important;"};
    }
    @media screen and (max-width: ${breakpoints.md}) {
      flex-direction: column;
    }
  }
  .darkPart {
    fill: white;
  }
`;
