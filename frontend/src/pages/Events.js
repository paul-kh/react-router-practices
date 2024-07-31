import { Link } from "react-router-dom";

const EVENTS = [
  { id: "E1", title: "Event 1" },
  { id: "E2", title: "Event 2" },
  { id: "E3", title: "Event 3" },
];

export default function EventsPage() {
  return (
    <>
      <h1>The Events</h1>
      <ul>
        {EVENTS.map((e) => (
          <li key={e.id}>
            <Link to={`/events/${e.id}`}>{e.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
