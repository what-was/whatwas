import styled from 'styled-components/macro';


export const Container = styled.div`
  display: flex;
  flex-flow: wrap;
  flex-grow: 1;
  margin: 0 28px 28px;
  flex-direction: column;
  padding: 24px 28px;
  background-color: ${({ theme }) => theme.background};
  border-radius: 20px;
  height: calc(100vh - 146px);
  box-shadow: 0px 15px 40px -15px ${({ theme }) => theme.boxShadow};
  overflow: auto;

  @media (max-width: 1000px) {
    margin: 0 30px 0 15px;
  }
  @media (max-width: 600px) {
    margin: 0 15px 0 15px;
    padding: 16px 24px;
  }
`;

export const Title = styled.h3`
  margin: 1rem;
  border-radius: 0 0 10px 0;
  position: absolute;
  font-size: 2rem;
  font-weight: 600;
  @media (max-width: 800px) {
    margin: 2rem 0.5rem;
  }
`;

export const SubTitle = styled.h3`
  margin: 1.5rem 1.5rem 2rem;
  font-size: 1.7rem;
  font-weight: 500;
  @media (max-width: 800px) {
    margin: 2rem 0.5rem;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
`;
