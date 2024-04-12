import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home/Home";
import Book from "./Routes/Book/Book";
import SingleBook from "./Routes/Book/SingleBook";
import CreateBook from "./Routes/Book/CreateBook";
import EditBook from "./Routes/Book/EditBook";
import About from "./Routes/About/About";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Books" element={<Book />} />
          <Route path="/Books/:slug" element={<SingleBook />} />
          <Route path="/createBook" element={<CreateBook />} />
          <Route path="/editBook/:slug" element={<EditBook />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
