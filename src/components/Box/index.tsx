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
  background-color: ${({ theme, bgc }) => (bgc ? theme[bgc] : theme.primary2)};
  ${({ fd, flex }) => flex && fd && `flex-direction: ${fd}`};
`;
