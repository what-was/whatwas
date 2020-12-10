import styled from 'styled-components';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 550px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  box-sizing: border-box;
  width: 100%;
  margin: auto;
  max-width: 450px;
  padding: 60px 68px 40px;
  margin-bottom: 0;
`;

export const Error = styled.div`
  background: #d00000;
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
  color: #232323;
  font-size: 32px;
  font-weight: bold;
  margin: 0 0 20px;
`;

export const Text = styled.p`
  color: #7a7a7a;
  font-size: 12px;
  font-weight: 400;
  margin: auto 0 0;
`;

export const TextSmall = styled.p`
  margin: 8px 0;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  color: #222525;
`;

export const Link = styled(ReachRouterLink)`
  color: #2b2c34;
  font-size: 16px;
  text-decoration: none;
  font-weight: 700;
  &:hover {
    color: #ef233c;
    text-decoration: underline;
  }
`;

export const Input = styled.input`
  display: inline;
  background-color: #fffffe;
  border-radius: 4px;
  border: 0;
  color: #222525;
  font-size: 14px;
  line-height: 30px;
  padding: 5px 20px;
  margin-bottom: 10px;
`;

export const Submit = styled.button`
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  margin: 12px 0;
  padding: 0.75rem;
  border: 0;
  color: #fffffe;
  background-color: #a81d1d;
  cursor: pointer;
  transition: 100ms all ease;
  &:hover {
    background-color: #f94144;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    &:hover {
      background-color: #a81d1d;
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
}
 
`;
