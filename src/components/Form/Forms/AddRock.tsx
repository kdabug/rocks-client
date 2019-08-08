import React, { useState, useEffect } from "react";

import FormItem from "../FormItem";
import { FormTitle } from "../FormTitle";
import { FormBoolean } from "../FormBoolean";
import { FormDropDown, Options } from "../FormDropDown";
import { FormContainer } from "../FormContainer";
import styled from "../../../theme/styledComponent";
import { StyledComponent } from "styled-components";

//FIXME: need to convert all the DropDown components to use the Options component

export const GeneralInfoForm = (props: any) => {
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

  const {
    username,
    password,
    userRockCollection,
    userFavoriteRocks
  } = formData;

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
          <FormTextArea
            focus={focus}
            itemIndex={2}
            name="description"
            message={description}
            handleUpdate={updateFormData}
            placeholder={[`Description`, `Type your description here`]}
          />
          {focus === 2 && (
            <InputExample>
              <span>Need Help?</span> Here are a few to include:
              <ul>
                <li>How do people enter your giveaway?</li>
                <li>What’s required to enter?</li>
                <li>How many winners will there be?</li>
              </ul>
            </InputExample>
          )}
        </FormItem>
        <FormItem
          itemIndex={3}
          focus={focus}
          onFocusChange={setFocusItem}
          height="60px"
        >
          <FormDropDown
            itemIndex={3}
            focus={focus}
            height="60px"
            name="slack_channel_name"
            selected={slack_channel_name}
            handleUpdate={updateFormData}
            options={["#channel", "#channel2"]}
            title="Where would you like to post your giveaway?"
          >
            <Options
              name="slack_channel_name"
              options={["#channel", "#channel2"]}
              handleUpdate={updateFormData}
            />
          </FormDropDown>
        </FormItem>
        <FormItem itemIndex={4} focus={focus} onFocusChange={setFocusItem}>
          <FormBoolean
            text="Is this giveaway anonymous?"
            anonymous={anonymous}
            handleUpdate={updateFormData}
          />
        </FormItem>
        <FormItem itemIndex={5} focus={focus} onFocusChange={setFocusItem}>
          <TextInput
            itemIndex={5}
            type="text"
            focus={focus}
            name="gift_description"
            value={gift_description}
            handleUpdate={updateFormData}
            placeholder={[`Giveaway Prize`, `Type what you'll be giving away`]}
          />
        </FormItem>
        <FormItem
          itemIndex={6}
          focus={focus}
          onFocusChange={setFocusItem}
          height="60px"
        >
          <FormDropDown
            itemIndex={6}
            focus={focus}
            height="60px"
            selected={winner_count}
            title="Select the number of winners"
          >
            <Options
              name="winner_count"
              options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
              handleUpdate={updateFormData}
            />
          </FormDropDown>
        </FormItem>
        <FormItem itemIndex={7} focus={focus} onFocusChange={setFocusItem}>
          <TextInput
            itemIndex={7}
            focus={focus}
            type="text"
            placeholder={[
              `Direct message sent to the winner`,
              `Message sent to winner`
            ]}
            name="winner_message"
            value={winner_message}
            handleUpdate={updateFormData}
          />
          {focus === 7 && (
            <InputExample>
              <span>Things to include:</span>
              <ul>
                <li>What did this person win?</li>
                <li>Who should they contact to claim the prize?</li>
                <li>How do they claim the prize</li>
              </ul>
              <span>
                This message will be sent automatically by Givhr once this
                giveaway ends.
              </span>
            </InputExample>
          )}
        </FormItem>
      </FormContainer>
    </>
  );
};

export const InputExample: StyledComponent<"div", any> = styled.div`
  background-color: ${({ theme }) => theme.primary2};
  padding: 12px 0 12px 20px;
  line-height: 20px;
  font-size: 14px;
  width: 90%;
  color: ${({ theme }) => theme.primary4};
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
