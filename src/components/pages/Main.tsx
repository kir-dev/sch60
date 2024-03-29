import { FunctionComponent } from "react";
import Page from "../layout/Page";
import styled from "styled-components";
import { breakpoints, colors, fontSize, spacing } from "../../utils/theme";
import { Tile, TileLayout } from "../elements/Tile";
import { events, fbPages } from "../../utils/content";
import Section from "../layout/Section";
import Button from "../elements/Button";
import { Wordcloud } from "../elements/Wordcloud";

const Main: FunctionComponent = () => {
  return (
    <Page title="Főoldal">
      <Section>
        <Description>
          <div>
            <h1>SCH x 60</h1>
          </div>
          <p>
            2022-ben ünnepeltük a kollégiumi önkormányzatiság 60. évfordulóját, amit
            a korábbi évtizedek alapján{" "}
            <a href={fbPages.sch60} target="_blank" rel="noreferrer">
              <span>SCH60</span>
            </a>{" "}
            jubileumi évnek hívtunk.
            <br />
            Schönherzes aktív kollégisták, a Kollégiumi Bizottság, a
            Nevelőtanári Gárda és a Schönherz Alumni Vezetősége szervezésében &
            rendezésében programsorozatot tartottunk, melyre visszavártunk és
            invitáltunk mindenkit, aki részt szeretett volna venni az emlékezés különböző
            alkalmain akár családosan, akár évfolyamával, akár kollégáival, akár
            körtagjaival.
          </p>
        </Description>
      </Section>
      <Section>
        <Button to="/rolunk" title="Történetünk" />
      </Section>
      <Section title="Megtartott események" widthRestriction={true}>
        <TileLayout>
          {events
            .map((event) => (
              <Tile key={event.name} event={event} />
            ))}
        </TileLayout>
      </Section>
      <Section>
        <Button to="/esemenyek" title="További események" />
      </Section>
      <Wordcloud />
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
  align-items: center;
  font-weight: 300;
  @media screen and (max-width: ${breakpoints.md}) {
    flex-direction: column;
    h1 {
      font-size: ${fontSize["5xl"]};
    }
  }
  span {
    color: ${colors.yellow};
    text-decoration: underline;
  }
  div {
    width: 100%;
    min-width: 15rem;
    padding: ${spacing.lg};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    font-size: ${fontSize.lg};
  }
`;

export default Main;
