import styled from 'styled-components/macro';

export const Container = styled.div`
  position: relative;
`;

export const Inner = styled.div`
  position: absolute;
  z-index: 1;
  top: 85px;
  border-radius: 3px;
  width: 150px;
  padding: 10px;
  top: 0;
  right: 0;
  background-color: white;
`;

export const WarningText = styled.p`
  margin-top: 5px;
  margin-bottom: 5px;
  line-height: normal;
  font-weight: normal;
  font-size: 15px;
`;

export const ConfirmButton = styled.button`
  background-color: red;
  color: #fff !important;
  border: 1px solid transparent;
  margin-right: 5px;
  margin-top: 10px;
  font-weight: bold;
  font-size: 13px !important;
  line-height: 17px;
  padding: 6px 12px 7px 12px;
  position: relative;
  display: inline-block;
  white-space: nowrap;
  border-radius: 3px !important;
  text-decoration: none !important;
  text-align: center;
  cursor: pointer;
`;

export const Cancel = styled.span`
  font-weight: normal;
  color: #555;
  cursor: pointer;
  font-size: 14px;
  margin: 2px 5px;
`;
