import { Route, Routes } from "react-router-dom";
import Navbar from "../components/nav/Navbar";
import Account from "./Account";
import Browse from "./Browse";
import Home from "./Home";
import TvShows from "./TvShows";

const Pages = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/tvshows" element={<TvShows />} />
      </Routes>
    </>
  );
};

export default Pages;
