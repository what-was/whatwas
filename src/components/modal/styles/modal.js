import styled from 'styled-components/macro';

export const Container = styled.div`
  position: relative;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  width: ${(props) => (props.modalType === 'add-item' ? '185px' : '130px')};
  padding: 10px;
  top: ${(props) => (props.addCollection ? '-6px' : '10px')};
  right: 0;
  background-color: ${({ theme }) => theme.background};
  border-radius: 10px;
  box-shadow: 0px 10px 15px -5px ${({ theme }) => theme.smallBoxShadow};
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
  line-height: normal;
  font-weight: normal;
  font-size: 15px;
`;

export const InnerButton = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
  cursor: pointer;
  color: ${({ theme }) => theme.title};
  font-size: 16px;
  font-weight: 400;
  svg {
    margin-right: 5px;
  }

  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;

export const ConfirmButton = styled.button`
  background-color: ${({ theme }) => theme.accent};
  color: #fff;
  border: 1px solid transparent;
  border-radius: 5px;
  font-weight: bold;
  font-size: 13px;
  line-height: 17px;
  padding: 6px 12px 7px 12px;
  position: relative;
  display: inline-block;
  white-space: nowrap;
  text-decoration: none;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.accentHover};
  }
`;

export const Cancel = styled.span`
  font-weight: normal;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-size: 14px;
  margin: 2px 5px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Input = styled.input`
  font-size: 14px;
  line-height: 22px;
  padding: 5px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};
  outline: 0;
  border: 1px solid ${({ theme }) => theme.border};

  &::placeholder {
    color: grey;
  }
`;
