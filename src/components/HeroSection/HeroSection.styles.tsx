import styled from 'styled-components';
import { getFont, getFontSize } from '@app/styles/theme/font';
import { getColor } from '@app/styles/theme/colors';
import { media } from '@app/styles/media';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import Link from '../Link/Link';

export const StyledHeroSectionContainer = styled(MaxWidthContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 85vw;
  height: auto;
  margin: 46px 7.5vw !important;
  padding: 0 !important;

  ${media.sm`
    width: 66vw;
    margin: 56px 17vw !important;
  `}

  ${media.lg`
    flex-direction: row-reverse;
    margin: 90px auto !important; 
  `}
`;

export const StyledHeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  ${media.sm`
    margin-top: 56px;
  `}

  ${media.lg`
    max-width: 50%;
    margin-top: 0;
  `}
`;

export const StyledHeadlineTitle = styled.h1`
  font-family: ${getFont('primary')};
  line-height: 56px;
  font-size: 44px;
  text-align: center;
  font-weight: 700;
  margin-block-start: 0;
  margin-block-end: 0;

  ${media.sm`
    font-size: 66px;
    line-heght: 72px;
  `}

  ${media.lg`
    line-height: 66px;
    font-size: 72px;
    text-align: left;
  `}
`;

export const StyledHeadlineCopy = styled.p`
  font-family: ${getFont('primary')};
  font-size: 26px;
  font-weight: 400;
  text-align: center;
  line-height: 40px;
  color: #767676;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-top: 16px;

  ${media.sm`
    font-size: 26px;
    line-height: 34px;
  `}

  ${media.lg`
    line-height: 34px;
    font-size: 34px;
    text-align: left;
  `}
`;

export const StyledActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  ${media.sm`
    flex-direction: row;
  `}
`;

export const StyledCTAButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 56px;
  transition: all 100ms ease;
  box-sizing: border-box;
  border-radius: 10px;
  font-size: ${getFontSize('fs5')};
  font-weight: 400;
  white-space: nowrap;
  margin-bottom: 10px;
  background-color: ${getColor('primary')('s100')};
  color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    color: white !important;
  }

  ${media.sm`
    margin-bottom: 0px;
    margin-right: 10px;
  `}
`;

export const StyledCTALink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 56px;
  font-size: ${getFontSize('fs5')};
  font-weight: 400;
  white-space: nowrap;
  cursor: pointer;
`;

export const StyledImgContainer = styled.div`
  width: 100%;
  height: auto;

  ${media.sm`
    width: 85%;
  `}

  ${media.lg`
    width: 40%;
  `}
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;
