import { FunctionComponent, Fragment } from "react";
import Page from "../layout/Page";
import styled from "styled-components";
import { breakpoints, colors, fontSize, spacing } from "../../utils/theme";
import { timeline } from "../../utils/content";
import Section from "../layout/Section";
import { AiFillCaretDown } from "react-icons/ai";

const AboutUs: FunctionComponent = () => {
  return (
    <Page title="Rólunk" theme="dark">
      <WireImage src={"/img/wire_white.svg"} alt="Schönherz Wireframe" />
      <FirstSection>
        <FirstSectionContent>
          <h1>Bemutatkozás</h1>
          <p>
            Idén ünnepeltük a kollégiumi önkormányzatiság 60. évfordulóját, amit
            a korábbi évtizedek alapján SCH60 jubileumi évnek hívtunk.
            <br />
              Schönherzes aktív kollégisták, a Kollégiumi Bizottság, a
              Nevelőtanári Gárda és a Schönherz Alumni Vezetősége szervezésében &
              rendezésében programsorozatot tartottunk, melyre visszavártunk és
              invitáltunk mindenkit, aki részt szeretett volna venni az emlékezés különböző
              alkalmain akár családosan, akár évfolyamával, akár kollégáival, akár
              körtagjaival.
          </p>
        </FirstSectionContent>
      </FirstSection>
      <Section theme="dark" title="Egy kis történelem" titleAlign="center">
        <TimelineGrid>
          <VerticalLine>
            <AiFillCaretDown size={40} color="white" />
          </VerticalLine>
          {timeline.map((entry, index) => {
            if (index % 2) {
              return (
                <Fragment key={entry.description}>
                  <div className="empty" />
                  <TimelineYearCell>{entry.year}</TimelineYearCell>
                  <TimelineCell>{entry.description}</TimelineCell>
                </Fragment>
              );
            } else
              return (
                <Fragment key={entry.description}>
                  <TimelineCell>{entry.description}</TimelineCell>
                  <TimelineYearCell>{entry.year}</TimelineYearCell>
                  <div className="empty" />
                </Fragment>
              );
          })}
        </TimelineGrid>
      </Section>
    </Page>
  );
};

const FirstSection = styled.div`
  border-radius: 0.5rem;
  background-color: ${colors.translucentDark};
  color: white;
  width: 90%;
  margin: 0 auto;
  position: relative;
  max-width: 1200px;
  h1 {
    font-weight: normal;
  }
  p {
    font-weight: 400;
  }
`;

const WireImage = styled.img`
  display: flex;
  height: 40vw;
  max-height: 40rem;
  width: 90%;
  margin: 0 auto;
  object-fit: cover;
  object-position: top;
`;

const FirstSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: ${spacing.lg};
`;

const TimelineCell = styled.div`
  color: white;
  box-sizing: border-box;
  position: relative;
  border-radius: 0.5rem;
  padding: ${spacing.md};
  background-color: ${colors.dark};
`;

const TimelineYearCell = styled(TimelineCell)`
  font-size: ${fontSize.xl};
  color: ${colors.yellow};
  padding: ${spacing.sm};
`;

const VerticalLine = styled.div`
  height: 100%;
  border-right: 4px dashed white;
  width: 0;
  position: absolute;
  left: 50%;
  > svg {
    margin: 0;
    position: absolute;
    top: calc(100% - 10px);
    left: -18px;
  }
  @media screen and (max-width: ${breakpoints.md}) {
    left: 48px;
  }
`;

const TimelineGrid = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 50px) 100px calc(50% - 50px);
  padding: ${spacing.md} 0;
  grid-row-gap: ${spacing.lg};
  align-items: center;
  justify-items: center;
  position: relative;
  // Lol I haven't seen such attribute before
  grid-auto-flow: dense;
  @media screen and (max-width: ${breakpoints.md}) {
    grid-template-columns: 100px calc(100% - 100px);
    .empty {
      display: none;
    }
    ${TimelineCell} {
      grid-column: 2;
    }
    ${TimelineYearCell} {
      grid-column: 1;
      grid-row: initial;
    }
  }
`;

export default AboutUs;
