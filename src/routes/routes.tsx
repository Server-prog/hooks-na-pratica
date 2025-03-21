import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Header from "../components/header"
import Footer from "../components/footer"

export default function AppRoutes() {
    return (
        <Router>
            <Header />
            <main className="container mx-auto p-4">
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
    }