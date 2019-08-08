import React, { useState, useEffect } from "react";
import { TextInput, FormTextArea } from "../FormInput";
import FormItem from "../FormItem";
import { FormTitle } from "../FormTitle";
//import { FormBoolean } from "../FormBoolean";
//import { FormDropDown, Options } from "../FormDropDown";
import { FormContainer } from "../FormContainer";
import styled from "../../../theme/styledComponent";
import { StyledComponent } from "styled-components";

//FIXME: need to convert all the DropDown components to use the Options component

export const Login = (props: any) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    userRockCollection: [],
    userFavoriteRocks: []
  });

  const [focus, setFocusItem] = useState(0);

  // useEffect(() => {
  //   setFormData({
  //     ...formData,
  //     ...props.survey
  //   });
  // }, [props.survey]);

  const updateFormData = val => {
    const value = val.target ? { [val.target.name]: val.target.value } : val;
    setFormData({ ...formData, ...value });
  };

  const { username, password } = formData;

  return (
    <>
      <FormTitle topFocus={focus}>User Login</FormTitle>
      <FormContainer autoComplete="off">
        <FormItem itemIndex={1} focus={focus} onFocusChange={setFocusItem}>
          <TextInput
            itemIndex={1}
            focus={focus}
            type="text"
            placeholder={[`Username`, `Enter your username here`]}
            name="username"
            value={username}
            handleUpdate={updateFormData}
          />
        </FormItem>
        <FormItem itemIndex={2} focus={focus} onFocusChange={setFocusItem}>
          <TextInput
            itemIndex={1}
            focus={focus}
            type="text"
            placeholder={[`Password`, `Enter your password here`]}
            name="password"
            value={password}
            handleUpdate={updateFormData}
          />
        </FormItem>
      </FormContainer>
    </>
  );
};
