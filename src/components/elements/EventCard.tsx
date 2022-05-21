import { FunctionComponent, useMemo } from "react";
import styled from "styled-components";
import { breakpoints, colors, fontSize, spacing } from "../../utils/theme";
import { EventType } from "../../utils/types";

interface EventCardProps {
  event: EventType;
}

const EventCard: FunctionComponent<EventCardProps> = ({ event }) => {
  const daysUntil = useMemo(() => {
    return Math.floor((event.date.getTime() - Date.now()) / 86400000);
  }, [event.date]);
  return (
    <EventCardWrapper>
      <Image backgroundUrl={event.image} />
      <EventDetailsWrapper>
        <EventName>{event.name}</EventName>
        <EventDataLabel>
          {event.date.toLocaleDateString("hu-HU")}
        </EventDataLabel>
        <EventDataLabel>{event.location}</EventDataLabel>
        <EventDescription>{event.description}</EventDescription>
      </EventDetailsWrapper>
      <DaysLabel>{daysUntil} nap múlva</DaysLabel>
    </EventCardWrapper>
  );
};

const EventCardWrapper = styled.div`
  border-radius: 0.5rem;
  background-color: ${colors.translucentDark};
  padding: ${spacing.lg};
  color: ${colors.themeLight};
  display: grid;
  grid-template-columns: 30% 60% 10%;
  margin-top: ${spacing.md};
  @media screen and (max-width: ${breakpoints.md}) {
    grid-template-columns: 100%;
  }
`;

const Image = styled.div<{ backgroundUrl?: string }>`
  background-image: url("${({ backgroundUrl }) => backgroundUrl}");
  background-position: center;
  background-size: cover;
  border-radius: 1rem;
  width: 100%;
  padding-bottom: 100%;
  @media screen and (max-width: ${breakpoints.md}) {
    width: 100%;
    padding-bottom: 100%;
  }
`;

const EventDetailsWrapper = styled.div`
  margin: 0 ${spacing.lg};
  @media screen and (max-width: ${breakpoints.md}) {
    margin: 0;
  }
`;

const EventName = styled.h2`
  margin: 0;
  font-size: ${fontSize["4xl"]};
`;

const EventDataLabel = styled.p`
  margin: 0;
  font-size: ${fontSize.sm};
`;

const EventDescription = styled.p`
  margin-top: ${spacing.lg};
  font-size: ${fontSize.xl};
`;

const DaysLabel = styled.p`
  writing-mode: vertical-rl;
  font-size: ${fontSize["4xl"]};
  font-weight: lighter;
  text-align: center;
  margin: 0;
  @media screen and (max-width: ${breakpoints.md}) {
    writing-mode: horizontal-tb;
  }
`;

export default EventCard;
