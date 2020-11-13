import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-flow: wrap;
  max-width: 82rem;
  margin: 0 auto;
  flex-direction: column;
  padding: 1rem;

  @media (max-width: 1349px) {
    max-width: 61.5rem;
  }
  @media (max-width: 1020px) {
    max-width: 57rem;
  }
  @media (max-width: 950px) {
    max-width: 38rem;
  }
  @media (max-width: 640px) {
    max-width: 19rem;
  }
`;

export const Title = styled.h3`
  margin: 2rem 1.25rem;
  font-size: 2.4rem;
  @media (max-width: 1020px) {
    margin: 2rem 0.5rem;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
`;
