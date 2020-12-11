import styled from 'styled-components';

export const Inner = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  width: 100%;
  margin: auto;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Pane = styled.div`
  width: 50%;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const Title = styled.h2`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.title};
  font-size: 2rem;
  line-height: 1.1;
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h3`
  color: ${({ theme }) => theme.text};
  font-size: 1.3rem;
  font-weight: normal;
  line-height: normal;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const Image = styled.img`
  float: ${({ float }) => float};
  max-width: 80%;
  height: auto;
`;

export const Item = styled.article`
  display: flex;
  padding: 6rem 5%;
  color: ${({ theme }) => theme.text};
  overflow: hidden;
`;

export const Container = styled.section`
  background-color: ${({ theme }) => theme.background};
  @media (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;
