import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Inner = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.modalType === 'add-item' ? '185px' : '130px')};
  padding: 5px 10px;
  top: ${(props) => (props.addCollection ? '-6px' : '10px')};
  right: 0;
  background-color: ${({ theme }) => theme.background};
  box-shadow: 0px 10px 15px -5px ${({ theme }) => theme.smallBoxShadow};
  border-radius: 10px;
  z-index: 1;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const WarningText = styled.p`
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 15px;
  line-height: normal;
  font-weight: normal;
`;

export const InnerButton = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
  padding: 5px 10px;
  color: ${({ theme }) => theme.title};
  font-size: 16px;
  font-weight: 400;
  border-radius: 5px;
  cursor: pointer;
  svg {
    margin-right: 5px;
  }

  &:hover {
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.backgroundHover};
  }
`;

export const ConfirmButton = styled.button`
  position: relative;
  display: inline-block;
  padding: 6px 12px 7px 12px;
  font-size: 13px;
  font-weight: bold;
  line-height: 17px;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  background-color: ${({ theme }) => theme.accent};
  border: 1px solid transparent;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.accentHover};
  }
`;

export const Cancel = styled.span`
  margin: 2px 5px;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  font-weight: normal;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Input = styled.input`
  padding: 5px;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  line-height: 22px;
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.border};
  outline: 0;

  &::placeholder {
    color: grey;
  }
`;
