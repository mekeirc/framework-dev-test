import React from 'react';
import styled from 'styled-components';
import ButtonAccent from '../images/button-accent.svg';
import { BREAKPOINTS, COLORS } from '../constants';

const Base = styled.section`
    background: ${COLORS.navy.hex};
    padding: 0 25px 0 25px;
    text-align: left;

    @media screen and (min-width: ${BREAKPOINTS.xl}){
        padding: 0 110px 0 110px;
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

        @media screen and (min-width: 992px){
            padding-right: 186px;
        }
    }
`;

const Paragraph = styled.p`
    color: ${COLORS.white.hex};
    font-family: 'Sora', sans-serif;
    font-size: 25px;
    margin-bottom: 40px;

    @media screen and (min-width: 992px){
        font-size: 40px;
        margin-bottom: 60px;
    }
`;

const Button = styled.button`
    background: #3C76B6;
    border: 0;
    padding: 20px 35px;
    max-width: 190px;

    p {
        color: ${COLORS.white.hex};
        font-family: 'Sora', sans-serif;
        font-size: 16px;
    }
`;


const TextSection = ({ title, text, buttonText}) => (
    <Base className="d-flex flex-column flex-lg-row">
        <Heading className="pe-6">{title}</Heading>
        <div className="d-flex flex-column">
            <Paragraph>{text}</Paragraph>
            <Button className="position-relative" onClick={() => alert(`${buttonText} clicked`)}>
                <p className="mb-0">{buttonText}</p>
                <img src={ButtonAccent} alt="Button Accent" className="position-absolute bottom-0 end-0"/>
            </Button>
        </div>
    </Base>
);

export default TextSection;