import { FunctionComponent } from "react";
import styled from "styled-components";
import { colors, fontSize, spacing } from "../../utils/theme";
import { useNavigate } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";

interface ButtonProps {
  to: string;
  title: string;
}

const Button: FunctionComponent<ButtonProps> = ({ to, title }) => {
  const navigate = useNavigate();
  return (
    <ButtonWrapper
      onClick={() => {
        navigate(to);
      }}
    >
      {title}
      <RiArrowRightLine size={30} />
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  cursor: pointer;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  font-weight: bold;
  font-size: ${fontSize.xl};
  background-color: ${colors.themeLight};
  border-radius: 0.5rem;
  border: 3px solid ${colors.themeDark};
  color: ${colors.themeDark};
  padding: ${spacing.sm} ${spacing.md};
  svg {
    transition: transform 0.5s ease;
    margin-left: ${spacing.md};
  }
  :hover {
    svg {
      transform: translateX(10px);
    }
  }
`;

export default Button;
