import styled from "styled-components";
import { colors, fontSize, spacing } from "../../utils/theme";
import { FunctionComponent } from "react";
import { ChildrenProp, ThemeType } from "../../utils/types";

interface SectionProps {
  title?: string;
  theme?: ThemeType;
  widthRestriction?: boolean;
}

const Section: FunctionComponent<SectionProps & ChildrenProp> = ({
  title,
  theme = "light",
  widthRestriction = true,
  children,
}) => {
  return (
    <SectionWrapper widthRestriction={widthRestriction}>
      {title && <SectionTitle theme={theme}>{title}</SectionTitle>}
      {children}
    </SectionWrapper>
  );
};

const SectionWrapper = styled.div<{ widthRestriction: boolean }>`
  margin: ${spacing.xl} auto 0 auto;
  :last-of-type {
    margin-bottom: ${spacing.xl};
  }
  width: 90%;
  ${({ widthRestriction }) => widthRestriction && "max-width: 1200px"};
`;

const SectionTitle = styled.h2<{ theme?: ThemeType }>`
  font-size: ${fontSize["3xl"]};
  font-weight: normal;
  color: ${({ theme }) =>
    theme === "light" ? colors.themeDark : colors.themeLight};
  margin: 0 0 ${spacing.md} 0;
`;

export default Section;
