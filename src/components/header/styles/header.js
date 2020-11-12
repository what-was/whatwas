import styled from 'styled-components/macro';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 64px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;
  a {
    display: flex;
  }
  @media (max-width: 1000px) {
    margin: 0 30px;
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

export const SearchInput = styled.input`
  background-color: #fffffe;
  color: #222525;
  border: 1px solid white;
  transition: width 0.5s;
  height: 35px;
  font-size: 14px;
  margin-left: ${({ active }) => (active === true ? '10px' : '0')};
  padding: ${({ active }) => (active === true ? '0 10px' : '0')};
  opacity: ${({ active }) => (active === true ? '1' : '0')};
  width: ${({ active }) => (active === true ? '200px' : '0px')};
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  svg {
    color: white;
    cursor: pointer;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

export const SearchIcon = styled.button`
  outline: 0;
  border: 0;
  cursor: pointer;
  background-color: transparent;
  border-radius: 20px;
  padding: 10px;
  transition: 200ms background-color ease;
  svg {
    color: #232323;
    width: auto;
    height: 1.3rem;
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
  top: 32px;
  right: 10px;
  -webkit-box-shadow: 0px 30px 90px -25px rgba(220, 187, 160, 1);
  -moz-box-shadow: 0px 30px 90px -25px rgba(220, 187, 160, 1);
  box-shadow: 0px 30px 90px -25px rgba(220, 187, 160, 1);
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
  margin-left: 20px;
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
  font-size: 22px;
  line-height: normal;
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
  height: 26px;
  width: auto;
  margin-right: 40px;
  padding: 15px 10px 15px 0;
  @media (min-width: 1449px) {
    height: 26px;
    width: auto;
  }
`;

export const BoardTitle = styled.h3`
  color: #232323;
  font-size: 1.25rem;
`;
