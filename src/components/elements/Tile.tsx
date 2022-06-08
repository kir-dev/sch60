import styled from "styled-components";
import { breakpoints, colors, fontSize, spacing } from "../../utils/theme";
import { EventType } from "../../utils/types";
import { FunctionComponent } from "react";
import { getTileText } from "../../utils/getDaysUntilFromDate";
import { motion } from "framer-motion";

export const TileLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4em;
  @media screen and (max-width: ${breakpoints.lg}) {
    flex-direction: column;
  }
`;

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
  margin: 5% 0 0 0;
  font-weight: bold;
  font-size: ${fontSize["3xl"]};
`;

const DayCounterLabel = styled.p`
  margin: 5% 0 0 0;
  font-weight: bold;
  font-size: ${fontSize["6xl"]};
  border-bottom: 1px solid ${colors.themeLight};
`;

const DayLabel = styled.p`
  margin: 5% 0 0 0;
  font-weight: bold;
  font-size: ${fontSize["2xl"]};
`;

const EventLocation = styled.p`
  margin: 5% 0 0 0;
  font-size: ${fontSize.lg};
  @media (min-width: ${breakpoints.lg}) {
    font-size: ${fontSize["xl"]};
  }
`;

interface TileProps {
  event: EventType;
}

export const Tile: FunctionComponent<TileProps> = ({ event }) => {
  return (
    <a
      //@ts-expect-error disable default onClick for divs without a href link
      href={event.link || null}
      style={{ textDecoration: "none" }}
      target="_blank"
      rel="noreferrer"
    >
      <TileWrapper
        as={motion.div}
        backgroundUrl={event.image}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <EventName>{event.name}</EventName>
        <DayCounterLabel>{getTileText(event.date)}</DayCounterLabel>
        <DayLabel>nap</DayLabel>
        <EventLocation>
          {typeof event.date === "string"
            ? event.date
            : event.date.toLocaleDateString("hu-HU", {
                month: "2-digit",
                day: "2-digit",
              })}
          , {event.location}
        </EventLocation>
      </TileWrapper>
    </a>
  );
};
