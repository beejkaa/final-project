import Introimg from "./restauranfood.jpg"
import GreekSalad from "./images/greek_salad.jpg"
import Bruchetta from "./images/bruchetta.jpg"
import Dessert from "./images/lemon_dessert.jpg"
import DeliveryIcon from "./images/motorcycle.png"
import Person from "./images/person.png"
import ProfilePhoto from "./images/profile_photo (2).png"
function Main() {
    return (
      <main id="homepage">
        <article id="little-lemon-specials">
        <div className="specials-section">
          <div className="specials-heading">
            <h2>Specials</h2>
            <div className="button"><a href="#" role="button">Online Menu</a></div>
          </div>
          <div className="grid-container-specials">
            <div className="grid-specials-content">
              <img src={GreekSalad} width="222px" height="180 px" alt=""/>
              <div className="grid-specials-info">
                <div className="content-title">
                  <h3>Greek salad</h3>
                  <p className="specials-price">$12.99</p>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a className="delivery-link" href="#">Order a delivery
                <img className="delivery-icon" src={DeliveryIcon} alt="" width= "24px" /> </a>
              </div>
            </div>
            <div className="grid-specials-content">
              <img src={Bruchetta} width="222px" height="180 px" alt=""/>
              <div className="grid-specials-info">
                <div className="content-title">
                  <h3>Bruchette</h3>
                  <p className="specials-price">$12.99</p>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a className="delivery-link" href="#">Order a delivery
                <img className="delivery-icon" src={DeliveryIcon} alt="" width= "24px" /> </a>
              </div>
            </div>
            <div className="grid-specials-content">
              <img src={Dessert} width="222px" height="180 px" alt=""/>
              <div className="grid-specials-info">
                <div className="content-title">
                  <h3>Dessert</h3>
                  <p className="specials-price">$12.99</p>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a className="delivery-link" href="#">Order a delivery
                <img className="delivery-icon" src={DeliveryIcon} alt="" width= "24px" /> </a>
              </div>
            </div>
          </div>
        </div>
        </article>
        <article id="little-lemon-testimonials">
        <div className="testimonials-section">
          <h2>Testimonials</h2>
          <div className="grid-container-testimonials">
            <div className="grid-testimonials-content">
              <h3>Rating</h3>
              <div className="person-info">
                <img className="person-icon" src={Person} alt="" width="60 px" height="60 px" />
                <p className="person-name">Name</p>
              </div>
              <p>Review here</p>
            </div>
            <div className="grid-testimonials-content">
              <h3>Rating</h3>
              <div className="person-info">
                <img className="person-icon" src={Person} alt="" width="60 px" height="60 px" />
                <p className="person-name">Name</p>
              </div>
              <p>Review here</p>
            </div>
            <div className="grid-testimonials-content">
              <h3>Rating</h3>
              <div className="person-info">
                <img className="person-icon" src={Person} alt="" width="60 px" height="60 px" />
                <p className="person-name">Name</p>
              </div>
              <p>Review here</p>
            </div>
            <div className="grid-testimonials-content">
              <h3>Rating</h3>
              <div className="person-info">
                <img className="person-icon" src={Person} alt="" width="60 px" height="60 px" />
                <p className="person-name">Name</p>
              </div>
              <p>Review here</p>
            </div>
          </div>
        </div>
        </article>
        <article id="little-lemon-profile">
        <div className="profile-container">
          <div className="profile-content">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="profile-image">
            <img src={ProfilePhoto} width="340px" height="390px" id="profile-photo" alt=""/>
          </div>
        </div>
        </article>
      </main>
    );
  }
  
  export default Main;