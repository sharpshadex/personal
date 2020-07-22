import React from 'react';
import {
  Container, Section, SubTitle, Divider, LeftBorder, Paragraph, Line, JobTitle, Label, CustomLink,
} from './styles';

export default function Works() {
  return (
    <Container>
      <Section id="works">
        <SubTitle>
          Works
        </SubTitle>
      </Section>
      <Divider>
        <LeftBorder />
        <JobTitle>
          <CustomLink href="https://globalgamejam.org/2019/games/dream-catcher" target="_blank">
            Dream Catcher
          </CustomLink>
        </JobTitle>
        <Label>
          Local multiplayer 2D game completed in 48 hours for Global Game Jam 2019
        </Label>
      </Divider>
      <Divider>
        <LeftBorder />
        <JobTitle>Hydrazine.js</JobTitle>
        <Label>
          Custom component and style generator with
          <CustomLink href="https://redux-saga.js.org/" target="_blank">
            {' '}
            Saga
          </CustomLink>
          {' '}
          It helps to render dynamic content in ReactJS
          and convert static drafts and minimize memory usage.
        </Label>
      </Divider>
      <Divider>
        <LeftBorder />
        <JobTitle>Aeon - SPA</JobTitle>
        <Label>
          New dashboard for Insider mobile business unit.
          It's a single page application written in ReactJS.
          Workspace structure used for dashboard.
          Cosmos(v0.70) used as a component framework.
        </Label>
      </Divider>
      <Divider>
        <LeftBorder />
        <JobTitle>Cosmos v0.70</JobTitle>
        <Label>
          It's a design system written in ReactJS which means component framework with default configurations
          to ready-to-use.
          Currently it is a private package in NPM.
        </Label>
        <Label>
          <CustomLink target="_blank" href="https://www.notion.so/Recap-from-Figma-Istanbul-1st-Meetup-6be60144e6334c28b122b946f142ad70">
            Also we did a design system workshop ...
          </CustomLink>
        </Label>
      </Divider>
      <Divider>
        <LeftBorder />
        <JobTitle>
          <CustomLink href="https://useinsider.com/in-app-messaging-templates#store" target="_blank">
            Template Store
          </CustomLink>
        </JobTitle>
        <Label>
          Template store is a collection of ready-to-use templates that
          fit a wide variety of use cases and which can be
          customized to your messaging requirements.
          Written in ReactJS-Redux-Saga.
        </Label>
        <Label />
        <Paragraph>
          <Line>
            Survey
          </Line>
          <Line>
            WhatsApp Trigger
          </Line>
          <Line>
            Wheel Of Fortune
          </Line>
          <Line>
            NPS
          </Line>
          <Line>
            Social Proof
          </Line>
        </Paragraph>
      </Divider>
      <Divider>
        <LeftBorder />
        <JobTitle>
          <CustomLink href="https://useinsider.com/in-app-messaging-templates/#benefits" target="_blank">
            Live Preview
          </CustomLink>
        </JobTitle>
        <Label>
          QR code generator component for web applications.
          QR cıde scanner for iOS and Android platforms.
          It helps to connect and define mobile devices on web
          applications without any installation requirements.
        </Label>
        <Label>
          used on Template Store.
        </Label>
      </Divider>
    </Container>
  );
}
