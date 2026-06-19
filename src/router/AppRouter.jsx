import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layout/MainLayout/MainLayout";

import Home from "../pages/Home/Home";
import AddEntry from "../pages/AddEntry/AddEntry";
import EditEntry from "../pages/EditEntry/EditEntry";
import NotFound from "../pages/NotFound/NotFound";

function AppRouter() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddEntry />} />
          <Route path="/edit/:id" element={<EditEntry />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default AppRouter;