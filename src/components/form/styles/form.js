import styled from 'styled-components/macro';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 600px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  margin: auto;
  max-width: 450px;
  padding: 60px 68px 40px;
  margin-bottom: 0;
`;

export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const Text = styled.p`
  color: #737373;
  font-size: 15px;
  font-weight: 500;
`;

export const TextSmall = styled.p`
  margin-top: 10px;
  font-size: 12px;
  line-height: normal;
  color: #737373;
`;

export const Link = styled(ReachRouterLink)`
  color: #f94144;
  font-size: 15px;
  text-decoration: none;
  margin-left: 2px;
  &:hover {
    color: #ef233c;
    text-decoration: underline;
  }
`;

export const Input = styled.input`
  background: #212121;
  border-radius: 4px;
  border: 0;
  color: #fff;
  height: 2rem;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 10px;
  &:last-of-type {
    margin-bottom: 2rem;
  }
`;

export const Submit = styled.button`
  background-color: #f94144;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 24px 0 12px;
  padding: 0.75rem;
  border: 0;
  color: white;
  cursor: pointer;
  transition: 100ms all ease;
  &:hover {
    background-color: #ef233c;
  }
  &:disabled {
    opacity: 0.2;
    cursor: not-allowed;
    &:hover {
      background-color: #f94144;
    }
  }
`;
