import { FormLego } from "@daohaus/form-builder";
import { FIELD } from "@daohaus/moloch-v3-legos";
import { CustomFormLego } from "./fieldConfig";
import { APP_FIELD } from "./fields";
import { APP_TX } from "./tx";

const PROPOSAL_SETTINGS_FIELDS = [FIELD.PROPOSAL_EXPIRY, FIELD.PROP_OFFERING];

export const APP_FORM: Record<string, CustomFormLego> = {

  CREATEJAR: {
    id: "CREATEJAR",
    title: "Mint Jar (coming soon)",
    subtitle: "Own the utility",
    description: "A cookie jar is a jar that holds cookies.",
    requiredFields: { title: true },
    log: true,
    // tx: APP_TX.CREATENFTJAR,
    fields: [
      APP_FIELD.TITLE,
      APP_FIELD.DESCRIPTION,
      APP_FIELD.LINK,
      APP_FIELD.COOKIE_AMOUNT,
      APP_FIELD.COOKIE_PERIOD,
      APP_FIELD.COOKIE_TOKEN,
      APP_FIELD.ALLOW_LIST,
    ],
  },
  
};
