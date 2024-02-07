import Introimg from "./restauranfood.jpg"
import GreekSalad from "./images/greek_salad.jpg"
import Bruchetta from "./images/bruchetta.svg"
import Dessert from "./images/lemon dessert.jpg"
import DeliveryIcon from "./images/motorcycle.png"
function Main() {
    return (
      <main>
        <article id="little-lemon-intro">
        <div class="grid-container">
          <div class="grid-child-content">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div class="grid-child-image">
            <img src={Introimg} width="307px" height="422px" id="img_intro" alt=""/>
          </div>
        </div>
        </article>
        <article id="little-lemon-specials">
        <div class="specials-section">
          <h2>Specials</h2>
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
          <h1>Testimonials</h1>
        </article>
        <article id="little-lemon-profile">
          <h1>Little Lemon</h1>
        </article>
      </main>
    );
  }
  
  export default Main;