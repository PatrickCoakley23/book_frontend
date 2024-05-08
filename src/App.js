import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookContextProvider from './context/BookContext';
import Home from "./pages/Home"
import EditBookPage from './pages/EditBookPage';
import {Nav} from './components'
import './App.css';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav />
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
