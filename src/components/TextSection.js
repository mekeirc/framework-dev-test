import React from 'react';
import styled from 'styled-components';
import { BREAKPOINTS, COLORS } from '../constants';
import { PrimaryButton } from './Buttons';

const Base = styled.section`
    background: ${COLORS.navy.hex};
    padding: 0 25px 0 25px;
    text-align: left;

    @media screen and (min-width: ${BREAKPOINTS.xl}){
        padding: 0 110px 217px 110px;
    }
`;

const Heading = styled.h4`
    color: ${COLORS.orange.hex};
    font-family: 'Sora', sans-serif;
    font-size: 14px;
    letter-spacing: 3px;
    text-transform: uppercase;

    &.pe-6 {
        padding-right: 0;

        @media screen and (min-width: ${BREAKPOINTS.lg}){
            padding-right: 186px;
        }
    }
`;

const Paragraph = styled.p`
    color: ${COLORS.white.hex};
    font-family: 'Sora', sans-serif;
    font-size: 25px;
    margin-bottom: 40px;

    @media screen and (min-width: ${BREAKPOINTS.lg}){
        font-size: 40px;
        margin-bottom: 60px;
    }
`;

const TextSection = ({ title, text, buttonText}) => (
    <Base className="d-flex flex-column flex-lg-row" id="mission">
        <Heading className="pe-6">{title}</Heading>
        <div className="d-flex flex-column">
            <Paragraph>{text}</Paragraph>
            <PrimaryButton className="position-relative" onClick={() => alert(`${buttonText} clicked`)}>
                {buttonText}
            </PrimaryButton>
        </div>
    </Base>
);

export default TextSection;