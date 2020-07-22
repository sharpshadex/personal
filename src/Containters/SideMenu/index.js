import React from 'react';
import {
  Container, Row, ProfilePhoto, Column, Title, Nav, List, ListItem, Label,
} from './styles';
import ppImage from '../../pp.png';

const LIST = [
  { name: 'home' },
  { name: 'summary' },
  { name: 'experience' },
  { name: 'works' },
  { name: 'testimonials' },
];

export default function SideMenu() {
  const handleScrollToContent = (targetSection) => (event) => {
    event.stopPropagation();
    event.preventDefault();
    document.getElementById(targetSection).scrollIntoView({
      behavior: 'smooth',
    });
  };

  const generateList = () => LIST.map((item) => (
    <ListItem key={item.name}>
      <Label href="" onClick={handleScrollToContent(item.name)}>{item.name}</Label>
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
