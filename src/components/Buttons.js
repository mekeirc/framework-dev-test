import styled from "styled-components";
import CutButton from '../images/cut-button.svg';
import { COLORS } from "../constants";

export const PrimaryButton = styled.button`
    background: url(${CutButton}) no-repeat;
    border: 0;
    color: ${COLORS.white.hex};
    font-family: 'Sora', sans-serif;
    font-size: 16px;
    width: 190px;
    padding: 20px 35px;
`;