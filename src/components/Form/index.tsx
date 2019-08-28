import React, { useState, useEffect } from "react";
import styled from "../../theme/styledComponent";
import { StyledComponent } from "styled-components";
import { Box } from "../Box";
import { Login, Register, AddRock, EditRock } from "./Forms";

//TODO: add "THEME COLOR" type for Box "bgc" props

export const Form = (props: any) => {
  const { renderForm } = props;
  let formType: any;
  if (renderForm === "login") {
    formType = <Login />;
  } else if (renderForm === "register") {
    formType = <Register />;
  } else if (renderForm === "addRock") {
    formType = <AddRock />;
  } else if (renderForm === "editRock") {
    formType = <EditRock />;
  } else {
    formType = null;
  }
  return (
    <FormContainer>
      <Box
        flex
        h="749px"
        w="1002px"
        bgc="primary5"
        br={7}
        p={16}
        shadow="boxShadowGiveawayCard"
        fd="column"
      >
        This is the content of the Form {renderForm}
        {formType}
      </Box>
    </FormContainer>
  );
};

const FormContainer = styled.section`
  width: 100%;
  display: flex;
  margin-top: 50px;
  align-items: center;
  font-family: inherit;
  letter-spacing: 0.25px;
  justify-content: center;
`;

export const InputExample: StyledComponent<"div", any> = styled.div`
  background-color: ${({ theme }) => theme.white};
  padding: 12px 0 12px 20px;
  line-height: 20px;
  font-size: 14px;
  width: 90%;
  color: ${({ theme }) => theme.darkGrey};
  border-radius: 4px;
  ul {
    li:before {
      content: "- ";
    }
  }

  span {
    font-weight: bold;
  }
`;
