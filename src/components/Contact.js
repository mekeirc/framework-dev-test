import React from 'react';
import styled from 'styled-components';
import Starburst from '../images/starburst.jpg';
import StarburstLarge from '../images/starburst-large.jpg';
import CutButton from '../images/cut-button.svg';
import { COLORS } from '../constants';

const Base = styled.div`
    background: url(${Starburst}) no-repeat;
    background-size: cover;
    padding: 80px 25px 57px 25px;

    @media screen and (min-width: 992px){
        background: url(${StarburstLarge}) no-repeat;
        padding: 188px 25px 142px 25px;
    }
`;

const Heading = styled.h4`
    color: ${COLORS.orange.hex};
    font-family: 'Sora', sans-serif;
    font-size: 14px;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 20px;
`;

const Paragraph = styled.p`
    color: ${COLORS.white.hex};
    font-family: 'Sora', sans-serif;
    font-size: 30px;
    margin-bottom: 40px;

    @media screen and (min-width: 992px){
        font-size: 40px;
        margin-bottom: 60px;
    }
`;

const Button = styled.button`
    background: url(${CutButton}) no-repeat;
    border: 0;
    color: ${COLORS.white.hex};
    font-family: 'Sora', sans-serif;
    font-size: 16px;
    width: 190px;
    padding: 20px 35px;
`;

const Contact = () => (
    <Base>
        <Heading>Get in touch</Heading>
        <Paragraph>
            Help us get one step <br />
            closer to Net Zero Star-Based Solar Power.
        </Paragraph>
        <Button>Contact Us</Button>
    </Base>
);

export default Contact;