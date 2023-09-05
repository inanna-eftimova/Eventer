import { useEffect, useState } from "react";
import Event from "../Event/Event";

import * as eventServices from "../../../services/eventServices"

function CatalogEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    eventServices.getAll()
      .then(result => {
        setEvents(result)
      })
  }, []);

  return (
    <div>
      <h2>Current Events</h2>
      <section id="dashboard">
        {events.map(x => <Event key={x._id} event={x} />)}
      </section>


      <h4>No Events yet.</h4>
    </div>
  );
}
export default CatalogEvents;