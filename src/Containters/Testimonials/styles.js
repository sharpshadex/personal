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
  padding: 15px 40px;
  font-size: 15px;
  text-align: left;
  flex-direction: column;
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
  &::before {
    content: '${(props) => props.dateRange}';
    position: absolute;
    top: 5px;
    color: #999;
    font-size: 14px;
  }
`;

export const CompanyTitle = styled.h4`
  font-size: 28px;
  margin: 20px 0 5px;
`;

export const JobTitle = styled.h5`
  font-size: 20px;
  margin: 20px 0 5px;
`;

export const LeftBorder = styled.div`
  display: flex;
  position: absolute;
  left: 3px;
  width: 1px;
  height: calc(100% - 15px);
  background: #222;
  top: 15px;
`;

export const Label = styled.div`

`;

export const Paragraph = styled.ul`

`;

export const Line = styled.li`

`;

export const CustomLink = styled.a`
  text-decoration: none;
  color: #f4f;
`;
