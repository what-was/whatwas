import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  flex-wrap: wrap;
  max-width: 650px;
  margin: 4rem auto 7rem;
  @media (max-width: 300px) {
    padding: 15px 20px;
  }
`;

export const Input = styled.input`
  max-width: 300px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 2.5rem;
  box-sizing: border-box;
  border-radius: 3px;
  border: 1px solid #a81d1d;
  @media (max-width: 1000px) {
    max-width: 250px;
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 100%;
  height: 2.5rem;
  background-color: #a81d1d;
  color: #fffffe;
  padding: 8px 17px;
  font-size: 1rem;
  border: 0;
  cursor: pointer;
  border-radius: 3px;
  margin-left: 1rem;
  transition: 100ms all ease;
  &:hover {
    background-color: #f94144;
  }
  @media (max-width: 1000px) {
    font-size: 16px;
  }
  @media (max-width: 375px) {
    margin-left: 5px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  color: #222525;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
export const Title = styled.h1`
  font-size: 3rem;
  color: #232323;
  text-align: center;
  line-heigth: 1;
  margin: 0;
  letter-spacing: -0.025em;
  @media (max-width: 600px) {
    font-size: 2rem;
    line-height: 1.1em;
  }
`;
export const SubTitle = styled.h2`
  font-size: 1.2rem;
  color: #222525;
  text-align: center;
  line-heigth: 1.5;
  font-weight: 500;
  margin: 15px 0 30px;
  @media (max-width: 600px) {
    max-width: 350px;
    font-size: 1.1rem;
    line-height: 22px;
  }
`;
