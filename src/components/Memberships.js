import React from 'react';
import styled from 'styled-components';
import MembershipArea from '../images/membership-area.png';
import { COLORS, BREAKPOINTS } from '../constants';

const Base = styled.div`
    background: ${COLORS.navy.hex};
    padding: 100px 0 57px 0;

    .logos {
        margin-bottom: 79px;
    }
`;

const Heading = styled.h4`
    color: ${COLORS.orange.hex};
    font-family: 'Sora', sans-serif;
    font-size: 14px;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 65px;

    &.pe-6 {
        padding-right: 0;

        @media screen and (min-width: ${BREAKPOINTS.lg}){
            padding-right: 186px;
        }
    }
`;

const Memberships = () => (
    <Base className="overflow-hidden">
        <Heading>Memberships</Heading>
        <img src={MembershipArea} alt="Memberships" className="logos w-100" />
    </Base>
);

export default Memberships;