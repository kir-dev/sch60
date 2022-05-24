import { FunctionComponent } from "react";
import Page from "../layout/Page";
import styled from "styled-components";
import { breakpoints, colors, spacing } from "../../utils/theme";
import { Tile, TileLayout } from "../elements/Tile";
import { events } from "../../utils/content";
import Section from "../layout/Section";
import Button from "../elements/Button";

const Main: FunctionComponent = () => {
  return (
    <Page title="Főoldal">
      <Section>
        <Description>
          <p>
            Idén ünnepeljük a kollégiumi önkormányzatiság 60. évfordulóját, amit
            a korábbi évtizedek alapján <span>SCH60</span> jubileumi évnek
            hívunk.
            <br />
            Schönherzes aktív kollégisták, a Kollégiumi Bizottság, a
            Nevelőtanári Gárda és a Schönherz Alumni Vezetősége szervezésében &
            rendezésében programsorozatot tartunk visszavárva és invitálva
            mindenkit, aki részt venne az emlékezés különböző alkalmain akár
            családosan, akár évfolyamával, akár kollégáival, akár körtagjaival.
          </p>
        </Description>
      </Section>
      <Section title="Közelgő események" widthRestriction={false}>
        <TileLayout>
          {events
            .filter((e) => e.date.getTime() > Date.now())
            .slice(0, 3)
            .map((event) => (
              <Tile event={event} />
            ))}
        </TileLayout>
      </Section>
      <Section>
        <Button to="/esemenyek" title="További események" />
      </Section>
    </Page>
  );
};

const Description = styled.div`
  border-radius: 0.5rem;
  background-color: ${colors.translucentDark};
  padding: ${spacing.md};
  color: ${colors.themeLight};
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  font-weight: lighter;
  @media screen and (max-width: ${breakpoints.md}) {
    flex-direction: column;
  }
  span {
    color: #ffba00;
    text-decoration: underline;
  }
`;

export default Main;
