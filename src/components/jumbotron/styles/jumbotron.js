import styled from 'styled-components';

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ direction }) => direction};
  max-width: 1100px;
  margin: auto;
  width: 100%;
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
  font-size: 2rem;
  line-height: 1.1;
  margin-bottom: 8px;
  color: #232323;
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: normal;
  line-height: normal;
  color: #222525;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const Image = styled.img`
  max-width: 80%;
  height: auto;
  float: ${({ float }) => float};
`;

export const Item = styled.article`
  display: flex;
  padding: 6rem 5%;
  color: #fffffe;
  overflow: hidden;
`;

export const Container = styled.section`
  background-color: #fffffe;
  @media (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;
