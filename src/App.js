import React, {useState, useEffect, Fragment}  from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios"

import BookContextProvider from './context/BookContext';
import { Books ,EditForm} from "./components";

import Home from "./pages/Home"
import EditBookPage from './pages/EditBookPage';
import './App.css';


function App() {
  return (
    <div>
      <BrowserRouter>
      <BookContextProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path="edit_book/:id" element={<EditBookPage/>} />
        </Routes>
        </BookContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
