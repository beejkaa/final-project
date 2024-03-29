import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from './Homepage.js';
import BookingPage from './BookingPage.js';

export default function Routing() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/reservation" element={<BookingPage />} />
        </Routes>
    </BrowserRouter>
  );
}