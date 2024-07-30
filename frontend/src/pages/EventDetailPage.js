import { useParams } from "react-router-dom";

export default function EventDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>The Event Details</h1>
      <main>
        <p>{params.eventId}</p>
      </main>
    </>
  );
}
