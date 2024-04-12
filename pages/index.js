import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/helper/api-utils";
// import { getFeaturedEvents } from "@/dummtData";

export default function Home({ featureEvents }) {
  // const featureEvents = getFeaturedEvents();
  if (!featureEvents) return <>Loading...</>;

  return (
    <>
      <div>
        <header>
          <nav></nav>
        </header>
        <EventList items={featureEvents} />
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const featureEvents = await getFeaturedEvents();
  console.log("featureEvents 2", featureEvents);
  return {
    props: {
      featureEvents,
    },
  };
}
