import { Route, Routes } from "react-router-dom";
import Account from "./Account";
import Home from "./Home";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  );
};

export default Pages;
