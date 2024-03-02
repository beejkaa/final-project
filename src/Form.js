function Form() {
    return (
       <main id="form-content">
            <h2>Reserve your table!</h2>
            <form>
                <fieldset>
                    <legend>
                        <h3>Reservation details</h3>
                    </legend>
                    <div class="form-fields">
                        <label for="reservation-date">Select a date:</label>
                        <input type="date" name="date" id="reservation-date"/>
                    </div>
                    <div class="form-fields">
                        <label for="reservation-time">Pick a time:</label>
                        <input type="time" name="time" id="reservation-time" />
                    </div>
                    <div class="form-fields">
                        <label for="reservation-people">Number of people:</label>
                        <input type="text" name="people" id="reservation-people" />
                    </div>
                    <div class="form-fields">
                        <label for="reservation-occasion">Select Occasion:</label>
                        <select id="occasion-select">
                            <option selected disabled hidden>Occasion</option>
                            <option value="1">Birthday</option>
                            <option value="2">Enagagement</option>
                            <option value="3">Anniversary</option>
                        </select> 
                    </div>
                    <div class="button" id="availability-btn"><a href="#" role="button">Check the availability</a></div>
                </fieldset>
                <hr></hr>
                <fieldset>
                    <legend>
                        <h3>Contact information</h3>
                    </legend>
                    <div class="form-fields">
                        <label for="reservation-first-name">First Name:</label>
                        <input type="text" name="first-name" id="reservation-first-name"/>
                    </div>
                    <div class="form-fields">
                        <label for="reservation-last-name">Last Name:</label>
                        <input type="text" name="last-name" id="reservation-last-name" />
                    </div>
                    <div class="form-fields">
                        <label for="reservation-email">Email:</label>
                        <input type="email" name="email" id="reservation-email" />
                    </div>
                    <div class="form-fields">
                        <label for="reservation-phone">Phone number:</label>
                        <input type="tel" name="tel" id="reservation-phone" />
                    </div>
                    <div class="form-fields">
                        <label for="reservation-note" id="reservation-note-label">Note (e. g. special requirements):</label>
                        <input type="text" name="note" id="reservation-note" />
                    </div>
                </fieldset>
                <hr></hr>
                <fieldset>
                    <legend>
                        <h3>Confirm reservation</h3>
                    </legend>
                    <div class="checkbox">
                        <input type="checkbox" name="declaration" id="declaration"/>
                        <label for="declaration" id="declaration-label">I declare that all the entered data are true and I undertake to pay the reservation fee in the amount of €10.</label>
                    </div>
                    <div class="checkbox">
                        <input type="checkbox" name="agreement" id="agreement" />
                        <label for="agreement" id="agreement-label">I agree to the processing of personal data.</label>
                    </div>
                    <div class="button" id="reservation-btn"><a href="#" role="button">Create reservation</a></div>
                </fieldset>
            </form>
       </main> 
    )
}
export default Form;