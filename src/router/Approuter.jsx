import {BrowserRouter, Routes, Route} from "react-router";
import {App} from "../App";
import Orders from "../pages/Orders";
import {IcecreamBuilderPage} from "../pages/IcecreamBuilderPage";

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<IcecreamBuilderPage />} />
        <Route path="orders" element={<Orders />} />
        <Route path="try" element={<div>this is a try</div>} />
      </Routes>
    </>
  );
}
