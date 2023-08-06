import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages
import Navbar from './components/pages/navbar/Navbar'
import HomePage from './components/pages/HomePage';
import AbautePage from "./components/pages/AbautePage";
import CreatePage from "./components/pages/CreatePage";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="AbautePage" element={<AbautePage />} />
          <Route path="CreatePage" element={<CreatePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
