import React from 'react';
import { Container, GlitchEffect } from './styles';

export default function GlitchHeader() {
  return (
    <Container>
      <GlitchEffect data-text="Hello">
        Hello,
      </GlitchEffect>
    </Container>
  );
}
