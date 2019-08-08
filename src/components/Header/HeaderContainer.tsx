import styled from "../../theme/styledComponent";

export const HeaderContainer = styled.nav<{ vert?: boolean }>`
  display: flex;
  position: relative;
  align-items: center;
  top: ${({ vert }) => vert && "80px"};
  left: ${({ vert }) => vert && 0};
  width: ${({ vert }) => (vert ? "208px" : "100%")};
  height: ${({ vert }) => (vert ? `calc(${"100vh - 80px"})` : "80px")};
  flex-direction: ${({ vert }) => vert && "column"};
  justify-content: ${({ vert }) => (vert ? "space-around" : "space-between")};
  padding: 20px;
  color: ${({ theme }) => theme.white};
  background-color: ${({ vert, theme }) =>
    vert ? theme.primary1 : theme.primary5};
  h1 {
    font-size: 30px;
  }
  a {
    color: ${({ theme }) => theme.white};
  }
`;
