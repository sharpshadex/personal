import React from 'react';
import GlitchHeader from '../../Components/GlitchHeader';
import {
  Container, Section, ContactButton, SummaryButton, Wrapper,
} from './styles';

export default function Home() {
  const handleSummaryButton = () => {
    document.getElementById('summary').scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <Container id="home">
      <GlitchHeader />
      <Section>
        I&apos;m Muhammet Olcay, frontend developer and architect from Istanbul, Turkey.
        I have rich experience in complex web sites, applications and products building
        and developing.
      </Section>
      <Wrapper>
        <SummaryButton onClick={handleSummaryButton}>Summary</SummaryButton>
        <ContactButton href="https://www.linkedin.com/in/muhammet-olcay-62130a135/" target="_blank">Hire Me</ContactButton>
      </Wrapper>
    </Container>
  );
}
