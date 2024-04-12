const FIREBASE_EVENTS_URL =
  "https://next-events-app-139cf-default-rtdb.firebaseio.com/events.json";

export async function getAllEvents() {
  const data = await fetch(FIREBASE_EVENTS_URL);
  const res = await data.json();
  const events = [];
  for (const key in res) {
    events.push({
      ...res[key],
    });
  }
  console.log("returning events", events);

  return events;
}

export async function getFeaturedEvents() {
  const allEvemts = await getAllEvents();
  return allEvemts.filter((evt) => evt.isFeatured);
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export async function getEventById(id) {
  const allEvemts = await getAllEvents();
  return allEvemts.find((event) => event.id === id);
}
