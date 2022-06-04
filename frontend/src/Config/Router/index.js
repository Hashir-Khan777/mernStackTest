import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Header } from "../../components";
import { Home, ProductDetails } from "../../pages";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route caseSensitive path="/" element={<Home />} />
        <Route
          caseSensitive
          path="/product/:_id"
          element={<ProductDetails />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
