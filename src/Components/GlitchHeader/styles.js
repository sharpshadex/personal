import styled from 'styled-components';

export const Container = styled.div`
  font-size: 72px;
  color: #141414;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin: 10px 0 5px 0;
`;

export const GlitchEffect = styled.div`
  color: #f0f0f0;
  position: relative;
  &::before, &::after {
    background: transparent;
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    clip: rect(0, 0, 0, 0);
  }
`;
