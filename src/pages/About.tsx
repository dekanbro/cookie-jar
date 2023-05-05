import styled from "styled-components";

import { H2, Link, ParMd, SingleColumnLayout } from "@daohaus/ui";
import { HausAnimated } from "../components/HausAnimated";
import { StyledRouterLink } from "../components/Layout";
// import cookie.png from assets
import cookie from "../assets/cookie.png";

const LinkBox = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
`;

export const About = () => {
  return (
    <SingleColumnLayout>
      <H2>About</H2>
      <img src={cookie} alt="cookie" height={"150px"} />
      <ParMd style={{ marginBottom: "2.4rem" }}>
        Pick a task, do it, and get paid in cookies! Leave a note about what you did and why. If you claim a cookie without a valid note, you will get kicked out of the DAO!
      </ParMd>

      <H2>Tasks:</H2>

      <ParMd style={{ marginBottom: "2.4rem" }}>
      Task 1) 5-10 slide Sizzle deck for prospective Epoch sponsors
      </ParMd>

      <ParMd style={{ marginBottom: "2.4rem" }}>
      Tasks 2, 3, 4, 5) Yerba quests for each Epoch (4 separate tasks)
      </ParMd>

      <ParMd style={{ marginBottom: "2.4rem" }}>
      Tasks 6) creation Github repository for ELI5 media kit 
      </ParMd>

      <ParMd style={{ marginBottom: "2.4rem" }}>
      Task 7)  Update ELI5 branding for media kit creation (ensure logos are available in various formats; pitch updated logo ideas if you are feeling creative)
      </ParMd>

      <ParMd style={{ marginBottom: "2.4rem" }}>
      Task 8) Suggest edits/updates to ensure LitePaper is current
      </ParMd>

    </SingleColumnLayout>
  );
};
