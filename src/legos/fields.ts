import { FieldLego } from "@daohaus/form-builder";
import { CustomFieldLego } from "./fieldConfig";

export const APP_FIELD: Record<string, CustomFieldLego> = {
  TITLE: {
    id: "title",
    type: "input",
    label: "Proposal Title",
    placeholder: "Enter title",
  },
  DESCRIPTION: {
    id: "description",
    type: "textarea",
    label: "Description",
    placeholder: "Enter description",
  },
  LINK: {
    id: "link",
    type: "input",
    label: "Link",
    placeholder: "http://",
    expectType: "url",
  },
  TEST_FIELD: {
    id: "testField",
    type: "testField",
    label: "Test Field",
    placeholder: "Enter something",
  },
  JARTYPE: {
    id: "jarType",
    type: "select",
    label: "Jar Type",
    options: [
      {name: "DAO", value: "baal", key: "baal"}, 
      {name: "erc20", value: "erc20", key: "erc20"}, 
      {name: "erc721", value: "erc721", key: "erc721"}, 
      {name: "hats", value: "hats", key: "hats"}, 
      {name: "pickles", value: "pickles", key: "pickles"}
    ],
  },
  COOKIE_AMOUNT: {
    id: "cookieAmount",
    type: "toWeiInput",
    label: "Cookie Amount",
    placeholder: "Enter something",
  },
  COOKIE_PERIOD: {
    id: "cookiePeriod",
    type: "input",
    label: "Cookie Period",
    placeholder: "Enter something",
  },
  COOKIE_TOKEN: {
    id: "cookieToken",
    type: "input",
    label: "Cookie Token",
    placeholder: "Enter something",
  },
  ALLOW_LIST: {
    id: "allowList",
    type: "csInput",
    label: "Allow List",
    itemNoun: { singular: "address", plural: "addresses" },
    placeholder: "Enter something",
  },
};
