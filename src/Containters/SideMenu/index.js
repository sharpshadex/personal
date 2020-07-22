import React from 'react';
import {
  Container, Row, ProfilePhoto, Column, Title, Nav, List, ListItem,
} from './styles';
import ppImage from '../../pp.png';

const LIST = [
  { name: 'Home' },
  { name: 'Experience' },
  { name: 'Works' },
  { name: 'Testimonials' },
  { name: 'Contact' },
];

export default function SideMenu() {
  const generateList = () => LIST.map((item) => (
    <ListItem>
      {item.name}
    </ListItem>
  ));

  return (
    <Container>
      <Row>
        <Column>
          <ProfilePhoto src={ppImage} />
          <Title>
            Muhammet Olcay
          </Title>
        </Column>
      </Row>
      <Nav>
        <List>
          {
            generateList()
          }
        </List>
      </Nav>
    </Container>
  );
}
