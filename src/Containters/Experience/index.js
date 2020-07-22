import React from 'react';
import {
  Container, Section, SubTitle, Divider, CompanyTitle, LeftBorder, Paragraph, Line, JobTitle, CustomLink,
} from './styles';
import experience from './experience.json';

export default function Experience() {
  const getExperienceInfo = () => experience.map((info) => <Line>{info}</Line>);

  return (
    <Container id="experience">
      <Section>
        <SubTitle>
          Experience
        </SubTitle>
      </Section>
      <Divider dateRange="2016 - 2020">
        <LeftBorder />
        <CompanyTitle>
          <CustomLink href="https://useinsider.com/" target="_blank">
            Insider
          </CustomLink>
        </CompanyTitle>
        Mobile Business Unit
        <JobTitle>Sr. FrontEnd Developer</JobTitle>
        <Paragraph>
          {getExperienceInfo()}
        </Paragraph>
      </Divider>
    </Container>
  );
}
