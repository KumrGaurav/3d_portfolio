import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { About, Contact, Home, Projects } from "./pages";
import StarsCanvas from "./components/canvas/Stars";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop"; // ⬅️ Import the component

const App = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <main className="relative bg-[#050816] z-0 min-h-screen overflow-hidden">
        <Router>
          <ScrollToTop /> {/* ⬅️ Add this here */}
          <Navbar />
          <StarsCanvas />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/*"
              element={
                <>
                  <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                  <Footer />
                </>
              }
            />
          </Routes>
        </Router>
      </main>
    </>
  );
};

export default App;
