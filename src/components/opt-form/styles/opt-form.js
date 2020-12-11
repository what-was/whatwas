import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 650px;
  height: 100%;
  margin: 4rem auto 7rem;
  @media (max-width: 300px) {
    padding: 15px 20px;
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  max-width: 300px;
  width: 100%;
  height: 2.5rem;
  padding: 10px;
  border: 0;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.border};
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
  margin-left: 1rem;
  padding: 0.7rem 1.33rem;
  background-color: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.buttonText};
  font-size: 16px;
  font-weight: 500;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  transition: 100ms all ease;
  &:hover {
    background-color: ${({ theme }) => theme.accentHover};
  }
  @media (max-width: 1000px) {
    font-size: 16px;
  }
  @media (max-width: 375px) {
    margin-left: 5px;
  }
`;

export const Text = styled.p`
  margin: 1rem 0;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
export const Title = styled.h1`
  margin: 0;
  font-size: 3rem;
  color: ${({ theme }) => theme.title};
  line-heigth: 1;
  text-align: center;
  letter-spacing: -0.025em;
  @media (max-width: 600px) {
    font-size: 2rem;
    line-height: 1.1em;
  }
`;
export const SubTitle = styled.h2`
  margin: 1.5rem 0 3rem;
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
  line-height: 1.5;
  @media (max-width: 600px) {
    max-width: 350px;
    font-size: 1.1rem;
    line-height: 22px;
  }
`;
