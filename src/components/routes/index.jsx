import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as routePaths from "../../constants/routes";
import Layout from "../ui/Layout";

function routes() {
  return (
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<div>Home</div>} />
            <Route path={routePaths.ROUTE_USER_CV} element={<div>User Resume</div>} />
            <Route path="*" element={<div>404 page not found</div>} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default routes;
