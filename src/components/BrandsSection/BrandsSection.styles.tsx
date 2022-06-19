import styled from 'styled-components';
import { getFontSize } from '@app/styles/theme/font';
import { media } from '@app/styles/media';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';

export const StyledBrandsSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 460px;
  background-color: #eef0f4;
  padding: 0 0 76px 0;
`;

export const StyledBrandsSectionTitle = styled.h2`
  max-width: 70vw;
  margin: 40px 0;
  text-align: center;
  font-size: ${getFontSize('fs7')};
  line-height: 34px;
  font-weight: 500;
`;

export const StyledBrandGrid = styled(MaxWidthContainer)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  max-height: 282px;
  overflow: hidden;

  ${media.sm`
    grid-template-columns: repeat(3, 1fr);
  `}

  ${media.lg`
    grid-template-columns: repeat(4, 1fr);
  `}
`;
