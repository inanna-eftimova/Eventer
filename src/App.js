import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";

function App() {
  return (
    <div>
    <div id="wrapper">
    <Header/>

      <main>
        
        <Welcome/>

       
        <h2>Current Events</h2>
        <section id="dashboard">
         
          <div className="event">
            <img src="./images/large_deniroparty_marquee.jpg" alt="example1" />
            <p className="title">
              Robert De Niro Themed Party
            </p>
            <p className="date">15.04.2023 from 17:00</p>
            <a className="details-btn" href="">Details</a>
          </div>
          <div className="event">
            <img src="./images/pexels-run-ffwpu-2530130 (1).jpg" alt="example1" />
            <p className="title">
              Fun Run
            </p>
            <p className="date">19.04.2023 from 13:00</p>
            <a className="details-btn" href="">Details</a>
          </div><div className="event">
            <img src="./images/pexels-victoria-akvarel-4873622.jpg" alt="example1" />
            <p className="title">
            Art & Wine
            </p>
            <p className="date">17.04.2023 from 18:00</p>
            <a className="details-btn" href="">Details</a>
          </div>
        </section>
        
        
         <h4>No Events yet.</h4>

        
        <section id="register">
          <div className="className=m">
            <h2>Register</h2>
            <form className="register-form">
              <input
                type="text"
                name="email"
                id="register-email"
                placeholder="email"
              />
              <input
                type="password"
                name="password"
                id="register-password"
                placeholder="password"
              />
              <input
                type="password"
                name="re-password"
                id="repeat-password"
                placeholder="repeat password"
              />
              <button type="submit">register</button>
              <p className="message">Already registered? <a href="#">Login</a></p>
            </form>
          </div>
        </section>

        
        <section id="login">
          <div className="form">
            <h2>Login</h2>
            <form className="login-form">
              <input type="text" name="email" id="email" placeholder="email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <button type="submit">login</button>
              <p className="message">
                Not registered? <a href="#">Create an account</a>
              </p>
            </form>
          </div>
        </section>

     
        <section id="create">
          <div className="form">
            <h2>Add Event</h2>
            <form className="create-form">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Event"
              />
              <input
                type="text"
                name="imageUrl"
                id="event-image"
                placeholder="Event Image URL"
              />
              <input
                type="text"
                name="category"
                id="event-category"
                placeholder="Category"
              />


              <textarea
                id="event-description"
                name="description"
                placeholder="Description"
                rows="5"
                cols="50"
              ></textarea>
              
              <input
              type="text"
              name="date"
              id="date"
              placeholder="When?"
            />

              <button type="submit">Add</button>
            </form>
          </div>
        </section>

      
        <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="./images/large_deniroparty_marquee.jpg" alt="example1" />
            <p id="details-title">Robert De Niro Themed Party</p>
            <p id="details-category">
              Category: <span id="categories">Fun</span>
            </p>
            <p id="details-date">
              Date:<span id="date">15.04.2023 from 17:00</span></p>
            <div id="info-wrapper">
              <div id="details-description">
                <span
                  >Welcome to the ultimate Robert De Niro themed party! If you're a fan of this legendary actor's films and characters, then this is the party for you.
                  Entertainment can include a De Niro movie trivia game, a dance-off to classic songs from his films, and even an impression contest where guests can try their best De Niro impressions.
                  End the night with a screening of one of De Niro's greatest films, followed by a toast to the man himself. Your guests will be talking about this unforgettable party for years to come!</span>
              </div>

            </div>

            <h3>Going: <span id="go">0</span> times.</h3>

          
            <div id="action-buttons">
              <a href="" id="edit-btn">Edit</a>
              <a href="" id="delete-btn">Delete</a>

              
              <a href="" id="go-btn">Going</a>
            </div>
          </div>
        </section>

     
        <section id="edit">
          <div className="form">
            <h2>Edit Event</h2>
            <form className="edit-form">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Event"
              />
              <input
                type="text"
                name="imageUrl"
                id="event-image"
                placeholder="Event Image"
              />
              <input
                type="text"
                name="category"
                id="event-category"
                placeholder="Category"
              />


              <textarea
                id="event-description"
                name="description"
                placeholder="Description"
                rows="5"
                cols="50"
              ></textarea>
              
              <label htmlFor="date-and-time">Event Time:</label>
              <input
              type="text"
              name="date"
              id="date"
              placeholder="When?"
            />

              <button type="submit">Edit</button>
            </form>
          </div>
        </section>
      </main>
    </div>
    <footer>
      <p>@ Eventer </p>
    </footer>
    </div>
  );
}

export default App;
