import styled from 'styled-components/macro';

export const Inner = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  width: 100%;
  margin: auto;
  @media (max-width: 800px) {
    flex-direction: column;
  }
  @media (max-width: 600px) {
    height: 500px;
  }
`;

export const Pane = styled.div`
  width: 50%;
  @media (max-width: 800px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
    justify-content: center;
  }
`;

export const CenterPane = styled.div`
  position: relative;
  top: -4rem;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1000px) {
    width: 80%;
    text-align: center;
  }

  @media (max-width: 800px) {
    top: -5.6rem;
    overflow-x: hidden;
  }

  @media (max-width: 600px) {
    top: -6rem;
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
  @media (max-width: 800px) {
    float: none;
    margin-top: 20px;
  }
`;

export const CenterImage = styled.img`
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 15px 60px ${({ theme }) => theme.smallBoxShadow};

  @media (max-width: 1000px) {
    object-fit: scale-down;
    width: 100%;
  }
  @media (max-width: 800px) {
    object-fit: scale-down;
    width: 100%;
  }

  @media (max-width: 600px) {
    width: 300px;
    box-shadow: none;
  }
`;

export const Item = styled.article`
  position: relative;
  display: flex;
  padding: 6rem 5%;
  color: ${({ theme }) => theme.text};
  overflow: hidden;

  @media (max-width: 800px) {
    padding: 2.5rem 3rem;
  }
  @media (max-width: 600px) {
    top: -6rem;
  }
`;

export const Container = styled.section`
  background-color: ${({ theme }) => theme.background};

  @media (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;
