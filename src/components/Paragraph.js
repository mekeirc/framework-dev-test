import styled, { css } from "styled-components";
import { BREAKPOINTS } from "../constants";

const ParagraphBase = styled.p(({ color, size, desktopSize, pt, pb }) => css`
    font-size: ${size};
    color: ${color};
    font-family: 'Sora', sans-serif;
    text-align: left;
    padding-top: ${pt};
    padding-bottom: ${pb};

    @media screen and (min-width: ${BREAKPOINTS.lg}){
        font-size: ${desktopSize};
    }
`);

const Paragraph = ({ text, size, desktopSize, color, uppercase, pt, pb}) => (
    <ParagraphBase
        color={color}
        size={size}
        desktopSize={desktopSize}
        uppercase={uppercase}
        pt={pt}
        pb={pb}
    >
        {text}
    </ParagraphBase>
);

export default Paragraph;