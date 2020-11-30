import styled from 'styled-components/macro';

const backgroundColor = (color) => {
  switch (color) {
    case 'yellow':
      return '#fcf4bc';
    case 'blue':
      return '#caf0f8';
    case 'pink':
      return '#ffc2d4';
    case 'orange':
      return '#ffd6a5';
    case 'green':
      return '#b7e4c7';
    case 'grey':
      return '#e9ecef';
    default:
      return 'transparent';
  }
};

export const Container = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
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
`;
