import React from "react";
import Link from "next/link";
function EventItem({ item }) {
  const humanReadabelDate = new Date(item.date).toLocaleDateString("en-us", {
    date: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = item.location.replace(", ", "\n");
  const exploreLink = `/events/${item.id}`;
  return (
    <li>
      <img src={"/" + item.image} alt=""></img>
      <div>
        <div>
          <h2>{item.title}</h2>
          <div>
            <time>{humanReadabelDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}></Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
