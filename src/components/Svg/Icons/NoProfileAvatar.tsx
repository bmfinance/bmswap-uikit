import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
  const secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";

  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <path d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z" fill={primaryColor} />
      <mask id="A" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
        <path d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z" fill="#c4c4c4" />
      </mask>
<g transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
<path d="M185 270 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0 -7-4 -4 -10z"/>
<path d="M220 235 c12 -15 30 -12 30 6 0 5 -10 9 -21 9 -18 0 -19 -2 -9 -15z"/>
<path d="M130 190 c0 -11 5 -20 10 -20 6 0 10 9 10 20 0 11 -4 20 -10 20 -5 0 -10 -9 -10 -20z"/>
<path d="M226 195 c-19 -14 -18 -15 12 -15 22 0 32 5 32 15 0 19 -19 19 -44 0z"/>
<path d="M52 136 c-17 -36 -20 -51 -12 -66 16 -29 58 -26 72 5 10 21 8 29 -9 48 -12 12 -23 30 -25 41 -2 13 -9 5 -26 -28z"/>
<path d="M220 150 c-8 -5 -10 -10 -5 -10 6 0 20 -3 33 -6 16 -5 22 -2 22 10 0 18 -27 21 -50 6z"/>
<path d="M240 105 c0 -8 7 -15 15 -15 8 0 15 7 15 15 0 8 -7 15 -15 15 -8 0 -15 -7 -15 -15z"/>
<path d="M176 95 c-4 -13 -2 -14 14 -5 23 13 26 20 6 20 -8 0 -16 -7 -20 -15z"/>
<path d="M220 60 c-11 -7 -7 -10 18 -10 17 0 32 5 32 10 0 13 -30 13 -50 0z"/>
</g>
    </Svg>
  );
};

export default Icon;
