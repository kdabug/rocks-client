import styled from "../../../theme/styledComponent";

export const FormTitle = styled.h1<any>`
  padding: 25px 0 25px 40px;
  color: ${({ theme }) => theme.primary13};
  border-bottom: ${({ theme, topFocus }) =>
    `1px solid ${topFocus === 1 ? theme.primary1 : theme.primary4}`};
  transition: border-bottom 0.3s;
`;
