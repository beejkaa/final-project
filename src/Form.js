import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Form() {
    const [loading, setLoading] = useState(false);
    const validateSchema = Yup.object().shape({
        date: Yup.string().required("The field 'Select a date' is required"),
        time: Yup.string().required("The field 'Pick a time' is required"),
        people: Yup.string().required("The field 'Number of people' is required"),
        occassion: Yup.string().required("The field 'Select Occasion' is required"),
        firstName: Yup.string().required("The field 'First Name' is required"),
        lastName: Yup.string().required("The field 'Last Name' is required"),
        email: Yup.string().email("Invalid email address").required("The field 'Email' is required"),
        tel: Yup.string().required("The field 'Phone number' is required"),
        declaration: Yup.bool().oneOf([true], "The Declaration is required and must be checked"),
        agreement: Yup.bool().oneOf([true], "The Agreement is required and must be checked"),
      })
    
      const formik = useFormik({
        initialValues: {
            date: "",
            time: "",
            people: "",
            occassion: "",
            firstName: "",
            lastName: "",
            email: "",
            tel: "",
            note: "",
            declaration: false,
            agreement: false,
        },
        validationSchema: validateSchema,
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            setLoading(true);
            setTimeout(() => {
            setLoading(false);
            resetForm();
            alert("success");
        }, 1000 * 2);
    },
    });

    return (
       <main id="form-content">
            <h2>Reserve your table!</h2>
            <form className="reservation-form" onSubmit={formik.handleSubmit}>
                <fieldset>
                    <legend>
                        <h3>Reservation details</h3>
                    </legend>
                    <div className="form-fields">
                        <label htmlFor="reservation-date">Select a date:</label>
                        <input type="date" name="date" id="reservation-date" value={formik.values.date} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                        {formik.touched.date && formik.errors.date &&(<p className="error-status">{formik.touched.date && formik.errors.date}</p>)}
                    </div>
                    <div className="form-fields">
                        <label htmlFor="reservation-time">Pick a time:</label>
                        <input type="time" name="time" id="reservation-time" value={formik.values.time} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                        {formik.touched.time && formik.errors.time && (<p className="error-status">{formik.touched.time && formik.errors.time}</p>)}
                    </div>
                    <div className="form-fields">
                        <label htmlFor="reservation-people">Number of people:</label>
                        <input type="text" name="people" id="reservation-people" value={formik.values.people} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                        {formik.touched.people && formik.errors.people && (<p className="error-status">{formik.touched.people && formik.errors.people}</p>)}
                    </div>
                    <div className="form-fields">
                        <label htmlFor="reservation-occasion">Select Occasion:</label>
                        <select id="occasion-select" name="occassion" value={formik.values.occassion} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                            <option value="0">Select Occasion</option>
                            <option value="1">Birthday</option>
                            <option value="2">Enagagement</option>
                            <option value="3">Anniversary</option>
                        </select>
                        {formik.touched.occassion && formik.errors.occassion && (<p className="error-status">{formik.touched.occassion && formik.errors.occassion}</p>)}
                    </div>
                    <div className="availability-button" id="availability-btn"><a href="#" role="button">Check the availability</a></div>
                </fieldset>
                <hr></hr>
                <fieldset>
                    <legend>
                        <h3>Contact information</h3>
                    </legend>
                    <div className="form-fields">
                        <label htmlFor="reservation-first-name">First Name:</label>
                        <input type="text" name="firstName" id="reservation-first-name" value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                        {formik.touched.firstName && formik.errors.firstName && (<p className="error-status">{formik.touched.firstName && formik.errors.firstName}</p>)}
                    </div>
                    <div className="form-fields">
                        <label htmlFor="reservation-last-name">Last Name:</label>
                        <input type="text" name="lastName" id="reservation-last-name" value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                        {formik.touched.lastName && formik.errors.lastName && (<p className="error-status">{formik.touched.lastName && formik.errors.lastName}</p>)}
                    </div>
                    <div className="form-fields">
                        <label htmlFor="reservation-email">Email:</label>
                        <input type="email" name="email" id="reservation-email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                        {formik.touched.email && formik.errors.email && (<p className="error-status">{formik.touched.email && formik.errors.email}</p>)}
                    </div>
                    <div className="form-fields">
                        <label htmlFor="reservation-phone">Phone number:</label>
                        <input type="tel" name="tel" id="reservation-phone" value={formik.values.tel} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                        {formik.touched.tel && formik.errors.tel && (<p className="error-status">{formik.touched.tel && formik.errors.tel}</p>)}
                    </div>
                    <div className="form-fields">
                        <label htmlFor="reservation-note" id="reservation-note-label">Note (e. g. special requirements):</label>
                        <input type="text" name="note" id="reservation-note" value={formik.values.note} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    </div>
                </fieldset>
                <hr></hr>
                <fieldset>
                    <legend>
                        <h3>Confirm reservation</h3>
                    </legend>
                    <div className="checkbox">
                        <input type="checkbox" name="declaration" id="declaration" value={formik.values.declaration} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                        <label htmlFor="declaration" id="declaration-label">I declare that all the entered data are true and I undertake to pay the reservation fee in the amount of €10.</label>
                        {formik.touched.declaration && formik.errors.declaration && (<p className="error-status">{formik.touched.declaration && formik.errors.declaration}</p>)}
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" name="agreement" id="agreement" value={formik.values.agreement} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                        <label htmlFor="agreement" id="agreement-label">I agree to the processing of personal data.</label>
                        {formik.touched.agreement && formik.errors.agreement && (<p className="error-status">{formik.touched.agreement && formik.errors.agreement}</p>)}
                    </div>
                    <div className="button" id="reservation-btn"><button disabled={loading} type={"submit"}>Create reservation</button></div>
                </fieldset>
            </form>
       </main>
    )
}

export default Form;