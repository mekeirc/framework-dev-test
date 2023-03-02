import React from 'react';
import styled from 'styled-components';
import ButtonAccent from '../images/button-accent.svg';
import { COLORS, BREAKPOINTS } from '../constants';
import { PrimaryButton } from './Buttons';

const Base = styled.section`
    background: ${COLORS.navy.hex};
    padding: 120px 25px 0 25px;
    text-align: left;

    @media screen and (min-width: ${BREAKPOINTS.xl}){
        padding: 120px 110px 0 110px;
    }

    .button-pad {
        margin-bottom: 216px;
    }

    .large-image {
        padding-bottom: 40px;
        max-width: 700px;
        max-height: 680px;
    }
`;

const Heading = styled.h4`
    color: ${COLORS.orange.hex};
    font-family: 'Sora', sans-serif;
    font-size: 14px;
    letter-spacing: 3px;
    text-transform: uppercase;
`;

const Paragraph = styled.p`
    color: ${COLORS.white.hex};
    font-family: 'Sora', sans-serif;
    font-size: 30px;
    margin-bottom: 20px;

    &.sub {
        opacity: 80%;
        font-size: 16px;
        margin-bottom: 40px;
    }

    @media screen and (min-width: ${BREAKPOINTS.lg}){
        font-size: 40px;
        margin-bottom: 60px;
    }
`;

const ImageSection = ({ title, text, subText, buttonText, image}) => (
    <Base className="d-flex flex-column flex-lg-row-reverse">
        <img src={image} alt="Large Img" className="ps-lg-5 ms-lg-2 large-image" />
        <div className="d-flex flex-column">
            <Heading className="ps-6">{title}</Heading>
            <Paragraph>{text}</Paragraph>
            <Paragraph className="sub">{subText}</Paragraph>
            <PrimaryButton className="position-relative button-pad" onClick={() => alert(`${buttonText} clicked`)}>
                {buttonText}
            </PrimaryButton>
        </div>
    </Base>
);

export default ImageSection;