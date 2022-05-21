import { FunctionComponent } from "react";
import styled from "styled-components";
import { colors } from "../../utils/theme";
import { ChildrenProp } from "../../utils/types";
import Navbar from "../elements/Navbar";
import Footer from "./Footer";
import ScrollToTop from "../../utils/ScrollToTop";
import { Helmet } from "react-helmet";

interface PageProps {
  theme?: "light" | "dark";
  title: string;
}

const Page: FunctionComponent<PageProps & ChildrenProp> = ({
  title,
  theme = "light",
  children,
}) => {
  return (
    <PageWrapper theme={theme}>
      <Helmet titleTemplate="%s | SCH60">
        <title>{title}</title>
      </Helmet>
      <ScrollToTop />
      <Navbar theme={theme} />
      {children}
      <Footer theme={theme} />
    </PageWrapper>
  );
};

const PageWrapper = styled.div<{ theme: string }>`
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) =>
    theme === "dark" ? colors.themeDark : colors.themeLight};
  div {
    box-sizing: border-box;
  }
`;

export default Page;
