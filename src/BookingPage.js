import Header from './Header.js';
import Nav from './Nav.js';
import Intro from './Intro.js';
import Form from './Form.js';
import Footer from './Footer.js';
import { useReducer } from "react";
import { fetchAPI } from "/bookingsAPI.js";
export default function BookingPage() {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      <Header></Header>
        <Nav></Nav>
        <Intro></Intro>
        <Form availableTimes={availableTimes} updateTimes={dispatch}></Form>
        <Footer></Footer>
    </>
  );
}