import React, { Suspense } from "react";

import {
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";

const Header = React.lazy(() =>
  import("header/Header")
);

const Cards = React.lazy(() =>
  import("cards/Cards")
);

const Footer = React.lazy(() =>
  import("footer/Footer")
);

function Home() {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      
      <Header />

      <main className="max-w-7xl mx-auto px-6 pb-6 pt-3">
        <Cards />
      </main>

      <Footer />

    </div>
  );
}

function App() {
  return (
    <Suspense
      fallback={<div>Loading...</div>}
    >
      
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

      </Routes>
    </Suspense>
  );
}

export default App;