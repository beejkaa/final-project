import Introimg from "./restauranfood.jpg"
function Intro() {
    return (
     <article id="little-lemon-intro">
        <div class="grid-container">
          <div class="grid-child-content">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div class="button"><a href="#" role="button">Reserve a table</a></div>
          </div>
          <div class="grid-child-image">
            <img src={Introimg} width="307px" height="422px" id="img_intro" alt=""/>
          </div>
        </div>
     </article>
)
}
export default Intro;