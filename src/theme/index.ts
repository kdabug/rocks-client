import { font } from "./font";
import { ITheme } from "./types";
import { themeColors } from "./color";

export const theme: ITheme = {
  font,
  ...themeColors
};
