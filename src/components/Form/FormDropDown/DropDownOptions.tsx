import React, { FunctionComponent, MouseEvent } from "react";
import styled from "../../../theme/styledComponent";

interface OptionsProps {
  name: string;
  options: (string | number)[];
  handleUpdate: (val: {}) => void;
}

export const DropDownOptions: FunctionComponent<OptionsProps> = (
  props
): JSX.Element => {
  const handleOnClick = ({ target }: any): void => {
    props.handleUpdate({ [props.name]: target.innerText });
  };
  const { name } = props;
  return (
    <Container length={props.options.length}>
      {props.options.map(opt => (
        <Option
          key={`${opt}-${name}`}
          data-option
          name={`${name}`}
          onClick={handleOnClick}
        >
          {opt}
        </Option>
      ))}
    </Container>
  );
};

const Container = styled.div<{ length: number }>`
  height: 135px;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.primary1};
  ${({ length }) => length > 5 && "overflow: scroll"}
  ${({ length }) => length > 5 && "overflow-x: hidden"}
`;

interface OptionProps {
  key: string | number;
  name: string | number;
  onClick(evt: MouseEvent<HTMLElement>): void;
}

const Option = styled.div<OptionProps>`
  height: 27px;
  font-size: 12px;
  padding: 6px 0 5px 16px;
  color: ${({ theme }) => theme.primary2};
  border-bottom: 1px solid ${({ theme }) => theme.primary2};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.hoverBg};
    color: white;
    transition: all 0.2s;
  }
`;
