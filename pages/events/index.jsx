import EventList from "@/components/events/event-list";
import EventSearch from "@/components/events/events-search";
import { getAllEvents } from "@/dummtData";
import { useRouter } from "next/router";
import React from "react";

const AllEvents = () => {
  const router = useRouter();
  const events = getAllEvents();
  const onSearch = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <>
      <EventSearch onSearch={onSearch} />
      <EventList items={events} />
    </>
  );
};

export default AllEvents;
