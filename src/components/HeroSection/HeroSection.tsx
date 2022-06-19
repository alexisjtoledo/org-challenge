import React from 'react';
import {
  StyledHeroSectionContainer,
  StyledImgContainer,
  StyledImg,
  StyledHeadlineContainer,
  StyledHeadlineTitle,
  StyledHeadlineCopy,
  StyledActionsContainer,
  StyledCTAButton,
  StyledCTALink,
} from './HeroSection.styles';
import HeroImg from '../../routes/demo/assets/sectionOne@3x.jpg';

const HeroSection = (): JSX.Element => (
  <StyledHeroSectionContainer role="section">
    <StyledImgContainer>
      <StyledImg
        src={HeroImg}
        alt="Example of organigram. First level: Peter as CEO, second level: Peter as VP Product and Sarah as (CTO), third level: Emilie as Senior Product Designer (highlighted as just joined)."
      />
    </StyledImgContainer>
    <StyledHeadlineContainer>
      <StyledHeadlineTitle>Transparency starts here</StyledHeadlineTitle>
      <StyledHeadlineCopy>
        Join the world&apos;s biggest professional community for teams
      </StyledHeadlineCopy>
      <StyledActionsContainer>
        <StyledCTAButton href="/get-started">Get started</StyledCTAButton>
        <StyledCTALink href="/about">Why The Org?</StyledCTALink>
      </StyledActionsContainer>
    </StyledHeadlineContainer>
  </StyledHeroSectionContainer>
);

export default HeroSection;
