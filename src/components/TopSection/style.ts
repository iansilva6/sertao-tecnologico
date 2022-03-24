import styled from 'styled-components';
import banner from '../../images/banner.webp';

export const Section = styled.section`
    height: 100vh;
    background: url(${banner})center no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
`;

export const Title = styled.h2`
    font-weight: 700;
    font-style: normal;
    color: rgb(255, 255, 255);
    font-size: 45px;
`;

export const SubTitle = styled.p`
    font-size: 16px;
    color: rgb(255, 255, 255);
`;