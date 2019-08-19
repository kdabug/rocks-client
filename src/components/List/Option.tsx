import React, {
  FunctionComponent,
  useState,
  useRef,
  MouseEventHandler,
  SyntheticEvent,
  EventHandler
} from "react";
import styled from "../../../theme/styledComponent";
// import downArrow from '../../../assets/images/down_arrow.svg';
// import upArrow from '../../../assets/images/up_arrow.svg';
import get from "lodash/get";

interface Props {
  title: string;
  handleUpdate?: (val: any) => void;
  fs?: string;
}

export const FormCheckBox: FunctionComponent<Props> = props => {
  const openWrapperRef = useRef<null | HTMLDivElement>(null);
  const [check, setCheck] = useState(false);

  const handleOnClick = (evt): void => {
    evt.persist();
    setCheck(!check);
  };

  return (
    <Container fs={props.fs}>
      <h4>{props.title}</h4>
      <FormSelect check={check} onClickCapture={handleOnClick}>
        <h5>{props.selected}</h5>
        <CheckWrapper ref={openWrapperRef} check={check} tabIndex={0}>
          {props.children}
        </CheckWrapper>
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
    color: ${({ theme }) => theme.primary8};
    padding: 4px 0;
  }
`;

interface SelectProps {
  check: boolean;
  onClickCapture: (evt: any) => void;
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
  border: 1px solid ${({ theme }) => theme.primary13};

  /* &:after {
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
    border: 1px solid ${({ theme }) => theme.primary13};
  } */

  h5 {
    margin-left: 16px;
    color: ${({ theme }) => theme.primary13};
  }
`;

const CheckWrapper = styled.div<{ check: boolean }>`
  outline: none;
  top: 27px;
  z-index: 5;
  width: 182px;
  position: absolute;
  margin: 4px 0 7px 0;
  will-change: opacity;
  opacity: ${({ check }) => (check ? 1 : 0)};
  ${({ check }) => !check && "pointer-events: none"};
  background: ${({ theme }) => theme.primary1};
`;
