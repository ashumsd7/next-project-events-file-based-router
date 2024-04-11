import React from "react";
import { useRouter } from "next/router";
import { getEventById } from "@/dummtData";
import EventSummary from "@/components/event-detail/event-summary";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventContent from "@/components/event-detail/event-content";
export default function EventDetails() {
  const router = useRouter();
  const { eventId } = router.query;
  const event = getEventById(eventId);
  if (!event)
    return (
      <div>
        <h1>Not found...</h1>
      </div>
    );
  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        data={event.date}
        imageAlt={event.title}
        address={event.location}
        image={event.image}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}
