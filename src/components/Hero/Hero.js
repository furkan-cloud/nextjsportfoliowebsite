import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
<Section row nopadding>
  <LeftSection>
    <SectionTitle>
      Welcome To <br/>
      My Personal Portfolio
    </SectionTitle>
    <SectionText>
      You can find my projects about react, react native, javascript, html, css and more. You can also read my writings about IT.
    </SectionText>
    <Button onClick={() => window.location = `https://google.com`}>
      Learn More
    </Button>
  </LeftSection>

</Section>
);

export default Hero;