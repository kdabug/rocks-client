import React, { FunctionComponent } from "react";
import Portal from "../../Portal";
import styled from "../../theme/styledComponent";

export const Modal: FunctionComponent<any> = props => (
  <Portal>
    <ModalContainer>{props.children}</ModalContainer>
  </Portal>
);

const ModalContainer = styled.div`
  display: flex;
  position: fixed;
  top: 80px;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
`;
