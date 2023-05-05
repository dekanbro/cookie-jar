import { ValidNetwork } from "@daohaus/keychain-utils";

export const TARGET_DAO: {
  [key: string]: {
    ADDRESS: string;
    SAFE_ADDRESS: string;
    COOKIEJAR_ADDRESS: string;
    CHAIN_ID: ValidNetwork;
  };
} = {
  "0xfbddea58ca7dd83e03fd16f3eeee94d4eeea6632": {
    ADDRESS: "0xfbddea58ca7dd83e03fd16f3eeee94d4eeea6632",
    SAFE_ADDRESS: "0x9dd0ef4a97825a77f35e03aefd412adf848d5341",
    COOKIEJAR_ADDRESS: "0x978Fd626F1E93D19e72eC3B7D4501D71ad459d58",
    CHAIN_ID: "0x64",
  },
};
// cookie tester
// must lowercase
// "0x59cd41f7d0c488d2ad95bf378eb0e1833b9a8b7f": {
//   ADDRESS: "0x59cd41f7d0c488d2ad95bf378eb0e1833b9a8b7f",
//   SAFE_ADDRESS: "0x361371ce476cbace9b1aff7c671620ac705c649c",
//   COOKIEJAR_ADDRESS: "0xeca82593fe07a2c197f1b701eaae402a0da07707",
//   CHAIN_ID: "0x64",
// },
