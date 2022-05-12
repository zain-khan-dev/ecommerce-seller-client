import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Navbar from "./component/Navbar";
import { Container } from "@mui/material";
import SellerProducts from "./pages/SellerProducts";
import LoginForm from "./component/LoginForm"
import CreateProduct from "./component/CreateProduct";
function App() {
  return (
    <Router>
      <Container maxWidth="xl">
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<SellerProducts />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/createProduct" element={<CreateProduct />} />
          {/* <Route path="/editProduct/:id" element={<EditProduct />} /> */}
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
