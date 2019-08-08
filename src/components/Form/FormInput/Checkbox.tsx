import React, { SyntheticEvent, FunctionComponent } from "react";
import styled from "../../../theme/styledComponent";

interface ITextInput {
  type: string;
  itemIndex: number;
  focus: number;
  name: string;
  value: string;
  handleUpdate: (val: any) => any;
  placeholder: [string, string];
}

export const Checkbox: FunctionComponent<ITextInput> = props => {
  const inFocus = props.focus === props.itemIndex;
  return (
    <Input
      type={props.type}
      focus={inFocus}
      name={props.name}
      value={props.value}
      onChange={e => props.handleUpdate(e)}
      placeholder={inFocus ? props.placeholder[1] : props.placeholder[0]}
    />
  );
};

const Input = styled.input<{ focus: boolean }>`
  &::placeholder {
    color: ${({ theme, focus }) => focus && theme.primary5};
  }
`;
