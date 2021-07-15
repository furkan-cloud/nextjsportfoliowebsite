import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id="tech">
  <SectionDivider />
  <br/>
  <SectionTitle>Technologies</SectionTitle>
<SectionText>
  I'm working with lots of technologies but mainly with react and react native
</SectionText>
<List>
  <ListItem>
    <DiReact size="3rem" />
    <ListContainer>
      <ListTitle>
        Front-End
      </ListTitle>
      <ListParagraph>
        Experience with <br/>
        React.js and Javascript
      </ListParagraph>
    </ListContainer>
      </ListItem>
      <ListItem>
    <DiFirebase size="3rem" />
    <ListContainer>
      <ListTitle>
        Back-End
      </ListTitle>
      <ListParagraph>
        Experience with <br/>
       Nodejs and Django
      </ListParagraph>
    </ListContainer>
      </ListItem>
      <ListItem>
    <DiZend size="3rem" />
    <ListContainer>
      <ListTitle>
        Mobile
      </ListTitle>
      <ListParagraph>
        Experience with <br/>
        React Native
      </ListParagraph>
    </ListContainer>
      </ListItem>
</List>
</Section>
);

export default Technologies;
