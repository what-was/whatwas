import styled from 'styled-components/macro';

export const Container = styled.div`
  position: relative;
`;

export const Inner = styled.div`
  position: absolute;
  z-index: 1;
  width: 150px;
  padding: 10px;
  top: 10px;
  right: 0;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 10px 15px -5px rgba(220, 187, 160, 0.4);
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
  color: #555;
  font-size: 16px;
  font-weight: 400;
  svg {
    margin-right: 5px;
  }

  &:hover {
    color: #232323;
  }
`;

export const ConfirmButton = styled.button`
  background-color: #ff6470;
  color: #fff;
  border: 1px solid transparent;
  border-radius: 5px;
  margin: 10px 5px 0 0;
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
    background-color: #f45d48;
  }
`;

export const Cancel = styled.span`
  font-weight: normal;
  color: #555;
  cursor: pointer;
  font-size: 14px;
  margin: 2px 5px;

  &:hover {
    text-decoration: underline;
  }
`;
