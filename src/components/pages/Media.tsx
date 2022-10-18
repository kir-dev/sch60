import {FunctionComponent} from "react";
import Page from "../layout/Page";
import Section from "../layout/Section";
import {mediaTiles} from "../../utils/content";
import styled from "styled-components";
import {breakpoints, colors, fontSize, spacing} from "../../utils/theme";


const Media: FunctionComponent = () => {
  return (
    <Page title="Médiatár">
      <Section title="Médiatár">
          <TileLayout>
              {mediaTiles.map(mt=>(
                  <TileWrapper backgroundUrl={mt.image}>
                    <EventName>{mt.name}</EventName>
                    <LinkGroup>
                        {mt.video_link && <a href={mt.video_link} target="_blank">
                            <SVG xmlns="http://www.w3.org/2000/svg"
                                 width="60" height="60" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none"
                                 strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <rect x="4" y="4" width="16" height="16" rx="2"/>
                                <line x1="8" y1="4" x2="8" y2="20"/>
                                <line x1="16" y1="4" x2="16" y2="20"/>
                                <line x1="4" y1="8" x2="8" y2="8"/>
                                <line x1="4" y1="16" x2="8" y2="16"/>
                                <line x1="4" y1="12" x2="20" y2="12"/>
                                <line x1="16" y1="8" x2="20" y2="8"/>
                                <line x1="16" y1="16" x2="20" y2="16"/>
                            </SVG>
                        </a>}
                        {mt.photos_link && <a href={mt.photos_link} target="_blank">
                            <SVG xmlns="http://www.w3.org/2000/svg"
                                 width="60" height="60" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none"
                                 strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <line x1="15" y1="8" x2="15.01" y2="8"/>
                                <rect x="4" y="4" width="16" height="16" rx="3"/>
                                <path d="M4 15l4 -4a3 5 0 0 1 3 0l5 5"/>
                                <path d="M14 14l1 -1a3 5 0 0 1 3 0l2 2"/>
                            </SVG>
                        </a>}
                    </LinkGroup>
                  </TileWrapper>
              ))}
          </TileLayout>
      </Section>
    </Page>
  );
};

const TileWrapper = styled.div<{ backgroundUrl?: string }>`
  width: 28vw;
  height: 28vw;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.45),
      rgba(0, 0, 0, 0.45)
    ),
    url("${({ backgroundUrl }) => backgroundUrl}");
  background-position: center;
  background-size: cover;
  border-radius: 1rem;
  color: ${colors.themeLight};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  p {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  @media screen and (max-width: ${breakpoints.lg}) {
    width: 90vw;
    height: 90vw;
    margin-top: ${spacing.md};
  }
`;

const EventName = styled.p`
  margin: 10%;
  font-weight: bold;
  font-size: ${fontSize["3xl"]};
`;

const LinkGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`

const SVG = styled.svg`
  transition: transform .5s;
  :hover{
    transform: rotate(20deg);
  }
`

const TileLayout = styled.div`
  margin: 5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4em;
  @media screen and (max-width: ${breakpoints.lg}) {
    flex-direction: column;
  }
`;


export default Media;
