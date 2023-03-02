import React from 'react';
import styled from 'styled-components';
import Logo from '../images/logo.png';
import MobileMenu from '../images/mobile-menu.svg';
import NightSky from '../images/hero-image.jpg';
import DownArrow from '../images/circle-arrow-down.svg';
import { COLORS, BREAKPOINTS } from '../constants';

const HeroLayout = styled.div`
	padding: 0 25px 0 25px;
	min-height: 70vh;

    @media screen and (min-width: ${BREAKPOINTS.xl}){
        min-height: 100vh;
    }
`;

const Header = styled.header`
    padding: 40px 25px 0 25px;

    .logo {
        width: 108px;
        height: 18px;
    }
`;

const StarBG = styled.div`
    background: url(${NightSky}) center center no-repeat;
    background-size: cover;
`;

const MainHeading = styled.h1`
    font-size: 50px;
    font-family: 'Sora', sans-serif;
    color: ${COLORS.white.hex};
    margin-bottom: 0;

    @media screen and (min-width: ${BREAKPOINTS.lg}){
        font-size: 100px;
    }
`;

const SubHeading = styled.h2`
    color: ${COLORS.white.hex};
    font-family: 'Sora', sans-serif;
    font-size: 18px;
    margin: 20px auto 0 auto;
    max-width: 515px;

    .orange {
        color: ${COLORS.orange.hex};
        padding: 0 0 0 5px;
    }    
`;

const ButtonArea = styled.div`
    bottom: 200px;
`;

const NavLink = styled.a`
    color: ${COLORS.white.hex};
    font-family: 'Sora', sans-serif;
    font-size: 18px;
    margin-right: 30px;
    text-decoration: none;

    &:last-of-type {
        margin-right: 0;
    }

    &:hover, &:active, &:focus {
        color: ${COLORS.orange.hex};
        text-decoration: underline;
    }
`;

const Nav = () => (
    <Header className="w-100 d-flex justify-content-between">
        <img src={Logo} alt="Logo" className="logo" />
        <img src={MobileMenu} alt="Menu" className="d-xl-none" />
        <div className="d-none d-xl-block">
            <NavLink href="#business-plan">Business Plan</NavLink>
            <NavLink href="#about-us">About Us</NavLink>
            <NavLink href="#technology">Technology</NavLink>
            <NavLink href="#investors">Investor Relations</NavLink>
            <NavLink href="#news-resources">News &amp; Resources</NavLink>
            <NavLink href="#contact">Contact Us</NavLink>
        </div>
    </Header>
);

const Hero = () => (
    <React.Fragment>
        <StarBG>
        <Nav />
            <HeroLayout className='d-flex justify-content-center flex-column position-relative'>
                <div>
                    <MainHeading>Welcome to StarForm</MainHeading>
                    <SubHeading>
                        Helping nations achieve 
                        <span className="orange">
                            Lower emissions with Star-Based Solar Technology
                        </span>
                    </SubHeading>
                </div>
                <ButtonArea className="position-absolute start-50">
                    <a href="#mission">
                        <img src={DownArrow} alt="Down Arrow" />
                    </a>
                </ButtonArea>
            </HeroLayout>
        </StarBG>
    </React.Fragment>
);

export default Hero;