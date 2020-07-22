import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  Container, Row, ProfilePhoto, Column, Title, Nav, List, ListItem, Label, Footer, Wrapper, CustomLink,
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
      <Wrapper>
        <Row>
          <Column>
            <ProfilePhoto src={ppImage} />
            <Title href="https://www.linkedin.com/in/muhammet-olcay-62130a135" target="_blank">
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
      </Wrapper>
      <Footer>
        <CustomLink href="https://twitter.com/mholcay" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </CustomLink>
        <CustomLink href="https://www.instagram.com/olcayym/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </CustomLink>
        <CustomLink href="https://www.linkedin.com/in/muhammet-olcay-62130a135/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </CustomLink>
        <CustomLink href="mailto:olcaymhmmet@gmail.com" target="_blank">
          <FontAwesomeIcon icon={faMailBulk} />
        </CustomLink>
      </Footer>
    </Container>
  );
}
