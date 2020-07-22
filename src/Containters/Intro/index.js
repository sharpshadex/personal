import React from 'react';
import GlitchHeader from '../../Components/GlitchHeader';
import { Container, Section } from './styles';

export default function Intro() {
  return (
    <Container>
      <GlitchHeader />
      <Section>
        I&apos;m Muhammet Olcay, frontend developer and architect from Istanbul.
      </Section>
    </Container>
  );
}
