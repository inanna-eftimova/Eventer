const baseUrl = `http://localhost:3030`;

export const getAll = async () => {
   let responce = await fetch(`${baseUrl}/data/events?sortBy=_createdOn%20desc`);
   let events = responce.json();

   return events;   
}

export const getSingleEvent = async (id) => {
   let responce = await fetch(`${baseUrl}/data/events/${id}`);
   let events = responce.json();

   return events;   
}