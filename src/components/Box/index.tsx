import styled from "../../theme/styledComponent";
import { ITheme } from "../../theme/types";

interface IBox {
  h: string;
  w: string;
  p?: number;
  br?: number;
  bgc?: string;
  shadow?: string;
  flex?: boolean;
  fd?: string;
  extend?: (theme: ITheme) => string;
}

export const Box = styled.div<IBox>`
  ${({ flex }) => flex && "display: flex"};
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  padding: ${({ p }) => p && `${p}px`};
  border-radius: ${({ br }) => br && `${br}px`};
  box-shadow: ${({ theme, shadow }) => shadow && theme[shadow]};
  background-color: ${({ theme, bgc }) => (bgc ? theme[bgc] : theme.primary1)};
  ${({ fd, flex }) => flex && fd && `flex-direction: ${fd}`};
  ${({ theme, extend }) => extend && extend(theme)};
`;
