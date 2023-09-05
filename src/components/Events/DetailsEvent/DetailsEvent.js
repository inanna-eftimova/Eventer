import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as eventService from "../../../services/eventServices"

function DetailsEvent(
) {
    const params = useParams();
    const [singleEvent, setEvent] = useState([]);
    useEffect(() => {
        eventService.getSingleEvent(params.id)
            .then(singleEvent => setEvent(singleEvent));

    });
    return (
        <section id="details">
            <div id="details-wrapper">
                <img id="details-img" src={singleEvent.imageUrl} alt="example1" />
                <p id="details-title">{singleEvent.name}</p>
                <p id="details-category">
                    Category: <span id="categories">{singleEvent.category}</span>
                </p>
                <p id="details-date">
                    Date:<span id="date">{singleEvent.date}</span></p>
                <div id="info-wrapper">
                    <div id="details-description">
                        <span
                        >{singleEvent.description}</span>
                    </div>

                </div>

                <h3>Going: <span id="go">0</span> times.</h3>


                <div id="action-buttons">
                    <Link to={`/edit/${params.id}`} id="edit-btn">Edit</Link>
                    <Link to={`/delete/${params.id}`} id="delete-btn">Delete</Link>


                    <Link to="/" id="go-btn">Going</Link>
                </div>
            </div>
        </section>
    );
}

export default DetailsEvent;