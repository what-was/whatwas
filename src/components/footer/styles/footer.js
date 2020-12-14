import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: auto;
  ${'' /* margin-top: 50px; */}
  ${'' /* padding: 50px 56px; */}
  @media (max-width: 1000px) {
    padding: 20px 30px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  @media (max-width: 768px) {
    border-bottom: 1px solid #0f0f0f;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 15px;
  @media (max-width: 1080px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }
  @media (max-width: 455px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
`;

export const Link = styled.a`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text};
  font-size: 13px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Title = styled.p`
  margin-top: 0;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.title};
  font-size: 16px;
`;

export const Text = styled.p`
  margin: 40px 0;
  color: ${({ theme }) => theme.shadowedText};
  font-size: 13px;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
