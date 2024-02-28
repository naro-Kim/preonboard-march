import styled, { css } from "styled-components";
import { BgColor, Border, BoxStyle, Grid } from "./layout.types";
import { getStyle, toMarginPaddingString, toPx } from "./layout.utils";

export const GridLayoutBase = styled.div<BgColor & BoxStyle & Border & Grid>`${({
  theme,
  gap = 4,
  alignItems,
  justifyContent,
  gridTemplateRows,
  gridTemplateColumns,
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
    ${getStyle("gap", toPx(gap))} 
    ${getStyle("border-radius", rounded)}
    ${getStyle("border-color", outline && outline in theme ? theme[outline] : outline)}
    ${getStyle("z-index", z)}
    ${typeof rounded === "number" ? "overflow: hidden;" : ""}
    ${typeof outline === "string" ? "border-width: 1px; border-style: solid;" : ""}
    display: grid;
    gap: ${gap};
    flex-direction: column;
    align-items: ${alignItems};
    justify-content: ${justifyContent};
    grid-template-rows: ${gridTemplateRows};
    grid-template-columns: ${gridTemplateColumns};
    background-color: ${bgColor && bgColor in theme ? theme[bgColor] : bgColor}; 
  `}
`;

export const GridRows = styled(GridLayoutBase)`
  grid-auto-flow: row;
  `;

export const GridCols = styled(GridLayoutBase)`
  grid-auto-flow: column; 
`;