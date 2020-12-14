import styled from 'styled-components';

const backgroundColor = (color) => {
  switch (color) {
    case 'yellow':
      return ({ theme }) => theme.yellow;
    case 'blue':
      return ({ theme }) => theme.blue;
    case 'pink':
      return ({ theme }) => theme.pink;
    case 'orange':
      return ({ theme }) => theme.orange;
    case 'green':
      return ({ theme }) => theme.green;
    case 'grey':
      return ({ theme }) => theme.grey;
    default:
      return ({ theme }) => theme.default;
  }
};

export const Container = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;

  @media (max-width: 600px) {
  }
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.border};
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
`;

export const Dropdown = styled.div`
  position: relative;
`;

export const Inner = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  top: 24px;
  right: 0;
  flex-flow: column;
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.border};
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.backgroundHover};
  }
`;

export const Name = styled.p`
  margin: 0 0 0 10px;
  font-size: 16px;
  line-height: 1.2;
  &::selection {
    background-color: transparent !important;
    color: black !important;
  }
`;

export const Color = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 15px;
  background-color: ${(props) => backgroundColor(props.color)};
  border: ${(props) => (props.color === 'default' ? '1px solid grey' : '')};
`;

export const Tag = styled.p`
  font-size: 14px;
  margin: 0 15px 0 0;
  cursor: default;
  color: ${({ theme }) => theme.shadowedText};
`;

export const AddColorContainer = styled.div`
  display: ${(props) => (props.hasOpen ? 'flex' : 'none')};
  align-items: center;
  margin: 0rem 0 1rem 20px;
`;

export const ColorPicker = styled.div`
  display: flex;
  align-items: center;
`;

export const SingleColor = styled.div`
  display: inline-block;
  margin: 0 5px;
  position: relative;
`;

export const ColorButton = styled.input`
  display: none;
  background-color: ${(props) => backgroundColor(props.color)};
  + label {
    color: ${(props) =>
      props.color === 'default' ? '#fffffe' : ({ theme }) => theme.title};
    font-size: 1.1rem;

    span {
      display: flex;
      width: 24px;
      height: 24px;
      vertical-align: middle;
      cursor: pointer;
      border-radius: 50%;
      border: 0;
      ${'' /* box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.33); */}
      background-repeat: no-repeat;
      background-position: center;
      justify-content: center;
      align-items: center;
      border: ${(props) =>
        props.color === 'default' ? '1px solid #9b98a6' : '0'};
      background-color: ${(props) =>
        props.color === 'default'
          ? 'transparent'
          : backgroundColor(props.color)};

      svg {
        opacity: 0;
        transition: all 0.2s ease;
      }
    }
  }
  &:checked + label span svg {
    opacity: 1;
  }
`;

export const ColorLabel = styled.label``;
