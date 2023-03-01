import React from 'react';
import styled from 'styled-components';
import ButtonAccent from '../images/button-accent.svg';
import NorthernLights from '../images/northern-lights.jpg';
import NorthernLightsLarge from '../images/northern-lights-large.jpg';
import { COLORS } from '../constants';

const Base = styled.section`
    background: url(${NorthernLights}) no-repeat;
    padding: 120px 25px 0 25px;
    text-align: left;
    background-size: cover;

    @media screen and (min-width: 375px){
        background: url(${NorthernLightsLarge}) no-repeat;
        background-size: cover;
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
    font-size: 30px;
    margin-bottom: 20px;

    &.sub {
        opacity: 80%;
        font-size: 16px;
        margin-bottom: 40px;
    }

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


const SliderSection = ({ title, text, subText, buttonText }) => (
    <Base className="d-flex flex-column">
        <Heading className="pe-6 text-center">{title}</Heading>
        <div className="d-flex flex-column align-items-center pb-5">
            <Paragraph className="text-center">{text}</Paragraph>
            <Paragraph className="sub text-center">{subText}</Paragraph>
            <Button className="position-relative" onClick={() => alert(`${buttonText} clicked`)}>
                <p className="mb-0">{buttonText}</p>
                <img src={ButtonAccent} alt="Button Accent" className="position-absolute bottom-0 end-0"/>
            </Button>
        </div>
    </Base>
);

export default SliderSection;