import React from 'react';
import styled from 'styled-components';
import ButtonAccent from '../images/button-accent.svg';

const Base = styled.section`
    background: #132237;
    padding: 0 25px 0 25px;
    text-align: left;
`;

const Heading = styled.h4`
    color: #E8B222;
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
    color: #fff;
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
        color: #fff;
        font-family: 'Sora', sans-serif;
        font-size: 16px;
    }
`;


const TextSection = ({ title, text, buttonText}) => (
    <Base className="d-flex flex-column flex-md-row">
        <Heading className="pe-6">{title}</Heading>
        <Paragraph>{text}</Paragraph>
        <Button className="position-relative">
            <p className="mb-0">{buttonText}</p>
            <img src={ButtonAccent} alt="Button Accent" className="position-absolute bottom-0 end-0"/>
        </Button>
    </Base>
);

export default TextSection;