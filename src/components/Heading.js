import styled, { css } from "styled-components";
import { BREAKPOINTS } from "../constants";

const HeadingBase = styled.h1(({ color, size, desktopSize, uppercase, pt, pb, underlined }) => css`
    font-size: ${size};
    color: ${color};
    font-family: 'Sora', sans-serif;
    text-align: left;
    padding-top: ${pt};
    padding-bottom: ${pb};

    @media screen and (min-width: ${BREAKPOINTS.lg}){
        font-size: ${desktopSize};
    }
    
    ${underlined ? 'text-decoration: underline' : ''}

    ${uppercase ? `
        text-transform: uppercase;
        letter-spacing: 3px;
        ` : ``};
`);

const Heading = ({ text, size, desktopSize, color, uppercase, pt, pb, underlined }) => (
    <HeadingBase
        color={color}
        size={size}
        desktopSize={desktopSize}
        uppercase={uppercase}
        pt={pt}
        pb={pb}
        underlined={underlined}
    >
        {text}
    </HeadingBase>
);

export default Heading;