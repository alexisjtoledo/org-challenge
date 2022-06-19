import React, { FC, useEffect } from 'react';
import { useAllBrandsQuery } from '@app/apollo/types';
import {
  StyledBrandsSectionContainer,
  StyledBrandGrid,
  StyledBrandsSectionTitle,
} from './BrandsSection.styles';
import BrandPill from '../BrandPill/BrandPill';

const BrandsSection: FC = () => {
  const { data, loading, error } = useAllBrandsQuery({
    variables: { limit: 12, offset: 0 },
  });

  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);

  return (
    <StyledBrandsSectionContainer>
      <StyledBrandsSectionTitle>
        Join these transparent brands
      </StyledBrandsSectionTitle>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <StyledBrandGrid>
          {data?.brands?.map(brand => (
            <BrandPill
              key={brand.id}
              name={brand.name}
              positionCount={brand.positionCount}
              href="/brand-link" // shoul'd be replaced with brand.link or similar.
            />
          ))}
        </StyledBrandGrid>
      )}
    </StyledBrandsSectionContainer>
  );
};

export default BrandsSection;
