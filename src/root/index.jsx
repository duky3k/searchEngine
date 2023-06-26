import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import AdvancedSearch from '../pages/AdvancedSearch';
import DetailSearch from '../pages/DetailsSearch';

const Root = () => {
  return (
    <Routes>
      <Route element={<AdvancedSearch />} path="/" />
      <Route element={<DetailSearch />} path="/result-details" />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default Root