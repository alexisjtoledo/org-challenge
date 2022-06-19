import * as React from 'react';
import styled from 'styled-components';
import { getSpacingPreset } from '@app/styles/theme/spacing';
import { FC } from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import BrandsSection from '../../components/BrandsSection/BrandsSection';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: ${getSpacingPreset('height-header')};
  min-height: calc(100vh - ${getSpacingPreset('height-header')});
`;

const Demo: FC = () => (
  <Wrapper>
    <HeroSection />
    <BrandsSection />
  </Wrapper>
);

export default Demo;
