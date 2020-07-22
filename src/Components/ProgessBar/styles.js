import styled from 'styled-components';

export const Container = styled.div`
  font-size: 72px;
  color: #141414;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin: 10px 0 5px 0;
  width: 50%;
`;

export const SubTitle = styled.h4`
  font-size: 18px;
  font-weight: 700;
  margin: 20px 0;
  color: #FFF;
  text-align: left;
`;

export const Progress = styled.div`
  display: flex;
  width: 100%;
  height: 5px;
  background: #fff;
  &::after {
    content: '';
    width: calc(100% * ${(props) => props.value / props.maxValue});
    background: #9013fe;
  }
`;
