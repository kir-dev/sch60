import { FunctionComponent } from "react";
import Page from "../layout/Page";
import Section from "../layout/Section";
import { events } from "../../utils/content";
import EventCard from "../elements/EventCard";

const Events: FunctionComponent = () => {
  return (
    <Page theme="dark" title="Események">
      <Section theme="dark" title="Események">
        {events.map((e) => (
          <EventCard event={e} key={e.name} />
        ))}
      </Section>
    </Page>
  );
};

export default Events;
