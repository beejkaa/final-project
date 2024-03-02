import Introimg from "./restauranfood.jpg"
import GreekSalad from "./images/greek_salad.jpg"
import Bruchetta from "./images/bruchetta.svg"
import Dessert from "./images/lemon dessert.jpg"
import DeliveryIcon from "./images/motorcycle.png"
import Person from "./images/person.png"
import ProfilePhoto from "./images/profile_photo (2).png"
function Main() {
    return (
      <main id="homepage">
        <article id="little-lemon-specials">
        <div class="specials-section">
          <div class="specials-heading">
            <h2>Specials</h2>
            <div class="button"><a href="#" role="button">Online Menu</a></div>
          </div>
          <div class="grid-container-specials">
            <div class="grid-specials-content">
              <img src={GreekSalad} width="272px" height="180 px" />
              <div class="content-title">
                <h3>Greek salad</h3>
                <p class="specials-price">$12.99</p>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <a class="delivery-link" href="#">Order a delivery
              <img class="delivery-icon" src={DeliveryIcon} alt="" width= "24px" /> </a>
            </div>
            <div class="grid-specials-content">
              <img src={Bruchetta} width="272px" height="180 px"/>
              <div class="content-title">
                <h3>Bruchette</h3>
                <p class="specials-price">$12.99</p>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <a class="delivery-link" href="#">Order a delivery
              <img class="delivery-icon" src={DeliveryIcon} alt="" width= "24px" /> </a>
            </div>
            <div class="grid-specials-content">
              <img src={Dessert} width="272px" height="180 px"/>
              <div class="content-title">
                <h3>Dessert</h3>
                <p class="specials-price">$12.99</p>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <a class="delivery-link" href="#">Order a delivery
              <img class="delivery-icon" src={DeliveryIcon} alt="" width= "24px" /> </a>
            </div>
          </div>
        </div>
        </article>
        <article id="little-lemon-testimonials">
        <div class="testimonials-section">
          <h2>Testimonials</h2>
          <div class="grid-container-testimonials">
            <div class="grid-testimonials-content">
              <h3>Rating</h3>
              <div class="person-info">
                <img class="person-icon" src={Person} alt="" width="60 px" height="60 px" />
                <p class="person-name">Name</p>
              </div>
              <p>Review here</p>
            </div>
            <div class="grid-testimonials-content">
              <h3>Rating</h3>
              <div class="person-info">
                <img class="person-icon" src={Person} alt="" width="60 px" height="60 px" />
                <p class="person-name">Name</p>
              </div>
              <p>Review here</p>
            </div>
            <div class="grid-testimonials-content">
              <h3>Rating</h3>
              <div class="person-info">
                <img class="person-icon" src={Person} alt="" width="60 px" height="60 px" />
                <p class="person-name">Name</p>
              </div>
              <p>Review here</p>
            </div>
            <div class="grid-testimonials-content">
              <h3>Rating</h3>
              <div class="person-info">
                <img class="person-icon" src={Person} alt="" width="60 px" height="60 px" />
                <p class="person-name">Name</p>
              </div>
              <p>Review here</p>
            </div>
          </div>
        </div>
        </article>
        <article id="little-lemon-profile">
        <div class="profile-container">
          <div class="profile-content">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div class="profile-image">
            <img src={ProfilePhoto} width="340px" height="390px" id="profile-photo" alt=""/>
          </div>
        </div>
        </article>
      </main>
    );
  }
  
  export default Main;