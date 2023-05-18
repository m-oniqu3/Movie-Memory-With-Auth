import { Route, Routes } from "react-router-dom";
import Navbar from "../components/nav/Navbar";
import Account from "./Account";
import Home from "./Home";

const Pages = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </>
  );
};

export default Pages;
