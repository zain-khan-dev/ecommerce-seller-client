import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import About from "./pages/About"
import Navbar from "./component/Navbar";
import SellerProducts from "./pages/SellerProducts";
import LoginForm from "./component/LoginForm"
import CreateProduct from "./component/CreateProduct";
import SellerOrders from "./pages/SellerOrders";
import ProductEdit from "./pages/ProductEdit";
import Home from "./pages/Home"
import RegisterForm from "./component/RegisterForm";


function App() {
  return (
    <div className="md:w-3/4 mx-auto">
      <Router>
          <Navbar />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<SellerProducts />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/createProduct" element={<CreateProduct />} />
            <Route path="/orders" element={<SellerOrders />} />
            <Route path="/productEdit/:id" element={<ProductEdit />} />
            <Route path="/" element={<Home />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
