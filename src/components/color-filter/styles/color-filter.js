import styled from 'styled-components/macro';

const backgroundColor = (color) => {
  switch (color) {
    case 'yellow':
      return '#fff475';
    case 'blue':
      return '#cbf0f8';
    case 'pink':
      return '#ffc2d4';
    case 'orange':
      return '#fbbc04';
    case 'green':
      return '#ccff90';
    case 'grey':
      return '#e8eaed';
    default:
      return 'transparent';
  }
};

export const Container = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;

  @media (max-width: 600px) {
    margin-top: 10px;
  }
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ede7e1;
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
  background-color: #fffffe;
  border: 1px solid #ede7e1;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: #edeae6;
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
  color: ${(props) => (props.darkmode === 'true' ? '#757575' : 'black')};
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
    color: ${(props) => (props.color === 'default' ? '#fffffe' : '#333')};
    font-size: 1.1rem;

    span {
      display: flex;
      width: 24px;
      height: 24px;
      vertical-align: middle;
      cursor: pointer;
      border-radius: 50%;
      border: 0;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.33);
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
