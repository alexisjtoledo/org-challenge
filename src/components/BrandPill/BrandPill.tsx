import React, { FC } from 'react';
import {
  StyledBrandPillContainer,
  StyledImgContainer,
  StyledImg,
  StyledDescriptionContainer,
  StyledName,
  StyledText,
} from './BrandPill.styles';
import GenericBrandLogo from '../../routes/demo/assets/GenericBrandLogo.png';

interface IBrandPillProps {
  name: string;
  positionCount: number;
  href: string;
}

const BrandPill: FC<IBrandPillProps> = ({ name, positionCount, href }) => (
  <StyledBrandPillContainer role="link" href={href}>
    <StyledImgContainer>
      <StyledImg src={GenericBrandLogo} alt={`${name}'s logo`} />
    </StyledImgContainer>
    <StyledDescriptionContainer>
      <StyledName>{name}</StyledName>
      <StyledText>{positionCount} positions</StyledText>
    </StyledDescriptionContainer>
  </StyledBrandPillContainer>
);

export default BrandPill;
