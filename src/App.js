import "./App.css";
import { Header } from "./layout/Header";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { HomePage } from "./Components/Homepage/HomePage";
import { LunchelloPage } from "./Pages/LunchelloPage";
import { OurStoryPage } from "./Pages/OurStoryPage";
import { CausesPage } from "./Pages/CausesPage";
import { FoodWarriorPage } from "./Pages/FoodWarriorPage";
import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";
import FoodWastage from "./Components/FoodWastage/FoodWastage";
import FoodHunger from "./Components/FoodHunger/FoodHunger";
import Header1 from "./layout/Header1";
import DonationPage from "./Components/DonationPage/DonationPage";
import ContactUs from "./Components/ContactUsPage/ContactUs";
import { useLocation } from "react-router-dom";
import Membership from "./Components/Membershippage/Membership";
import FoodtypePage from "./Components/FoodTypePage/FoodtypePage";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const hideNavbar = location.pathname === "/ContactUs";

  return (
    <div className="Apppage">
      <div className="header1">
        <Header1 />
      </div>

      <div className="header">
        <Header />
      </div>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/linchello" element={<LunchelloPage />} />
        <Route path="/OurStory" element={<OurStoryPage />} />
        <Route path="/Causes" element={<CausesPage />} />
        <Route path="/FoodWarrior" element={<FoodWarriorPage />} />
        <Route path="/FoodWastage" element={<FoodWastage />} />
        <Route path="/FoodHunger" element={<FoodHunger />} />
        <Route path="/DonationPage" element={<DonationPage />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/MembershipForm" element={<Membership />} />
        <Route path="/Foodtype" element={<FoodtypePage/>} />
      </Routes>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
