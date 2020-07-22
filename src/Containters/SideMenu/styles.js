import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 250px;
  flex-direction: column;
  padding: 40px;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #88888833;
`;

export const Row = styled.div`
  display: flex;
  flex: 1;
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

export const Title = styled.div`
  display: flex;
  text-align: center;
  font-weight: bold;
  font-size: 15px;
  text-transform: uppercase;
  margin-top: 15px;
  cursor: pointer;
  transition: 450ms all ease;
  &:hover {
    color: #d1d2cc;
  }
`;

export const Nav = styled.nav`
  display: flex;
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
`;
