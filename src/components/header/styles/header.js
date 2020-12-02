import styled from 'styled-components/macro';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  background-color: ${(props) =>
    props.className === 'signed-in' ? 'transparent' : '#f8f5f2'};
  height: 50px;
  margin: ${(props) => (props.className === 'signed-in' ? '0 28px' : '0')};
  padding: ${(props) =>
    props.className === 'signed-in' ? '10px 0px' : '20px 56px'};
  justify-content: ${(props) =>
    props.className === 'signed-in' ? '' : 'space-between'};
  align-items: center;
  a {
    display: flex;
  }
  @media (max-width: 1000px) {
    margin: ${(props) => (props.className === 'signed-in' ? '0 30px' : '0')};
    padding: ${(props) =>
      props.className === 'signed-in' ? '10px 0px' : '10px 15px'};
  }
`;

export const Link = styled.p`
  color: #fffffe;
  text-decoration: none;
  margin-right: 30px;
  font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  -webkit-box-align: center;
  align-items: center;
  background-color: white;
  border-radius: 40px;
  width: 420px;
  padding: 5px 15px;
  svg {
    color: white;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const SearchInput = styled.input`
  background-color: #fffffe;
  color: #222525;
  border: 1px solid white;
  transition: width 0.5s;
  height: 2rem;
  font-size: 14px;
  padding: 0 10px;
  width: 90%;
  &:focus {
    outline: 0;
  }
  &:focus + ${Search} {
    border: blue auto 3px !important;
  }
`;

export const SearchIcon = styled.button`
  outline: 0;
  border: 0;
  cursor: pointer;
  background-color: transparent;
  border-radius: 20px;
  transition: 200ms background-color ease;
  svg {
    color: #232323;
    width: auto;
    height: 1.2rem;
  }

  &:hover {
    background-color: #fffffe;
  }
`;

export const ButtonLink = styled(ReachRouterLink)`
  display: block;
  background-color: #a81d1d;
  width: auto;
  height: fit-content;
  color: #fffffe;
  border: 0;
  font-size: 1rem;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;
  justify-content: flex-start;
  transition: 100ms all ease;
  &:hover {
    background: #f94144;
  }
`;

export const Picture = styled.button`
  background: url(${({ src }) => src});
  background-size: contain;
  border: 0;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: #fffffe;
  padding: 15px 25px;
  width: 100px;
  top: 2.5rem;
  right: 10px;
  -webkit-box-shadow: 0px 10px 40px -15px rgba(220, 187, 160, 0.7);
  -moz-box-shadow: 0px 10px 40px -15px rgba(220, 187, 160, 0.7);
  box-shadow: 0px 10px 40px -15px rgba(220, 187, 160, 0.7);
  transition: all 200ms ease;
  ${Group}:last-of-type ${Link} {
    cursor: pointer;
  }
  ${Group} {
    margin-bottom: 10px;
    &:last-of-type {
      margin-bottom: 0;
    }
    ${Link}, ${Picture} {
      cursor: default;
    }
  }
  button {
    margin-right: 10px;
  }
  p {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  button {
    cursor: pointer;
  }
  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;

export const Text = styled.p`
  color: #232323;
  font-size: 1rem;
  line-height: normal;
  margin-right: 10px;
`;
export const TextLink = styled.p`
  color: #232323;
  font-size: 1rem !important;
  line-height: normal;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const Logo = styled.img`
  height: 32px;
  width: auto;
  margin-right: 40px;
  padding: 15px 10px 15px 0;
  @media (max-width: 1000px) {
    height: 26px;
    width: auto;
  }
`;

export const LeftGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const RightGroup = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const CenterGroup = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
`;
