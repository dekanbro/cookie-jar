import { FormBuilder } from "@daohaus/form-builder";
import { MolochFields } from "@daohaus/moloch-v3-fields";

import { APP_FORM } from "../legos/forms";
import { Button, H2, SingleColumnLayout } from "@daohaus/ui";
import { TARGET_DAO } from "../targetDao";

export const CreateNFTJar = () => {
  // set up different pages and routes for these forms
  return (
    <>
      <SingleColumnLayout>
        <H2>Mint the NFT</H2>

        <FormBuilder
          form={APP_FORM.CREATEJAR}
          targetNetwork={TARGET_DAO.CHAIN_ID}
        />
      </SingleColumnLayout>
    </>
  );
};


