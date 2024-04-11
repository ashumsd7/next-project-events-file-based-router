import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/dummtData";

export default function Home() {
  const featureEvents = getFeaturedEvents();
  return (
    <>
      <div>
        <header>
          <nav></nav>
        </header>
        <EventList items={featureEvents} />
      </div>
    </>
  );
}
