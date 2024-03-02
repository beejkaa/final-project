import logo from "./Logo.svg"
import FacebookIcon from "./images/facebook.png"
import InstagramIcon from "./images/instagram.webp"
import WhatsappIcon from "./images/whatsapp.png"
import EmailIcon from "./images/email.png"
function Footer() {
    return (
      <footer>
        <div class="footer-nav-container">
          <div class="footer-content">
            <img src={logo} width="250px" id="footer-logo" alt="Little Lemon restaurant"/>
          </div>
          <div class="footer-content">
            <div class="footer-heading">
              <h4>Doormat Navigation</h4>
            </div>
            <ul class="footer-list">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Menu</a>
              </li>
              <li>
                <a href="#">Reservations</a>
              </li>
              <li>
                <a href="#">Order Online</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
            </ul>
          </div>
          <div class="footer-content">
            <div class="footer-heading">
              <h4>Contact</h4>
            </div>
            <ul class="footer-list">
              <li>
                <a href="#">Address</a>
              </li>
              <li>
                <a href="#">Phone number</a>
              </li>
              <li>
                <a href="#">Email</a>
              </li>
            </ul>
          </div>
          <div class="footer-content">
            <div class="footer-heading">
              <h4>Social media links</h4>
             </div> 
            <ul class="footer-list">
              <li>
                <a href="#">Address</a>
              </li>
              <li>
                <a href="#">Phone number</a>
              </li>
              <li>
                <a href="#">Email</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-socials-container">
          <div class="copyright">
            <p>© Little Lemon 2024</p>
          </div>
          <div class="social-media">
          <ul class="socials-list">
            <li>
              <a href="#"><img src={FacebookIcon} width="50px" id="facebook-icon" alt="Facebook"/></a>
            </li>
            <li>
              <a href="#"><img src={InstagramIcon} width="40px" id="instagram-icon" alt="Instagram"/></a>
            </li>
            <li>
              <a href="#"><img src={WhatsappIcon} width="35px" id="whatsapp-icon" alt="Whatsapp"/></a>
            </li>
            <li>
              <a href="#"><img src={EmailIcon} width="40px" id="email-icon" alt="Email"/></a>
            </li>
        </ul>
          </div>
        </div>
      </footer>
    );
  }
  export default Footer;