import React from "react";
import Link from "next/link";
import classes from "./event-item.module.css";
function EventItem({ item }) {
  const humanReadabelDate = new Date(item.date).toLocaleDateString("en-us", {
    date: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = item.location.replace(", ", "\n");
  const exploreLink = `/events/${item.id}`;
  return (
    <li className={classes.item}>
      <img src={"/" + item.image} alt=""></img>
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{item.title}</h2>
          <div>
            <time>{humanReadabelDate}</time>
          </div>
          <div>
            <address className={classes.address}>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Link href={exploreLink}></Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
