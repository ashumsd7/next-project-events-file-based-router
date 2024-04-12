import React from "react";
import Link from "next/link";
import classes from "./event-item.module.css";
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import ArrowIcon from "../icons/arrow-right-icon";
import Addressicon from "../icons/address-icon";
import Image from "next/image";
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
      <Image width="320" height="160" src={"/" + item.image} alt=""></Image>
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{item.title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadabelDate}</time>
          </div>
          <div className={classes.address}>
            <Addressicon />{" "}
            <address className={classes.address}>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            {" "}
            <span className={classes.icon}>
              <ArrowIcon />
            </span>
            <span> Explore Event</span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
