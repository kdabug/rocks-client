import React, { FunctionComponent, MouseEvent } from "react";
import styled from "../../theme/styledComponent";
import { CardContainer } from "../Card/CardContainer/index";

interface OptionsProps {
  name: string;
  options: (string | number)[];
}

export const List: FunctionComponent<OptionsProps> = (props): JSX.Element => {
  //   const handleOnClick = ({ target }: any): void => {
  //     props.handleUpdate({ [props.name]: target.innerText });
  //   };

  return (
    <Container length={props.options.length}>
      {props.options.map(opt => (
        <CardContainer>
          <Option key={`${opt}-${name}`} data-option name={opt}>
            {opt}
          </Option>
        </CardContainer>
      ))}
    </Container>
  );
};

const Container = styled.div<{ length: number }>`
  height: 135px;
  border-radius: 3px;

  ${({ length }) => length > 5 && "overflow: scroll"}
  ${({ length }) => length > 5 && "overflow-x: hidden"}
`;

interface OptionProps {
  key: string | number;
  name: string | number;
}

const Option = styled.div<OptionProps>`
  height: 27px;
  font-size: 12px;
  padding: 6px 0 5px 16px;
  color: ${({ theme }) => theme.brown};
  border-bottom: 1px solid ${({ theme }) => theme.primary2};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.hoverBg};
    color: white;
    transition: all 0.2s;
  }
`;
