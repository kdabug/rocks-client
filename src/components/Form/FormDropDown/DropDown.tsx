import React, {
  FunctionComponent,
  useState,
  useRef,
  MouseEventHandler,
  SyntheticEvent,
  EventHandler
} from "react";
import styled from "../../../theme/styledComponent";

import get from "lodash/get";

interface Props {
  itemIndex: number;
  focus: number;
  title: string;
  selected: string | number;
  handleUpdate?: (val: any) => void;
  fs?: string;
}

export const FormDropDown: FunctionComponent<Props> = props => {
  const openWrapperRef = useRef<null | HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const handleOnClick = (evt): void => {
    evt.persist();
    const dayPicker = evt.target.className.includes("DayPicker");
    const navBtn = evt.target.className.includes("DayPicker-NavButton");
    const option = get(evt, "target.dataset", "")["option"];

    (dayPicker || option) && !navBtn
      ? setOpen(false)
      : openWrapperRef.current.focus();
  };

  const handleBlur = (): void => setOpen(false);

  const handleFocus = (): void => setOpen(true);

  return (
    <Container fs={props.fs}>
      <h4>{props.title}</h4>
      <FormSelect
        open={open}
        onFocus={handleFocus}
        onClickCapture={handleOnClick}
        onBlurCapture={handleBlur}
      >
        <h5>{props.selected}</h5>
        <OpenWrapper ref={openWrapperRef} open={open} tabIndex={0}>
          {props.children}
        </OpenWrapper>
      </FormSelect>
    </Container>
  );
};

const Container = styled.div<{ fs?: string }>`
  height: auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h4 {
    ${({ fs }) => fs && `font-size: ${fs}`};
    color: ${({ theme }) => theme.primary3};
    padding: 4px 0;
  }
`;

interface SelectProps {
  open: boolean;
  onFocus: () => void;
  onClickCapture: (evt: any) => void;
  onBlurCapture: (evt: any) => void;
}

export const FormSelect = styled.div<SelectProps>`
  border: 3px solid red;
  height: 28px;
  width: 150px;
  display: flex;
  outline: none;
  cursor: pointer;
  position: relative;
  flex-direction: column;
  justify-content: center;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  border: 1px solid ${({ theme }) => theme.primary5};

  &:after {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;

    height: 28px;
    width: 34px;
    right: -34px;
    top: -1px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    border: 1px solid ${({ theme }) => theme.primary2};
  }

  h5 {
    margin-left: 16px;
    color: ${({ theme }) => theme.primary3};
  }
`;

const OpenWrapper = styled.div<{ open: boolean }>`
  outline: none;
  top: 27px;
  z-index: 5;
  width: 182px;
  position: absolute;
  margin: 4px 0 7px 0;
  will-change: opacity;
  opacity: ${({ open }) => (open ? 1 : 0)};
  ${({ open }) => !open && "pointer-events: none"};
  background: ${({ theme }) => theme.primary5};
`;
