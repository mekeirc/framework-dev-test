import React from 'react';
import styled from 'styled-components';
import Logo from '../images/logo.png';
import MobileMenu from '../images/mobile-menu.svg';
import NightSky from '../images/hero-image.jpg';
import DownArrow from '../images/circle-arrow-down.svg';
import { COLORS } from '../constants';

const HeroLayout = styled.div`
    padding: 0 25px 0 25px;
    min-height: 585px;
`;

const Header = styled.header`
    padding: 40px 25px 0 25px;
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

    @media screen and (min-width: 992px){
        font-size: 100px;
    }
`;

const SubHeading = styled.h2`
    color: ${COLORS.white.hex};
    font-family: 'Sora', sans-serif;
    font-size: 18px;
    margin-bottom: 0;
    margin-top: 20px;

    .orange {
        color: ${COLORS.orange.hex};
        padding: 0 0 0 5px;
    }    
`;

const ArrowArea = styled.div`
    min-height: 217px;
    background: ${COLORS.navy.hex};
`;

const Nav = () => (
    <Header className="w-100 d-flex justify-content-between">
        <img src={Logo} alt="Logo" />
        <img src={MobileMenu} alt="Menu" />
    </Header>
);

const Hero = () => (
    <React.Fragment>
        <StarBG>
        <Nav />
            <HeroLayout className='d-flex justify-content-center flex-column'>
                <div>
                    <MainHeading>Welcome to StarForm</MainHeading>
                    <SubHeading>
                        Helping nations achieve 
                        <span className="orange">
                            Lower emissions with Star-Based Solar Technology
                        </span>
                    </SubHeading>
                </div>
            </HeroLayout>
        </StarBG>
        <ArrowArea className="d-flex align-items-center justify-content-center">
            <img src={DownArrow} alt="Down Arrow" />
        </ArrowArea>
    </React.Fragment>
);

export default Hero;