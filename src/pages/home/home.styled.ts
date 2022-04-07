import { Card } from "src/components";
import styled from "styled-components";

export const Wrapper = styled.div`
  .container {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
  }
`;

export const StyledSection = styled.section`
  &.hero-section {
    display: flex;
  }

  .hero-section-left {
    align-items: center;
    justify-content: center;
  }

  .hero-section-left .h1 {
    /* max-width: 16ch; */
  }

  .hero-section-left .sub-title {
    /* max-width: 50ch; */
  }

  .hero-section-right {
    .img {
      height: 50vh;
    }
    --webkit-clip-path: polygon(18% 0, 100% 0%, 99% 97%, 2% 100%);
    clip-path: polygon(18% 0, 100% 0%, 99% 97%, 2% 100%);
  }
  .product-list {
    gap: 0.5rem;
    display: flex;
    flex-wrap: wrap;
  }

  .mb-8 {
    margin-bottom: 8rem;
  }
`;

export const StyledCategory = styled.div`
  border: 1px solid ${(p) => p.theme.primary.main};
  box-shadow: ${(p) => p.theme.boxShadow.bs1};
  padding: 1rem;
  margin: 1rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ProductCard = styled(Card)`
  &:hover {
    box-shadow: ${(p) => p.theme.boxShadow.bs1};
  }
`;
