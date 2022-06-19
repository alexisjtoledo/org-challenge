import styled from 'styled-components';
import { getFontSize } from '@app/styles/theme/font';
import { getColor } from '@app/styles/theme/colors';

export const StyledBrandPillContainer = styled.a`
  display: flex;
  align-items: center;
  margin: 10px 0;
  padding-left: 16px;
  width: 240px;
  height: 74px;
  border-radius: 12px;
  background-color: #eef0f4;
  place-self: center;

  &:hover {
    background: #ffffff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.04),
      0px 1px 2px rgba(0, 0, 0, 0.04);
    color: ${getColor('neutral')('s100')};
  }
`;

export const StyledImgContainer = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 14px;
  background-color: ${getColor('neutral')('s0')};
  border: solid 1px ${getColor('neutral')('s20')};
  overflow: hidden;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const StyledDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const StyledName = styled.h3`
  font-size: ${getFontSize('fs3')};
  font-weight: 500;
  line-height: 20px;
  margin-block-start: 0;
  margin-block-end: 0;
`;

export const StyledText = styled.p`
  color: #767676;
  line-height: 20px;
  margin-block-start: 0;
  margin-block-end: 0;
`;
