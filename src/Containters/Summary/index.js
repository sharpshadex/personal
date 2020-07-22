import React from 'react';
import {
  Container, Section, SubTitle, Divider,
} from './styles';

import summary from './summary.json';

export default function Summary() {
  const getProfessionalSummary = () => summary.map((res) => <Divider>{res}</Divider>);

  return (
    <Container id="summary">
      <Section>
        <SubTitle>
          Professional Summary
        </SubTitle>
      </Section>
      {getProfessionalSummary()}
    </Container>
  );
}
