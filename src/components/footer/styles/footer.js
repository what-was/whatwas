import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  padding: 50px 56px;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;
  margin-top: 50px;
  @media (max-width: 1000px) {
    padding: 50px 30px;
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
  color: #222525;
  margin-bottom: 20px;
  font-size: 13px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Title = styled.p`
  font-size: 16px;
  color: #222525;
  margin-top: 0;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  font-size: 13px;
  color: #222525;
  margin-bottom: 40px;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
