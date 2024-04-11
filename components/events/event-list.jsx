import React from "react";
import EventItem from "./event-item";
import classes from "./event-list.module.css";
function EventList(props) {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items?.map((item) => {
        return <EventItem item={item} />;
      })}
    </ul>
  );
}

export default EventList;
