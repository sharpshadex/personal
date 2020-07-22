import React from 'react';
import GlitchHeader from '../../Components/GlitchHeader';
import { Container, Section } from './styles';

export default function Home() {
  return (
    <Container id="home">
      <GlitchHeader />
      <Section>
        I&apos;m Muhammet Olcay, frontend developer and architect from Istanbul, Turkey.
        I have rich experience in complex web sites, applications and products building
        and developing.
      </Section>
    </Container>
  );
}
