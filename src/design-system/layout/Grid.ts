import styled, { css } from "styled-components";
import { BgColor, Border, BoxStyle } from "./layout.types";
import { getStyle, toMarginPaddingString } from "./layout.utils";

export const GridLayoutBase = styled.div<BgColor & BoxStyle & Border>`${({
  theme,
  p,
  ph,
  pv,
  pt,
  pr,
  pb,
  pl,
  m,
  mh,
  mv,
  mt,
  mr,
  mb,
  ml,
  w,
  h,
  rounded,
  z,
  outline,
  bgColor = "TRANSPARENT",
}) => css`
    ${getStyle("padding", toMarginPaddingString(p, ph, pv, pt, pr, pb, pl))}
    ${getStyle("margin", toMarginPaddingString(m, mh, mv, mt, mr, mb, ml))}
    ${getStyle("width", w)}
    ${getStyle("height", h)}
    ${getStyle("border-radius", rounded)}
    ${getStyle("border-color", outline && outline in theme ? theme[outline] : outline)}
    ${getStyle("z-index", z)}
    ${typeof rounded === "number" ? "overflow: hidden;" : ""}
    ${typeof outline === "string" ? "border-width: 1px; border-style: solid;" : ""}
    display: grid;
    align-items: center;
    justify-items: center;
    background-color: ${bgColor && bgColor in theme ? theme[bgColor] : bgColor}; 
  `}
`;

export const GridRows = styled(GridLayoutBase)`
  grid-template-rows: repeat(auto-fit, minmax(100px, 1fr));
`;

export const GridCols = styled(GridLayoutBase)`
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
`;