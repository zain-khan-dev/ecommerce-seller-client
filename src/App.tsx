import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import About from "./pages/About"
import Navbar from "./component/Navbar";;
import SellerProducts from "./pages/SellerProducts";
import LoginForm from "./component/LoginForm"
import CreateProduct from "./component/CreateProduct";
import SellerOrders from "./pages/SellerOrders";
import ProductEdit from "./pages/ProductEdit";


function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<SellerProducts />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/createProduct" element={<CreateProduct />} />
          <Route path="/orders" element={<SellerOrders />} />
          <Route path="/productEdit/:id" element={<ProductEdit />} />
        </Routes>
    </Router>
  );
}

export default App;
