import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  max-width: 540px;
`;

export const Section = styled.p`
  display: flex;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5em;
  color: #888;
  text-align: left;
`;

export const ContactButton = styled.a`
  display: flex;
  color: #FFF;
  text-decoration: none;
  border-radius: 0;
  font-size: 14px;
  font-weight: 900;
  overflow: hidden;
  line-height: 1;
  padding: 15px 24px;
  position: relative;
  text-transform: uppercase;
  border: 2px solid #FFF;
  position: relative;

  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);

  &::before {
    content: '';
    background: #FFF;
    transform: scaleY(0);
    transform-origin: 50% 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: 450ms all ease;
    z-index: -1;
  }

  &:hover {
    color: #9013fe;
    &::before {
      transform: scaleY(1);
    }
  }

  cursor: pointer;
`;

export const SummaryButton = styled(ContactButton)`
  color: #FFF;
  background: #9013fe;
  border-color: #9013fe;
  &::before {
    background: #000;
  }
  &:hover {
    color: #9013fe;
    &::before {
      background: #000;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: calc(100% / 2);
  justify-content: space-between;
`;
