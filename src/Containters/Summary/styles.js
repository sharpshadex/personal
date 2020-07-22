import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  max-width: 1080px;
  width: 1080px;
`;

export const Section = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5em;
  color: #888;
  text-align: left;
`;

export const SubTitle = styled.h2`
  font-size: 30px;
  font-weight: 900;
  text-transform: uppercase;
  color: #fff;
`;

export const Divider = styled.div`
  display: flex;
  position:relative;
  padding: 10px 40px;
  font-size: 15px;
  text-align: left;
  &::after {
    content: '';
    position: absolute;
    width: 9px;
    height: 9px;
    left: 0;
    background-color: #9013fe;
    top: 15px;
    z-index: 1;
  }

`;
