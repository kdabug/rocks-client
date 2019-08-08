import React, { useState, FunctionComponent } from "react";
import styled from "../../../theme/styledComponent";

interface ITextArea {
  focus: number;
  itemIndex: number;
  name: string;
  message: string;
  handleUpdate: (val: any) => any;
  placeholder: [string, string];
}

export const FormTextArea: FunctionComponent<ITextArea> = props => {
  const [rowData, setRowData] = useState({
    min: 1,
    max: 8,
    rows: 1,
    value: ""
  });

  const handleInputUpdate = evt => {
    props.handleUpdate(evt);
    const { target } = evt;
    handleRowsChange(target);
  };

  const handleRowsChange = ({ rows, scrollHeight, scrollTop }) => {
    //ADD LOGIC FOR WHEN TEXT IS DELETED IT MAKES IT SMALLER
    const textareaLineHeight = 20;
    const { min, max } = rowData;

    const prevRows = rows;
    rows = min;

    const currentRows = ~~(scrollHeight / textareaLineHeight);

    if (currentRows === prevRows) {
      rows = currentRows;
    }

    if (currentRows >= max) {
      rows = max;
      scrollTop = scrollHeight;
    }

    setRowData({
      ...rowData,
      rows: currentRows < max ? currentRows : max
    });
  };

  const inFocus = props.focus === props.itemIndex;
  return (
    <TextArea
      focus={inFocus}
      value={props.message}
      name={props.name}
      rows={rowData.rows}
      onChange={handleInputUpdate}
      placeholder={inFocus ? props.placeholder[1] : props.placeholder[0]}
    />
  );
};

const TextArea = styled.textarea<{ focus: boolean }>`
  &::placeholder {
    color: ${({ theme, focus }) => focus && theme.primary5};
  }
`;
