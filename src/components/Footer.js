import React from 'react';
import styled from 'styled-components';
import Heading from './Heading';
import Logo from '../images/logo.png';
import TwitterIcon from '../images/twitter-icon.svg';
import { COLORS, BREAKPOINTS } from '../constants';

const FooterBase = styled.footer`
    background: #0C1623;
    padding: 50px 25px 25px 25px;

    @media screen and (min-width: ${BREAKPOINTS.xl}) {
        padding: 50px 110px 25px 110px;
    }

    .logo-pad {
        height: 18px;
        @media screen and (min-width: ${BREAKPOINTS.lg}) {
            padding-top: 66px;
        }
    }
`;

const FooterLinkBase = styled.a`
    color: ${COLORS.white.hex};
    opacity: 60%;
    font-size: 14px;
    text-decoration: none;
    text-align: left;
    font-family: 'Sora', sans-serif;
    padding-bottom: 20px;

    &:hover, &:visited, &:active {
        color: ${COLORS.white.hex};
        opacity: 100%;
    }
`;

const FooterLink = ({ text, href }) => (
    <FooterLinkBase href={`#${href}`}>{text}</FooterLinkBase>
);

const CurrentYear = new Date().getFullYear()

const Footer = () => (
    <FooterBase>
        <div className="d-flex flex-column flex-lg-row justify-content-between">
        <div className="d-inline-flex justify-content-between d-lg-block">
            <img src={Logo} alt="logo" className="text-start logo-pad" />
            <a href="https://twitter.com/WeAre_Framework">
                <img src={TwitterIcon} alt="twitter icon" className="d-lg-none" />
            </a>
        </div>
        <div className="d-flex flex-column">
            <Heading
                text="Contact Us"
                size="12px"
                color={`${COLORS.white.hex}`}
                uppercase
                pt="66px"
                pb="19px"
            />
            <a href="mailto: info@starform.co">
                <Heading
                    text="info@starform.co"
                    size="22px"
                    desktopSize="30px"
                    color={`${COLORS.white.hex}`}
                    pt="12px"
                    underlined
                />
            </a>
            <a href="tel: +44 (0)1235 428199">
                <Heading
                    text="+44 (0)1235 428199"
                    size="22px"
                    desktopSize="30px"
                    color={`${COLORS.white.hex}`}
                    pt="12px"
                    underlined
                />
            </a>
        </div>
        <div className="d-flex flex-column">
            <Heading
                text="Navigation"
                size="12px"
                color={`${COLORS.white.hex}`}
                uppercase
                pt="66px"
                pb="19px"
            />
            <div className="d-flex justify-content-between justify-content-sm-start">
                <div className="d-flex flex-column">
                    <FooterLink text="Business Plan" href="business-plan" />
                    <FooterLink text="About Us" href="about-us" />
                    <FooterLink text="Technology" href="technology" />
                    <FooterLink text="Investor Relations" href="investor-relations" />
                    <FooterLink text="News &amp; Resources" href="news-and-resources" />
                </div>
                <div className="d-flex flex-column ps-sm-5">
                    <FooterLink text="FAQ" href="faq" />
                    <FooterLink text="Contact Us" href="contact-us" />
                </div>
            </div>
        </div>
        <div className="d-flex flex-column">
            <Heading
                text="Legal"
                size="12px"
                color={`${COLORS.white.hex}`}
                uppercase
                pt="66px"
                pb="19px"
            />
            <div className="d-flex flex-column">
                <FooterLink text="Terms &amp; Conditions" href="terms-conditions" />
                <FooterLink text="Privacy Policy" href="privacy" />
            </div>
            <div className="d-lg-none">
                <Heading
                    text={`© Starform ${CurrentYear} | All rights reserved`}
                    size="12px"
                    color={`${COLORS.white.hex}`}
                    pt="50px"
                    pb="21px"
                />
                <Heading
                    text="Website Designed by Framework"
                    size="12px"
                    color={`${COLORS.white.hex}`}
                    pt="0"
                    pb="25px"
                />
            </div>
        </div>
        <div>
            <a href="https://twitter.com/WeAre_Framework">
                <img src={TwitterIcon} alt="twitter icon" className="d-none d-lg-block logo-pad" />
            </a>
        </div>
        </div>
        <div className="d-none d-lg-flex justify-content-between align-items-baseline">
            <Heading
                text={`© Starform ${CurrentYear} | All rights reserved`}
                size="12px"
                color={`${COLORS.white.hex}`}
                pt="50px"
                pb="21px"
            />
            <Heading
                text="Website Designed by Framework"
                size="12px"
                color={`${COLORS.white.hex}`}
                pt="0"
                pb="25px"
            />
        </div>
    </FooterBase>
);

export default Footer;