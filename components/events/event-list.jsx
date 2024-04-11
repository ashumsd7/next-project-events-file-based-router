import React from "react";
import EventItem from "./event-item";

function EventList(props) {
  const { items } = props;
  return (
    <ul>
      {items?.map((item) => {
        return <EventItem item={item} />;
      })}
    </ul>
  );
}

export default EventList;
