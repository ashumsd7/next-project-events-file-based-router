import EventList from "@/components/events/event-list";
import { getAllEvents } from "@/dummtData";
import Link from "next/link";
import React from "react";

const AllEvents = () => {
  const events = getAllEvents();
  return <EventList items={events} />;
};

export default AllEvents;
