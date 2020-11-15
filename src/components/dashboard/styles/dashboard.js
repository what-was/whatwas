import styled from 'styled-components/macro';

const backgroundColor = '#f8f5f2';
const containerColor = '#fffffe';

export const Container = styled.div`
  display: flex;
  flex-flow: wrap;
  flex-grow: 1;
  margin: 0 28px 28px;
  flex-direction: column;
  padding: 1.5rem 2rem;
  background-color: ${containerColor};
  border-radius: 20px;
  -webkit-box-shadow: 0px 15px 40px -15px rgba(220, 187, 160, 0.5);
  -moz-box-shadow: 0px 15px 40px -15px rgba(220, 187, 160, 0.5);
  box-shadow: 0px 15px 40px -15px rgba(220, 187, 160, 0.5);

  @media (max-width: 1000px) {
    margin: 0 30px 0 15px;
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
