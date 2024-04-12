import React from "react";
// import { useRouter } from "next/router";
// import { getEventById } from "@/dummtData";
import EventSummary from "@/components/event-detail/event-summary";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventContent from "@/components/event-detail/event-content";
import { getAllEvents, getEventById } from "@/helper/api-utils";
export default function EventDetails({ event }) {
  // const router = useRouter();
  // const { eventId } = router.query;
  // const event = getEventById(eventId);
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

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  console.log("eventId is", eventId);
  const event = await getEventById(eventId);
  console.log("event is", event);
  if (!event) {
    return {
      notFound: true, // Return a 404 page if the event is not found
    };
  }
  return {
    props: {
      event,
    },
  };
}

export async function getStaticPaths() {
  const events = await getAllEvents();
  // console.log("static paths", events);
  let paths = events?.map((data) => {
    return {
      params: {
        eventId: data.id,
      },
    };
  });
  console.log("paths", paths);

  return {
    paths: paths,
    fallback: true,
  };
}
