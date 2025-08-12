import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import HomeCoffeeLovers from "./pages/HomeCoffeeLovers";
import MobileCoffeeCartOwners from "./pages/MobileCoffeeCartOwners";
import OfficePantryManagers from "./pages/OfficePantryManagers";
import TravelCoffeeLovers from "./pages/TravelCoffeeLovers";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
    <Routes>
      <Route path="/" element={<Navigate to="/home-coffee-lovers" replace />} />
      <Route path="/home-coffee-lovers" element={<HomeCoffeeLovers />} />
      <Route path="/mobile-coffee-cart-owners" element={<MobileCoffeeCartOwners />} />
      <Route path="/office-pantry-managers" element={<OfficePantryManagers />} />
      <Route path="/travel-coffee-lovers" element={<TravelCoffeeLovers />} />
    </Routes>
    </    BrowserRouter>
  );
}
