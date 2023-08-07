// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowList from "./components/ShowList";
import ShowSummary from "./components/ShowSummary";
import BookingForm from "./components/BookingForm";

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" exact element={<ShowList />} />
        <Route path="show/:id" element={<ShowSummary />} />
        <Route path="booking/:id" element={<BookingForm />} />
      </Routes>
    </Router>
  );
}

export default App;
