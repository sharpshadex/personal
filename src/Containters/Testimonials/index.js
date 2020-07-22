import React from 'react';
import {
  Container, Section, SubTitle, Divider, CompanyTitle, LeftBorder, JobTitle, CustomLink, Label,
} from './styles';

export default function Testimonials() {
  return (
    <Container id="testimonials">
      <Section>
        <SubTitle>
          Testimonials
        </SubTitle>
      </Section>
      <Divider>
        <LeftBorder />
        <CompanyTitle>
          <CustomLink href="https://tr.linkedin.com/in/mehmet-sinan-toktay-19287348" target="_blank">
            Mehmet Sinan Toktay
          </CustomLink>
        </CompanyTitle>
        <JobTitle>Co-Founder & CTO at Insider</JobTitle>
        <Label>
          He was my mentor and CTO. You can ask to him that Am I good employee?
        </Label>
      </Divider>
      <Divider>
        <LeftBorder />
        <CompanyTitle>
          <CustomLink href="https://www.linkedin.com/in/ugur-serttas/" target="_blank">
            Uğur Serttaş
          </CustomLink>
        </CompanyTitle>
        <JobTitle>Senior Product Manager at Insider</JobTitle>
        <Label>
          He was my product manager. You can ask to him that Am I good developer?
        </Label>
      </Divider>
      <Divider>
        <LeftBorder />
        <CompanyTitle>
          <CustomLink href="https://www.linkedin.com/in/onur-%C5%9Fahin-%C5%9Fent%C3%BCrk-711a16a4/" target="_blank">
            Onur Şahin Şentürk
          </CustomLink>
        </CompanyTitle>
        <JobTitle>Frontend Engineer</JobTitle>
        <Label>
          He was my team mate. You can ask to him that Am I good co-worker?
        </Label>
      </Divider>
    </Container>
  );
}
