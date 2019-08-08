import styled from "../../theme/styledComponent";

interface IButton {
  m?: string;
  width: string;
  height: string;
  primary?: boolean;
  border?: string;
  onClick?: () => void;
}

export const Button = styled.button<IButton>`
  color: ${({ theme, primary }) => (primary ? theme.primary5 : theme.white)};
  background: ${({ theme, primary }) =>
    primary ? theme.primary1 : theme.primary3};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 12px;
  margin-top: ${({ m }) => m};
  border: 1px solid
    ${({ theme, border }) => (border ? theme[border] : theme.white)};
  outline: none;
  cursor: pointer;
  &:hover {
    opacity: 0.6;

    transition: all 0.2s;
  }
`;
