import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 30, text: 'Open Source Projects'},
  { number: 84, text: 'Github Followers', },
  { number: 665, text: 'Github Commits in 2020', },
  { number: 446, text: 'Github Commits in 2021', }
];

const Acomplishments = () => (
<Section>
  <SectionTitle>
    Personal Accomplishments
  </SectionTitle>
  <Boxes>
    {data.map((card, index) => (
      <Box key={index} >
<BoxNum>{card.number}</BoxNum>
<BoxText>{card.text}</BoxText>
        </Box>
    ))}
  </Boxes>
</Section>
);

export default Acomplishments;
