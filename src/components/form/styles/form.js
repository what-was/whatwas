import styled from 'styled-components';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  max-width: 450px;
  width: 100%;
  min-height: 550px;
  padding: 42px 68px;
  margin: auto;
  margin-bottom: 0;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);

  @media (max-width: 720px) {
    max-width: 350px;
    padding: 2rem 2.5rem;
  }
`;

export const TextSmall = styled.label`
  position: absolute;
  margin: 8px 0;
  color: ${({ theme }) => theme.text};
  line-height: normal;
  font-size: 14px;
  font-weight: 500;
  transform: translateY(2px);
  transform-origin: 0%;
  transition: transform 400ms;
`;

export const Input = styled.input`
  width: 100%;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  line-height: 30px;
  border: 0;
  border-radius: 4px;
  background: transparent;
  ${'' /* background-color: ${({ theme }) => theme.background}; */}
  overflow: hidden;

  &::placeholder {
    color: transparent;
  }
  &:focus {
    outline: 0;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-flow: row wrap;
  position: relative;
  width: 100%;
  margin: 1rem auto;
  border-bottom: 2px dashed ${({ theme }) => theme.shadowedText};

  &::after {
    content: '';
    position: relative;
    display: block;
    width: 100%;
    height: 4px;
    background: ${({ theme }) => theme.accent};
    transform: scaleX(0);
    transform-origin: 0%;
    transition: transform 400ms ease-in-out;
    top: 2px;
  }

  &:focus-within::after {
      transform: scaleX(1);
    }
  }

  &:focus-within ${TextSmall},
  ${Input}:not(:placeholder-shown) + ${TextSmall} {
      transform: scale(0.8) translateY(-24px);
    }

  }
`;

export const Text = styled.p`
  margin: auto 0 0;
  color: ${({ theme }) => theme.shadowedText};
  font-size: 12px;
  font-weight: 400;
`;

export const Error = styled.div`
  font-size: 14px;
  margin: 0 0 16px;
  padding: 15px 20px;
  color: white;
  background: #d00000;
  border-radius: 4px;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`;

export const Title = styled.h1`
  margin: 0 0 16px;
  color: ${({ theme }) => theme.title};
  font-size: 32px;
  font-weight: bold;
`;

export const Link = styled(ReachRouterLink)`
  color: ${({ theme }) => theme.accent};
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.accentHover};
    text-decoration: underline;
  }
`;

export const Submit = styled.button`
  margin: 12px 0;
  padding: 0.75rem;
  border: 0;
  color: ${({ theme }) => theme.buttonText};
  font-size: 16px;
  font-weight: 600;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.accent};
  cursor: pointer;
  transition: 100ms all ease;
  &:hover {
    background-color: ${({ theme }) => theme.accentHover};
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    &:hover {
      background-color: ${({ theme }) => theme.accent};
    }
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  padding: 5px 5px 5px 0;
  cursor: pointer;
`;

export const CheckboxText = styled.span`
  margin-left: 5px;
  font-size: 14px;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  cursor: pointer;
`;

export const StrengthContainer = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
`;

export const StrengthBar = styled.span`
  width: 25%;
  height: 100%;
  margin-right: 5px;
  transition: box-shadow 500ms;
  box-shadow: inset 0 20px ${({ theme }) => theme.strengthBox};

  &.__show {
    box-shadow: none;
  }

  &.bar-1 {
    background: linear-gradient(to right, #d62828, #e85d04);
  }

  &.bar-2 {
    background: linear-gradient(to right, #e85d04, #ffb703);
  }

  &.bar-3 {
    background: linear-gradient(to right, #ffb703, yellowgreen);
  }

  &.bar-4 {
    background: linear-gradient(to right, yellowgreen, green);
  }
`;

export const ShowPassword = styled.span`
  position: absolute;
  right: 5px;
  bottom: 10px;
  font-size: 14px;
  cursor: help;
`;

export const ValidationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 1rem;
`;

export const ValidationItem = styled.li`
  color: ${({ theme }) => theme.shadowedText};
`;
