import React from 'react';
import styled from 'styled-components';
import ButtonAccent from '../images/button-accent.svg';

const Base = styled.section`
    background: #132237;
    padding: 120px 25px 0 25px;
    text-align: left;

    .large-image {
        padding-bottom: 40px;
    }
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
        color: #fff;
        font-family: 'Sora', sans-serif;
        font-size: 16px;
    }
`;


const TextSection = ({ title, text, subText, buttonText, image}) => (
    <Base className="d-flex flex-column flex-lg-row">
        <img src={image} alt="Large Img" className="large-image" />
        <Heading className="pe-6">{title}</Heading>
        <div className="d-flex flex-column">
            <Paragraph>{text}</Paragraph>
            <Paragraph className="sub">{subText}</Paragraph>
            <Button className="position-relative" onClick={() => alert(`${buttonText} clicked`)}>
                <p className="mb-0">{buttonText}</p>
                <img src={ButtonAccent} alt="Button Accent" className="position-absolute bottom-0 end-0"/>
            </Button>
        </div>
    </Base>
);

export default TextSection;