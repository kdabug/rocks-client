import React, { FunctionComponent, useState, useRef, useEffect } from "react";
import { StyledComponent } from "styled-components";
import styled from "../../../theme/styledComponent";

const FormItem = ({
  focus,
  itemIndex,
  onFocusChange,
  children,
  height = null
}) => {
  const inFocus = itemIndex === focus;
  return (
    <FormItemContainer
      focused={inFocus}
      onFocus={() => onFocusChange(itemIndex)}
      onClick={() => onFocusChange(itemIndex)}
    >
      <FormItemWrap h={height} focused={inFocus}>
        <Spacer>{children}</Spacer>
      </FormItemWrap>
    </FormItemContainer>
  );
};
export default FormItem;

const FormItemContainer = styled.div<{ focused: boolean }>`
  width: 100%;
  position: relative;
  padding: 16px 0 16px 38px;
  background: ${({ theme }) => theme.primary4};

  margin: 0;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
  }
`;

const FormItemWrap = styled.div<{ h?: string; focused: boolean }>`
  width: 100%;
  &::before {
    content: "";
    width: 3px;
    position: absolute;
    border-radius: 1.5px;
    background-color: ${({ theme, focused }) =>
      focused ? theme.darkGrey : theme.primary1};
    transition: background-color 0.4s;
  }
`;

const Spacer = styled.div`
  width: 100%;
  margin-left: 12px;
`;
