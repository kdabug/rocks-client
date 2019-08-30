import React, {
  FunctionComponent,
  MouseEvent,
  useState,
  useEffect
} from "react";
import { fetchRockData } from "../../services/rocks-data";
import styled from "../../theme/styledComponent";
import { CardContainer } from "../../components/Card/CardContainer/index";
import { List } from "../../components/List/index";
import axios from "axios";
import console = require("console");

interface OptionsProps {
  name: string;
}

export const RockList: FunctionComponent<OptionsProps> = (
  props
): JSX.Element => {
  const [rockData, setRockData] = useState([]);

  useEffect(() => {
    fetchRockData().then(setRockData);
  });
  useEffect(() => {
    (async function() {
      try {
        const response = await fetchRockData();

        setRockData(response);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);
  const { rockName, rockColor, rockChakra, rockUses, chakras } = formData;

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
