import React, {
  FunctionComponent,
  useState,
  useRef,
  MouseEventHandler,
  SyntheticEvent,
  EventHandler
} from "react";
import styled from "../../theme/styledComponent";
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
    color: ${({ theme }) => theme.brown};
    padding: 4px 0;
  }
`;
