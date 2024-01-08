import styled from "styled-components";

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
  box-shadow: 0 8px 12px rgba(9, 30, 66, 0.15), 0 0 1px rgba(9, 30, 66, 0.31);
`;

export const Container = styled.div`
  position: fixed;
  width: 320px;
  height: 320px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 9999;
  box-shadow: 0 4px 8px 2px rgba(73, 73, 73, 0.25);
  border-radius: 8px;
  color: #000;
`;
