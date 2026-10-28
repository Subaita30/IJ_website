
import { Routes, Route } from "react-router-dom";
import Navbar from "./navigation/Navbar";
import Home from "./pages/Home";
import Realtor from "./pages/Realtor";

function App() {
  return (
    <>
     <div className="min-h-screen bg-[#F9FAFB] text-[#211F1B]">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/about"
          element={<h1 className="p-10 text-3xl">About Page</h1>}
        />

        <Route
          path="/service"
          element={<h1 className="p-10 text-3xl">Service Page</h1>}
        />

        <Route
          path="/case-study"
          element={<h1 className="p-10 text-3xl">Case Study Page</h1>}
        />
        <Route
          path="/photo-story"
          element={<h1 className="p-10 text-3xl">Contact Page</h1>}
        />

        <Route
          path="/blog"
          element={<h1 className="p-10 text-3xl">Blog Page</h1>}
        />

        <Route
          path="/contact"
          element={<h1 className="p-10 text-3xl">Contact Page</h1>}
        />

        <Route
          path="/realtor"
          element={<Realtor />}
        />

        <Route
          path="*"
          element={<h1 className="p-10 text-3xl">404 - Page Not Found</h1>}
        />
      </Routes>
      </div>
    </>
  );
}

export default App;
