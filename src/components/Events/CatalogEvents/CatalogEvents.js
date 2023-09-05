import Event from "../Event/Event";

function CatalogEvents() {
  return (
    <div>
      <h2>Current Events</h2>
      <section id="dashboard">
        <Event />
        <Event />
        <Event />
      </section>


      <h4>No Events yet.</h4>
    </div>
  );
}
export default CatalogEvents;