import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 250px;
  flex-direction: column;
  padding: 40px;
  align-items: center;
  justify-content: space-between;
  border-right: 1px solid #88888833;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : 'column')};
  align-items: center;
`;

export const ProfilePhoto = styled.img`
  object-fit: contain;
  border-radius: 50%;
  height: 150px;
  filter: contrast(0.5);
`;

export const Title = styled.a`
  display: flex;
  text-align: left;
  font-weight: bold;
  font-size: 17px;
  text-transform: uppercase;
  margin-top: 15px;
  cursor: pointer;
  transition: 450ms all ease;
  text-decoration: none;
  color: #FFF;
  &:hover {
    color: #9013fe;
  }
`;

export const Nav = styled.nav`
  display: flex;
  width: 100%;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 0;
`;

export const ListItem = styled.li`
  padding: 8px 0;
  position: relative;
  list-style: none;
  -webkit-transition: all .2s ease-in-out;
  -moz-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
  font-size: 19px;
  text-transform: uppercase;
  text-align: left;
  cursor: pointer;
  transition: 450ms all ease;
  font-weight: bold;

  &:hover {    
    & > a::after {
      opacity: 1;
    }
  }
`;

export const Label = styled.a`
  color: inherit;
  width: fit-content;
  position: relative;
  background-color: transparent;
  z-index: 1;
  text-decoration: none;
  &::after {
    transition: 450ms all ease;
    content: '';
    background: #9013fe;
    width: 100%;
    height: 7px;
    left: 1px;
    opacity: 0;
    bottom: 0;
    position: absolute;
    z-index: -1;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-self: flex-start;
  width: 100%;
  justify-content: space-around;
`;

export const CustomLink = styled(Title)`
  
`;
