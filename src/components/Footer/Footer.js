import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
<FooterWrapper>
  <LinkList>
  <LinkColumn>
  <LinkTitle>
  Call</LinkTitle>

  <LinkItem href="tel:111-111-1111">
  111-111-1111
  </LinkItem>
  </LinkColumn>
  <LinkColumn>
  <LinkTitle>
  Email</LinkTitle>

  <LinkItem href="mailto:firstinfirstout2020@gmail.com">
  firstinfirstout2020@gmail.com
  </LinkItem>
  </LinkColumn>
  </LinkList>
  <SocialIconsContainer>
    <CompanyContainer>
      <Slogan>
Turn your dreams into real

      </Slogan>
    </CompanyContainer>
    <SocialContainer>
    <SocialIcons href="https://github.com/furkan-cloud" >
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/furkan-turkoglu/" >
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/poemyapp/" >
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
      </SocialContainer>
  </SocialIconsContainer>
</FooterWrapper>
  );
};

export default Footer;
