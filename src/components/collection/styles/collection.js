import styled from 'styled-components/macro';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

export const List = styled.li`
  padding: 0 0 6px 0;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  margin-bottom: 12px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 12px 6px 24px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  svg {
    font-size: 0.75rem;
    margin-right: 6px;
  }
`;

export const ButtonInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  width: 100%;
  svg {
    font-size: 0.75rem;
    margin-right: 6px;
  }
`;

export const BoardList = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundDeep};
  list-style: none;
  padding: 0;
  li {
    padding-left: 36px;
    &:hover {
      background-color: ${({ theme }) => theme.backgroundDeepHover};
    }
  }
`;

export const Title = styled.h5`
  font-size: 15px;
  font-weight: 500;
  margin: 0;
  &::selection {
    background-color: transparent !important;
    color: black !important;
  }
`;

export const AddCollectionContainer = styled.div``;

export const AddCollection = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.body};
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding: 5px 24px;
  cursor: pointer;
  align-items: center;
  margin-bottom: 6px;

  svg {
    width: 18px;
    height: 18px;
    stroke: ${({ theme }) => theme.text};
    margin-right: 10px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.backgroundHover};
  }
  &:focus {
    outline: 0;
  }
`;

export const AddBoard = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  border: 0;
  padding: 8px;
  margin-left: auto;
  border-radius: 16px;
  align-items: center;
  cursor: pointer;
  svg {
    width: 18px;
    height: 18px;
    stroke: ${({ theme }) => theme.text};
    margin-right: 0;
  }

  &:hover {
    background-color: ${({ theme }) => theme.backgroundHover};
    svg {
      stroke: ${({ theme }) => theme.text};
    }
  }

  &:focus {
    outline: 0;
  }
`;

export const Modal = styled.aside`
  position: relative;
`;
export const ModalInner = styled.aside`
  position: absolute;
  max-width: 200px;
  width: 100%;
  top: 5px;
`;
