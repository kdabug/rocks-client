import React, { useState, useEffect } from "react";
import { TextInput, FormTextArea } from "../FormInput";
import FormItem from "../FormItem";
import { FormTitle } from "../FormTitle";
//import { FormBoolean } from "../FormBoolean";
//import { FormDropDown, Options } from "../FormDropDown";
import { FormContainer } from "../FormContainer";
import styled from "../../../theme/styledComponent";
import { StyledComponent } from "styled-components";
import { Button } from "../../Button";
import { FormDropDown, DropDownOptions } from "../FormDropDown";

//FIXME: need to convert all the DropDown components to use the Options component

export const AddRock = (props: any) => {
  const [formData, setFormData] = useState({
    rockName: "",
    rockColor: "",
    rockChakra: "",
    rockUses: "",
    chakras: ["heart", "solar plexis", "sacral", "third eye", "throat"]
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

  const { rockName, rockColor, rockChakra, rockUses, chakras } = formData;

  return (
    <>
      <FormTitle topFocus={focus}>Rock Form</FormTitle>
      <FormContainer autoComplete="off">
        <FormItem itemIndex={1} focus={focus} onFocusChange={setFocusItem}>
          <TextInput
            itemIndex={1}
            focus={focus}
            type="text"
            placeholder={[`Rock`, `Enter name of rock here`]}
            name="rockName"
            value={rockName}
            handleUpdate={updateFormData}
          />
        </FormItem>
        <FormItem itemIndex={2} focus={focus} onFocusChange={setFocusItem}>
          <TextInput
            itemIndex={1}
            focus={focus}
            type="text"
            placeholder={[`Color`, `Color of Rock`]}
            name="rockColor"
            value={rockColor}
            handleUpdate={updateFormData}
          />
        </FormItem>
        <FormItem itemIndex={3} focus={focus} onFocusChange={setFocusItem}>
          <FormDropDown
            itemIndex={3}
            focus={focus}
            title="Chakra"
            selected={rockChakra}
          >
            {" "}
            <DropDownOptions
              name="rockChakra"
              options={chakras}
              handleUpdate={updateFormData}
            >
              {rockChakra}
            </DropDownOptions>
          </FormDropDown>
        </FormItem>
        <FormItem itemIndex={4} focus={focus} onFocusChange={setFocusItem}>
          <TextInput
            itemIndex={1}
            focus={focus}
            type="text"
            placeholder={[`Uses`, `Enter uses of rock`]}
            name="rockUses"
            value={rockUses}
            handleUpdate={updateFormData}
          />
        </FormItem>
        <Button height="100px" width="400px">
          Go
        </Button>
      </FormContainer>
    </>
  );
};
