import EventList from "@/components/events/event-list";
import Button from "@/components/ui/button";
import { getFilteredEvents } from "@/dummtData";
import { useRouter } from "next/router";
import React from "react";

function FilteredEvents() {
  const router = useRouter();

  const filteredData = router.query.slug;

  if (!filteredData)
    return (
      <div className="center">
        <h1>Loading...</h1>
      </div>
    );

  let year = filteredData[0];
  let month = filteredData[1];

  year = +year;
  month = +month;

  if (
    isNaN(month) ||
    isNaN(year) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ) {
    return (
      <div className="center">
        <h1>Invalid Filter...</h1>
      </div>
    );
  }

  const events = getFilteredEvents({ year, month });

  if (!events.length)
    return (
      <div>
        <h1>Not found...</h1>
      </div>
    );
  return (
    <>
      <Button
        style={{
          marginTop: "2rem",
        }}
        link="/"
      >
        Go back
      </Button>
      <EventList items={events} />
    </>
  );
}

export default FilteredEvents;
