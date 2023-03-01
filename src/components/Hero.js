import styled from 'styled-components';

const Header = styled.header`
    padding: 40px 25px 0 25px;
`;

const Nav = () => (
    <Header className="w-100 d-flex justify-content-center">Nav Bar</Header>
);

const Hero = () => (
    <div>
        <Nav />
    </div>
);

export default Hero;